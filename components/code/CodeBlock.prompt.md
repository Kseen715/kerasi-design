Syntax-highlighted code block with filename header, line numbers and copy; use for any code on blog, docs, repo views.
```jsx
<CodeBlock language="ts" title="bloom.ts" code={src} highlightLines={[3]}/>
<CodeBlock language="diff" code={patch} theme="rust-dark"/>
```
- Built-in lightweight highlighter (no deps): ts/js/jsx, python, rust, go, sql, shell, css, html, json, yaml, diff.
- Colours = `--syn-*` tokens (bg, fg, comment, keyword, string, number, function, type, property, operator, punct, tag, attr, lineno, line-hl, added, removed, border), defined for all six themes.
- `theme` lets a block be dark on a light page.
