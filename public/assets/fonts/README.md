# Website fonts

The site self-hosts its Noto Sans SC, Noto Serif SC and Instrument font files here. The editorial typography additionally loads EB Garamond and LXGW WenKai Screen from pinned external CSS endpoints; both have local/system fallback fonts.

- **Noto Sans SC**: Simplified Chinese body text, variable weights 300–700. Subset generated from the site's Astro, Markdown, TypeScript and Svelte sources.
- **Noto Serif SC**: Light editorial headings, variable weights 300–700, using the same site character subset.

The current site loads these two Chinese families in batches of at most 200 characters, using `src/styles/generated-fonts.css` and local `notosanssc-*.woff2` / `notoserifsc-*.woff2` files. Splitting the request avoids long text-subset URLs being returned as unrelated default font slices. The earlier single-file subsets are retained but no longer referenced by the site styles.
- **Manrope**: Latin variable font retained in the asset directory but not used for the editorial typography.
- **EB Garamond** (Google Fonts): Latin body, project names and the Wangles wordmark.
- **LXGW WenKai Screen** (jsDelivr): Chinese section and article headings; falls back to system KaiTi and then Noto Serif SC.

Sources:

- https://fonts.google.com/specimen/EB+Garamond (SIL OFL 1.1)
- https://github.com/CMBill/lxgw-wenkai-screen-web (SIL OFL 1.1 for the font)

- https://github.com/google/fonts/tree/main/ofl/notosanssc
- https://github.com/google/fonts/tree/main/ofl/notoserifsc
- https://github.com/google/fonts/tree/main/ofl/manrope

Downloaded from the official Google Fonts CSS service. The `*.source.css` files record the exact returned source URLs. The accompanying OFL licenses must be kept with redistributions.

After adding new Chinese text, run `node tools/update-fonts.cjs` from the repository root to refresh the Chinese character subset. This command requires network access and curl.

Adobe Fonts was requested for discovery, but its initialization returned an OAuth authorization error in this session. These are independently sourced open fonts, not fonts activated or recommended through the Adobe connector.
