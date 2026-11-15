#!/usr/bin/env python3
"""Install full-coverage EB Garamond and LXGW WenKai Screen for local serving.

WenKai comes from the complete pinned npm webfont package, which already
splits its entire glyph repertoire using unicode-range. This NEVER filters
characters based on what currently appears in the site's posts.
"""
from __future__ import annotations

import hashlib
import re
import shutil
import subprocess
import tarfile
import tempfile
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DEST = ROOT / "public" / "assets" / "fonts"
WENKAI_PACKAGE = "lxgw-wenkai-screen-web@1.522.0"
EB_REPOSITORY_REVISION = "cc39c4c2c304bc368c9b7c311ea2bcc6013299fe"
EB_BLOB_SHA = "52d34b86ec20977f222ce37e8158e6b3002c0a31"


def fetch(url: str) -> bytes:
    request = urllib.request.Request(url, headers={"User-Agent": "Wangles-font-bundle/1.0"})
    with urllib.request.urlopen(request, timeout=120) as response:
        return response.read()


def main() -> None:
    DEST.mkdir(parents=True, exist_ok=True)
    eb_url = (
        f"https://raw.githubusercontent.com/google/fonts/{EB_REPOSITORY_REVISION}"
        "/ofl/ebgaramond/EBGaramond%5Bwght%5D.ttf"
    )
    eb_font = fetch(eb_url)
    blob_sha = hashlib.sha1(b"blob " + str(len(eb_font)).encode() + b"\0" + eb_font).hexdigest()
    if blob_sha != EB_BLOB_SHA:
        raise RuntimeError(f"EB Garamond payload checksum mismatch: {blob_sha}")
    (DEST / "eb-garamond-variable.ttf").write_bytes(eb_font)
    (DEST / "eb-garamond-OFL.txt").write_bytes(fetch(
        f"https://raw.githubusercontent.com/google/fonts/{EB_REPOSITORY_REVISION}/ofl/ebgaramond/OFL.txt"
    ))

    with tempfile.TemporaryDirectory(prefix="wenkai-font-bundle-") as temp:
        result = subprocess.run(
            ["npm", "pack", WENKAI_PACKAGE, "--silent", "--pack-destination", temp],
            capture_output=True, text=True, check=True
        )
        packs = list(Path(temp).glob("*.tgz"))
        if len(packs) != 1:
            raise RuntimeError(f"Expected one npm package tarball, found {packs}; {result.stdout}")
        target = DEST / "lxgwwenkaiscreen"
        if target.exists():
            shutil.rmtree(target)
        target.mkdir(parents=True)
        prefix = "package/lxgwwenkaiscreen/"
        copied = 0
        with tarfile.open(packs[0], "r:gz") as archive:
            for member in archive:
                if not member.isfile() or not member.name.startswith(prefix):
                    continue
                relative = Path(member.name[len(prefix):])
                if not relative.parts or ".." in relative.parts:
                    raise RuntimeError(f"Unsafe npm archive path: {member.name}")
                out = target / relative
                out.parent.mkdir(parents=True, exist_ok=True)
                source = archive.extractfile(member)
                if source is None:
                    raise RuntimeError(f"Unreadable npm archive entry: {member.name}")
                with source, out.open("wb") as dest_file:
                    shutil.copyfileobj(source, dest_file)
                copied += 1

    css_path = target / "result.css"
    if not css_path.is_file():
        raise RuntimeError("Missing LXGW WenKai Screen result.css in the pinned package")
    css = css_path.read_text(encoding="utf-8")
    if "LXGW WenKai Screen" not in css or "unicode-range" not in css:
        raise RuntimeError("Unexpected WenKai CSS: missing font-family or unicode-range rules")
    refs = re.findall(r"url\(\s*['\"]?([^'\"\)]+)", css, re.IGNORECASE)
    if not refs:
        raise RuntimeError("Expected WenKai font URLs in result.css")
    for ref in refs:
        if ref.startswith(("http:", "https:", "//", "data:")):
            raise RuntimeError(f"WenKai stylesheet references a remote font: {ref}")
        rel = urllib.parse.unquote(ref.split("?", 1)[0].split("#", 1)[0])
        full = (target / rel).resolve()
        if not full.is_relative_to(target.resolve()) or not full.is_file():
            raise RuntimeError(f"WenKai stylesheet references a missing file: {ref}")

    (DEST / "lxgw-wenkai-screen-OFL.txt").write_bytes(fetch(
        "https://raw.githubusercontent.com/lxgw/LxgwWenKai-Screen/main/OFL.txt"
    ))
    print(f"Installed EB Garamond ({len(eb_font):,} bytes) and WenKai ({copied} files, {len(refs)} verified URLs).")


if __name__ == "__main__":
    main()
