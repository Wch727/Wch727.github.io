# Website fonts

The site serves its font files from this directory, so visitors do not need to connect to an external font CDN.

- **Noto Sans SC**: Simplified Chinese body text, variable weights 300–700. Subset generated from the site's Astro, Markdown, TypeScript and Svelte sources.
- **Noto Serif SC**: Light editorial headings, variable weights 300–700, using the same site character subset.
- **Manrope**: Latin text and display name, variable weights 300–700, Latin character set.

Sources:

- https://github.com/google/fonts/tree/main/ofl/notosanssc
- https://github.com/google/fonts/tree/main/ofl/notoserifsc
- https://github.com/google/fonts/tree/main/ofl/manrope

Downloaded from the official Google Fonts CSS service. The `*.source.css` files record the exact returned source URLs. The accompanying OFL licenses must be kept with redistributions.

After adding new Chinese text, run `node tools/update-fonts.cjs` from the repository root to refresh the Chinese character subset. This command requires network access and curl.

Adobe Fonts was requested for discovery, but its initialization returned an OAuth authorization error in this session. These are independently sourced open fonts, not fonts activated or recommended through the Adobe connector.
