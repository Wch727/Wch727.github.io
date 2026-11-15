# Website fonts

The site serves its fonts from the same origin. The existing Noto Sans SC, Noto Serif SC and Instrument files are checked into the repo. EB Garamond and LXGW WenKai Screen are copied to the deploy artifact by `tools/bundle-editorial-fonts.py` in GitHub Actions. No font CDN is required for visitors.

- **Noto Sans SC**: Simplified Chinese body text, variable weights 300–700. Subset generated from the site's Astro, Markdown, TypeScript and Svelte sources.
- **Noto Serif SC**: Light editorial headings, variable weights 300–700, using the same site character subset.

The current site loads these two Chinese families in batches of at most 200 characters, using `src/styles/generated-fonts.css` and local `notosanssc-*.woff2` / `notoserifsc-*.woff2` files. Splitting the request avoids long text-subset URLs being returned as unrelated default font slices. The earlier single-file subsets are retained but no longer referenced by the site styles.
- **Manrope**: Latin variable font retained in the asset directory but not used for the editorial typography.
- **EB Garamond** (Google Fonts): Complete variable TTF from a pinned Google Fonts revision, checked by Git blob SHA and stored locally as `eb-garamond-variable.ttf`.
- **LXGW WenKai Screen**: Full set of Unicode-range webfont pieces from the pinned `lxgw-wenkai-screen-web@1.522.0` npm package, including its `result.css`. These ranges cover the source font release, **not just characters currently used by the site**. Browsers load the font pieces needed for each page.

Sources:

- https://fonts.google.com/specimen/EB+Garamond (SIL OFL 1.1)
- https://github.com/CMBill/lxgw-wenkai-screen-web (SIL OFL 1.1 for the font)

- https://github.com/google/fonts/tree/main/ofl/notosanssc
- https://github.com/google/fonts/tree/main/ofl/notoserifsc
- https://github.com/google/fonts/tree/main/ofl/manrope

Downloaded from the official Google Fonts CSS service. The `*.source.css` files record the exact returned source URLs. The accompanying OFL licenses must be kept with redistributions.

After adding new Chinese text, run `node tools/update-fonts.cjs` from the repository root to refresh the Chinese character subset. This command requires network access and curl.

Adobe Fonts was requested for discovery, but its initialization returned an OAuth authorization error in this session. These are independently sourced open fonts, not fonts activated or recommended through the Adobe connector.

## Build / local development

GitHub Pages runs `python3 tools/bundle-editorial-fonts.py` before Astro check and build. Run that command once after cloning for local development (needs Python 3, Node/npm and network access). Generated font binaries are part of the deployed artifact, not manually checked into git. The script validates the EB font checksum and verifies all WenKai CSS font references point to local files.

The pre-existing Noto Sans/Serif SC subsets are still generated from current source text; run `node tools/update-fonts.cjs` when adding new characters. Unlike those existing Noto subsets, the self-hosted WenKai font covers the full release glyph set.
