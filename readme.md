# Kerasi Design System

**Kerasi** (Greek *κεράσι*, "cherry") is a personal studio / lab identity: a home for long-lived projects — open-source tools, a journal, code repositories, dashboards and visual work. The system is built to be **light, natural, monumental, but sharp and modern**: calm paper grounds, huge condensed uppercase type, and pointed, faceted edges.

## Sources
- `uploads/sakura_logo.svg` — original badge logo (sakura tree, red hill, hanging lanterns, circular brown border). Basis for the redrawn mark and the **Sakura** palette.
- `uploads/photo_2026-10-28_20-18-39.jpg` — palette reference: Wine #773344 · Aged gold #C2A878 · Dark grey #191716. Basis for **Wine**.
- `uploads/photo_2026-10-28_20-18-43.jpg` — palette reference: Rust #B7472A · Chrome #BFC4C7 · Graphite #20252B. Basis for **Rust**.
- No codebase, Figma or existing product UI was provided. All components and screens are original designs for this brand.

## Index
- `styles.css` — entry point (imports only) → `tokens/fonts.css`, `palette.css`, `themes.css`, `syntax.css`, `typography.css`, `spacing.css`, `base.css`
- `assets/favicon/` — `kerasi-favicon.svg` (paper tile), `-dark`, `-bare`; subproject tiles `sub-hanami/bark/lantern/git.svg`, `sub-template.svg`
- `guidelines/favicon-builder.html` — make a subproject favicon, export SVG + PNG 16/32/48/180/512
- `assets/logo/kerasi-mark-on-dark.svg`, `kerasi-mark-wine-on-dark.svg`, `kerasi-mark-rust-on-dark.svg` — use on dark grounds (lighter trunk/ground/sun so they never vanish)
- `assets/logo/` — `kerasi-mark.svg` (primary), `kerasi-mark-wine.svg`, `kerasi-mark-rust.svg`, `kerasi-mark-mono-dark.svg`, `kerasi-mark-mono-light.svg`
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/` — React primitives (see below), one `@dsCard` per folder
- `ui_kits/kerasi/` — web UI kit: `index.html` (click-through), per-screen starting points `home/blog/git/dashboard/diagrams/gallery.html`, `themes.html` matrix
- `thumbnail.html` — project tile · `SKILL.md` — agent skill entry
- `index.html` — interactive gallery of every template, screen and card (reads `_ds_manifest.json`); published to GitHub Pages by `.github/workflows/pages.yml`

## Components
- core: **Favicon**, **Button**, **IconButton**, **Icon**, **Badge**, **Tag**, **Card**, **Logo**, **Mark**
- forms: **Input**, **Select**, **Checkbox**, **Radio**, **Switch**
- navigation: **Tabs**
- code: **CodeBlock** (built-in highlighter: ts/js/jsx, python, rust, go, sql, shell, css, html, json, yaml, diff; samples in `components/code/samples.js`)
- feedback: **Dialog**, **Toast**, **Tooltip**

Intentional additions: **Logo/Mark** (brand lockup drawn inline so it needs no asset path) **Icon** (wrapper for the Lucide CDN set) and **Favicon** (main + subproject tab glyphs).

## Themes
Default `:root` (no `data-theme`) is Sakura, light or dark after the system `prefers-color-scheme`. Set `data-theme` on `<html>` or any container:
`sakura` · `sakura-dark` · `wine` · `wine-dark` · `rust` · `rust-dark`.
Components only read semantic tokens (`--bg`, `--bg-raised`, `--bg-sunken`, `--fg-1..3`, `--line`, `--line-strong`, `--accent`, `--accent-hover`, `--accent-fg`, `--accent-soft`, `--accent-ink`, `--accent-2`, `--accent-3`, `--highlight`, `--chart-1..5`), so every theme works everywhere. Use `--accent-ink` for accent-coloured *text*; `--accent` for fills.

---

## Favicons
- **Main:** the main mark redrawn on a 32px grid (faceted canopy with shadow edge, sun, ground, trunk, two branches, one lantern), edges snapped to whole/half pixels, trunk widened for 16px, inside a paper chamfered tile. `kerasi-favicon.svg`; `-dark` for dark-only contexts; `-bare` only on known-light UI.
- **Subprojects:** chamfered tile in the project's colour, **blossom-pink jagged crown** across the top (the family signal, never recoloured), and a 1-letter label (2 max) in Oswald 700 below. Colour keys: crimson, bark, wine, gold, night, rust, graphite, chrome — one per project, so tabs differ by colour *and* letter.
- `<link rel="icon" href="assets/favicon/kerasi-favicon.svg" type="image/svg+xml">` + PNG fallbacks from the builder (32, 180 for apple-touch-icon).

## Code & syntax
Every theme has its own syntax palette (`tokens/syntax.css`, `--syn-*`): bg, fg, comment (italic), keyword (theme accent, 500), string, number, function (600), type, property, operator, punct, tag, attr, lineno, line-hl, added, removed, border. Light palettes keep every token ≥4.5:1 on `--syn-bg`. Keywords always carry the theme accent; strings take the "natural" counter-colour (moss in Sakura, aged gold in Wine, steel in Rust). Use `<CodeBlock theme="…-dark">` to put a dark block on a light page.

## Responsive
Breakpoints: **mobile <640**, **tablet 640–1023**, **desktop ≥1024** (`useBp()` in `ui_kits/kerasi/Kit.jsx`). Display type is fluid (`clamp(min, size/14.4 vw, size)`); page gutters `clamp(16px,4vw,32px)`.
- **Mobile:** header → logo + menu button → full-width nav list (56px rows) with theme chips; primary actions full width, size `lg`; touch targets ≥44px; chip rows scroll sideways edge to edge; grids collapse to 1 column (stats 2); secondary columns hidden; wide diagrams scroll; Dialog becomes a bottom sheet with stacked actions (automatic <640px, `sheet` prop overrides); toasts span the width 12px from the edges.
- **Tablet:** inline nav, mark without wordmark; 2-column grids; sidebars drop below content.
- Preview: `ui_kits/kerasi/devices.html` shows every page + Elements at 390 and 820, live. `elements.html` shows all components at the current width.

## Ultrawide (21:9)
Goal: the user never turns their head. Templates in `templates/ultrawide-*` (2560×1080 preview, also hold at 3440×1440).
- **Focus zone:** one centred column, max **1720px** (≈35° of view on a 29–34" ultrawide at arm's length). Everything that must be read word by word or clicked goes here: nav, actions, tables, charts, code, body copy.
- **Rails** (space either side): glance-only. Big numerals, status colour blocks, short activity lines, decorative mark/palette. Rail content hugs the inner edge (right-aligned on the left rail, left-aligned on the right), max 340px wide. Nothing in a rail is required to complete a task, and `rails=false` must still leave a complete page.
- **Header:** logo, nav and primary action sit inside the focus zone, not in the screen corners. The header's bottom line runs full width.
- **Fit to height:** dashboards and workspaces fill 1080px without page scroll; panels scroll internally.
- **Line length:** body copy ≤ 62ch even inside the focus zone; split wide areas into columns rather than stretching text.
- Tweaks on every template: `theme`, `rails`, `guides` (dashed overlay showing the focus zone).

## CONTENT FUNDAMENTALS
- **Voice:** calm, precise, a little botanical. Short declarative sentences. Metaphors come from the orchard (roots, pruning, bloom, seasons, lanterns) — used once per surface, never stacked.
- **Person:** "we" for the studio, "you" for the reader. No exclamation marks.
- **Casing:** display + headings + buttons + nav are UPPERCASE (Oswald). Body copy is sentence case. Overlines/labels are mono UPPERCASE with wide tracking ("01 — PROJECTS").
- **Numbering:** sections are indexed `01 — Label`. Dates as "Oct 21, 2026". Code, SHAs and branches always in mono.
- **Emoji:** never. Unicode used only for the em dash, middot separators (·) and the Greek *Κεράσι*.
- **Examples:** "Grown slowly. Cut sharp." · "Projects grown slowly, cut sharp." · "Cut what you would not plant again." · "Lantern 1.0: counting without cookies." · Button labels: "Browse projects", "Read the journal", "Fork".

## VISUAL FOUNDATIONS
- **Colour:** three seasonal families, each light + dark. Sakura (paper #F9F0EC, crimson #AC2937, blossom #EFBCC5, bark #925644/#412017, lantern #ECC483). Wine (#773344, aged gold #C2A878, #191716). Rust (#B7472A, chrome #BFC4C7, graphite #20252B). Grounds are warm/cool off-whites, never pure white. One accent per view; secondary colours appear in data and small marks.
- **Type:** Oswald 600 (display, uppercase, 0.9 line-height, up to 148px) for monumentality; Manrope for reading (16/1.6, 18–22 for lead); JetBrains Mono for labels, data, code. Huge-to-small contrast is the main hierarchy tool — don't use bold body text to shout.
- **Shape:** corners are square (`--radius-0`), inputs 2px. The signature "pointy" edge is the **chamfer** — a 45° corner cut (`clip-path: var(--clip-chamfer)`, 10px; 18px on cards/dialogs) on filled elements only (primary buttons, cut cards, dialogs, flow nodes). Circles appear only as the "sun": radio dots, avatars, toast markers, donut charts.
- **Logo:** redrawn as flat faceted polygons — pointed canopy, angular trunk, blade-like ground, a crimson sun disc, diamond lanterns. No outer border; every point fits an invisible circle. Never place it inside a visible circle or badge, except on the project thumbnail.
- **Spacing & layout:** 4px base; generous whitespace (sections 96px apart, 32px gutters, 1240px container). Sections open with a 2px ink rule + overline + display headline. Grids are hard-edged; colour bands go edge-to-edge without gaps (as in the palette references).
- **Backgrounds:** flat colour only. No gradients, no textures. Full-bleed colour blocks (accent fills with large type) are the "imagery" when no photo exists. Image placeholders use a fine diagonal hatch.
- **Borders & elevation:** 1px hairlines (`--line`) do the structural work; 2px ink rules for section tops. Shadows are almost absent — one soft `--shadow-pop` for dialogs, toasts and hovered clickable cards.
- **Transparency & blur:** only the sticky header (86% bg + 10px blur) and the dialog scrim (35% ink + 6px blur).
- **Motion:** short and decisive — `--ease-out` (cubic-bezier(.2,.7,.1,1)), 120ms for colour, 220ms for movement, 420ms for image scale. No bounce, no spring, no parallax.
- **Hover:** primary buttons darken to `--accent-hover`; outline buttons invert to solid ink; ghost gets the sunken well; trailing arrows nudge 3px right; clickable cards lift 2px with the pop shadow; gallery images scale to .985.
- **Press / focus:** no shrink. Focus is a 2px accent outline offset 2px; inputs add an inner 2px accent underline.
- **Cards:** five kinds — plain (hairline), raised (paper + hairline), cut (chamfered, borderless), rule (2px top rule only), inverse (ink block). No left-border accent cards, no rounded pills.
- **Imagery vibe:** natural, warm, slightly desaturated; matte, no heavy grain. Photography should feel like paper prints (none supplied yet).
- **Data viz:** square markers, hairline grids, mono axis labels, `--chart-1..5` series, dashed line for comparison periods.

## ICONOGRAPHY
- **Set:** [Lucide](https://lucide.dev) via CDN (`lucide-static@0.469.0`), fetched and inlined by the `Icon` component (inherits `currentColor`). Drawn with 1.75px strokes and **square caps / miter joins** to suit the sharp brand. *Substitution:* no icon set was supplied; Lucide is the chosen default.
- Sizes: 14 (sm buttons/badges), 16 (UI), 18 (default), up to 24. Icons never stand alone as decoration — always beside a label or inside an IconButton with `label`.
- No emoji, no icon fonts, no PNG icons. Unicode only as noted above.
- Brand imagery = the mark plus flat colour fields. Do not draw new illustrations; request photography.

## Fonts
Oswald, Manrope and JetBrains Mono are loaded from Google Fonts (`tokens/fonts.css`). No brand font files were provided — swap in licensed files by replacing that import with `@font-face` rules.
