/* @ds-bundle: {"format":4,"namespace":"KerasiDesignSystem_6c0512","components":[{"name":"CodeBlock","sourcePath":"components/code/CodeBlock.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"SUBPROJECT_COLORS","sourcePath":"components/core/Favicon.jsx"},{"name":"Favicon","sourcePath":"components/core/Favicon.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Mark","sourcePath":"components/core/Logo.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/code/CodeBlock.jsx":"c3a51b3e40cc","components/code/samples.js":"89337ac22d4d","components/core/Badge.jsx":"78a2f1b4ba66","components/core/Button.jsx":"d87ac4e65b35","components/core/Card.jsx":"bd736b4ea693","components/core/Favicon.jsx":"02e46d820505","components/core/Icon.jsx":"7a1590261680","components/core/IconButton.jsx":"cfff08c97bc1","components/core/Logo.jsx":"c0c81959e98a","components/core/Tag.jsx":"d53558961ad7","components/feedback/Dialog.jsx":"6982119b3f1f","components/feedback/Toast.jsx":"499a3fb76675","components/feedback/Tooltip.jsx":"b8070ee5ecb3","components/forms/Checkbox.jsx":"b66c4eda1f52","components/forms/Input.jsx":"89e0e1094366","components/forms/Radio.jsx":"f50895f95e8e","components/forms/Select.jsx":"8f9872b12be5","components/forms/Switch.jsx":"24050ec8d1c9","components/navigation/Tabs.jsx":"71b1cf847b4e","ui_kits/kerasi/App.jsx":"f9844ca48696","ui_kits/kerasi/Blog.jsx":"9c7c716c0afe","ui_kits/kerasi/Charts.jsx":"c4867f40d76e","ui_kits/kerasi/Dashboard.jsx":"95941fbb78dc","ui_kits/kerasi/Diagrams.jsx":"bbadfa377b36","ui_kits/kerasi/Elements.jsx":"4ba2de58d6da","ui_kits/kerasi/Gallery.jsx":"0696f6ddadfe","ui_kits/kerasi/Git.jsx":"a1624f465d9b","ui_kits/kerasi/Home.jsx":"af133aa6eeb5","ui_kits/kerasi/Kit.jsx":"774b4faab111"},"inlinedExternals":[],"unexposedExports":[{"name":"highlight","sourcePath":"components/code/CodeBlock.jsx"}]} */

(() => {

const __ds_ns = (window.KerasiDesignSystem_6c0512 = window.KerasiDesignSystem_6c0512 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/code/samples.js
try { (() => {
window.KERASI_CODE_SAMPLES = {
  "ts": ["bloom.ts", "// Schedule a bloom for each branch\nimport { Branch, type Season } from './orchard';\n\ninterface BloomOptions {\n  season: Season;\n  petals?: number;\n}\n\nexport async function bloom(branch: Branch, opts: BloomOptions): Promise<void> {\n  const count = opts.petals ?? 5;\n  if (branch.isPruned) throw new Error(`Branch ${branch.id} was cut`);\n  await branch.open({ count, at: opts.season.peak });\n}"],
  "py": ["harvest.py", "from dataclasses import dataclass\nfrom datetime import date\n\n@dataclass\nclass Cherry:\n    weight: float  # grams\n    picked: date\n\ndef harvest(tree, min_weight=8.5):\n    \"\"\"Return ripe cherries, heaviest first.\"\"\"\n    ripe = [c for c in tree.fruit if c.weight >= min_weight]\n    return sorted(ripe, key=lambda c: c.weight, reverse=True)"],
  "rs": ["prune.rs", "use std::collections::HashMap;\n\n#[derive(Debug, Clone)]\npub struct Branch<'a> {\n    name: &'a str,\n    age: u32,\n}\n\npub fn prune(branches: Vec<Branch>, max_age: u32) -> HashMap<&str, u32> {\n    branches\n        .into_iter()\n        .filter(|b| b.age <= max_age)\n        .map(|b| (b.name, b.age))\n        .collect()\n}\n\nfn main() {\n    println!(\"kept {} branches\", prune(vec![], 10).len());\n}"],
  "go": ["lantern.go", "package lantern\n\nimport (\n\t\"net/http\"\n\t\"time\"\n)\n\n// Count records one visit without cookies.\nfunc Count(w http.ResponseWriter, r *http.Request) {\n\tpath := r.URL.Path\n\tif path == \"\" {\n\t\thttp.Error(w, \"missing path\", 400)\n\t\treturn\n\t}\n\tstore.Incr(path, time.Now().Truncate(time.Hour))\n\tw.WriteHeader(204)\n}"],
  "css": ["theme.css", "/* Chamfered primary button */\n@layer components {\n  .k-button[data-variant=\"primary\"] {\n    --chamfer: 10px;\n    height: 42px;\n    padding: 0 20px;\n    background: var(--accent);\n    color: var(--accent-fg);\n    clip-path: polygon(var(--chamfer) 0, 100% 0, 100% 100%, 0 100%);\n    transition: background 120ms cubic-bezier(.2, .7, .1, 1);\n  }\n  .k-button:hover { background: #8A1F2B; }\n}"],
  "html": ["index.html", "<!doctype html>\n<html lang=\"en\" data-theme=\"sakura\">\n  <head>\n    <link rel=\"icon\" href=\"/favicon.svg\" type=\"image/svg+xml\">\n    <link rel=\"stylesheet\" href=\"/styles.css\">\n  </head>\n  <body>\n    <!-- Hero -->\n    <h1 class=\"k-display\">Grown slowly &mdash; cut sharp</h1>\n    <a href=\"/journal\" class=\"k-link\">Read the journal</a>\n  </body>\n</html>"],
  "sh": ["deploy.sh", "#!/usr/bin/env bash\n# Build and ship the studio site\nset -euo pipefail\n\nBRANCH=${1:-main}\ngit fetch origin \"$BRANCH\" && git checkout \"$BRANCH\"\npnpm install --frozen-lockfile\npnpm build --filter @kerasi/site\nrsync -az --delete dist/ deploy@kerasi.studio:/srv/site\necho \"deployed $BRANCH at $(date +%H:%M)\""],
  "json": ["package.json", "{\n  \"name\": \"@kerasi/hanami\",\n  \"version\": \"2.4.0\",\n  \"private\": false,\n  \"exports\": { \".\": \"./dist/index.js\" },\n  \"keywords\": [\"design-tokens\", \"ui\", \"themes\"],\n  \"sideEffects\": false,\n  \"engines\": { \"node\": \">=20\" }\n}"],
  "sql": ["visits.sql", "-- Hourly visits per page, last 7 days\nSELECT\n  page_path,\n  date_trunc('hour', seen_at) AS hour,\n  COUNT(*) AS visits\nFROM lantern.events\nWHERE seen_at > now() - interval '7 days'\n  AND is_bot = false\nGROUP BY page_path, hour\nORDER BY visits DESC\nLIMIT 50;"],
  "yaml": ["ci.yml", "name: build\non: [push]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: pnpm install\n      - run: pnpm test  # 1m 40s\n    timeout-minutes: 10"],
  "diff": ["tabs.tsx", "@@ -12,7 +12,8 @@ export function Tabs({ items, value }) {\n   return (\n-    <div style={{ borderBottom: '1px solid var(--line)' }}>\n+    <div style={{ boxShadow: 'inset 0 -1px 0 var(--line)',\n+                  overflowY: 'hidden' }}>\n       {items.map(renderTab)}\n     </div>\n   );"]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/code/samples.js", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const TONES = {
  neutral: ['var(--bg-sunken)', 'var(--fg-2)'],
  accent: ['var(--accent-soft)', 'var(--accent-ink)'],
  solid: ['var(--accent)', 'var(--accent-fg)'],
  success: ['transparent', 'var(--status-success)'],
  warning: ['transparent', 'var(--status-warning)'],
  danger: ['transparent', 'var(--status-danger)'],
  info: ['transparent', 'var(--status-info)']
};
function Badge({
  tone = 'neutral',
  dot,
  children,
  style
}) {
  const [bg, fg] = TONES[tone] || TONES.neutral;
  const outlined = bg === 'transparent';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 22,
      padding: '0 8px',
      background: bg,
      color: fg,
      border: outlined ? '1px solid currentColor' : '1px solid transparent',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  variant = 'plain',
  eyebrow,
  title,
  children,
  footer,
  padding = 24,
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  const v = {
    plain: {
      background: 'transparent',
      border: '1px solid var(--line)'
    },
    raised: {
      background: 'var(--bg-raised)',
      border: '1px solid var(--line)',
      boxShadow: onClick && h ? 'var(--shadow-pop)' : 'none'
    },
    cut: {
      background: 'var(--bg-raised)',
      border: 'none',
      '--chamfer': 'var(--chamfer-lg)',
      clipPath: 'var(--clip-chamfer)'
    },
    rule: {
      background: 'transparent',
      border: 'none',
      borderTop: '2px solid var(--fg-1)'
    },
    inverse: {
      background: 'var(--fg-1)',
      color: 'var(--bg)',
      border: 'none'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      padding: variant === 'rule' ? padding + 'px 0 0' : padding,
      cursor: onClick ? 'pointer' : undefined,
      transition: 'box-shadow var(--dur-2) var(--ease-out),transform var(--dur-2) var(--ease-out)',
      transform: onClick && h ? 'translateY(-2px)' : 'none',
      ...v,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: variant === 'inverse' ? 'inherit' : 'var(--fg-3)',
      opacity: variant === 'inverse' ? .7 : 1
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 24,
      lineHeight: 1.1,
      textTransform: 'uppercase'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: variant === 'inverse' ? 'inherit' : 'var(--fg-2)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 8
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Favicon.jsx
try { (() => {
const TILE = 'M4 0 H32 V28 L28 32 H0 V4 Z';
const CROWN = 'M0 4 L4 0 H32 V9.5 L27 7 L21.5 10.5 L16 7 L10.5 10.5 L5 7 L0 9.5 Z';
const CROWN_SH = 'M0 9.5 L5 7 L10.5 10.5 L16 7 L21.5 10.5 L27 7 L32 9.5 L27 8.6 L21.5 12 L16 8.6 L10.5 12 L5 8.6 L0 11 Z';
const MAIN = [["c", "sun"], ["M3.5 26.5 L29.5 22 L21.5 28 L10.5 30 Z", "ground"], ["M3.5 26.5 L18 24 L10.5 30 Z", "groundHi"], ["M15 27.5 L16.5 23.5 L14.5 20.5 L15.5 17 L15 14.5 L18 14.5 L19 17.5 L18.5 20.5 L21 23.5 L23 26 Z", "trunk"], ["M15 27.5 L16.5 23.5 L14.5 20.5 L15.5 17 L15 14.5 L16 14.5 L16.8 17.5 L15.9 20.5 L18.5 24 L18 27 Z", "trunkSh"], ["M15.5 19.5 L10.5 16.5 L7.5 15.5 L9 14.5 L11.5 15 L16 17.5 Z", "trunkSh"], ["M17.5 20.5 L23 17 L25 15 L24 14.5 L22 16 L17 18.5 Z", "trunk"], ["M1.5 15 L3.5 10.5 L7.5 8.5 L9 5 L15 3 L18 4 L21.5 3.5 L24.5 6.5 L27.5 7 L28.5 11.5 L30.5 15 L28 16.5 L24.5 15 L22 17 L19 15 L16 16 L13 14 L10 15.5 L7 14 L4 16 Z", "bloom"], ["M9 5 L15 3 L13.5 7.5 Z M18 4 L21.5 3.5 L20.5 8 Z M3.5 10.5 L7.5 8.5 L6.5 11.5 Z M24.5 6.5 L27.5 7 L25.5 10 Z", "bloomHi"], ["M1.5 15 L5.5 13 L8 13.5 L11 11.5 L14 13 L17 11 L20 13 L23 12 L26.5 13.5 L30.5 15 L28 16.5 L24.5 15 L22 17 L19 15 L16 16 L13 14 L10 15.5 L7 14 L4 16 Z", "bloomSh"], ["M24.25 15.5 H24.75 V18.5 H24.25 Z", "cord"], ["M24.5 18.5 L26 20.5 L24.5 22.5 L23 20.5 Z", "lantern"]];
const MC = {
  light: {
    "sun": "#AC2937",
    "ground": "#683D35",
    "groundHi": "#7E4A3B",
    "trunk": "#925644",
    "trunkSh": "#683D35",
    "bloom": "#EFBCC5",
    "bloomHi": "#F7D9DE",
    "bloomSh": "#E3909E",
    "cord": "#BDA177",
    "lantern": "#ECC483"
  },
  dark: {
    "sun": "#D8394A",
    "ground": "#B07A62",
    "groundHi": "#C48C72",
    "trunk": "#D6A588",
    "trunkSh": "#B07A62",
    "bloom": "#EFBCC5",
    "bloomHi": "#F7D9DE",
    "bloomSh": "#E3909E",
    "cord": "#BDA177",
    "lantern": "#ECC483"
  }
};
const SUBPROJECT_COLORS = {
  crimson: ['#AC2937', '#FFF6F2'],
  bark: ['#683D35', '#F9F0EC'],
  wine: ['#773344', '#F4EFE6'],
  gold: ['#C2A878', '#191716'],
  night: ['#191716', '#ECC483'],
  rust: ['#B7472A', '#F8F9F9'],
  graphite: ['#20252B', '#E07A5A'],
  chrome: ['#BFC4C7', '#20252B']
};
function Favicon({
  variant = 'main',
  label,
  color = 'crimson',
  ground = 'paper',
  size = 32,
  style
}) {
  if (variant === 'main') {
    const bg = ground === 'paper' ? '#F9F0EC' : ground === 'dark' ? '#171514' : null;
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 32 32",
      width: size,
      height: size,
      style: style,
      "aria-label": "Kerasi"
    }, bg && /*#__PURE__*/React.createElement("path", {
      d: TILE,
      fill: bg
    }), MAIN.map(([d, k], i) => {
      const c = MC[ground === 'dark' ? 'dark' : 'light'][k];
      return d === 'c' ? /*#__PURE__*/React.createElement("circle", {
        key: i,
        cx: "10",
        cy: "22",
        r: "6",
        fill: c
      }) : /*#__PURE__*/React.createElement("path", {
        key: i,
        d: d,
        fill: c
      });
    }));
  }
  const [bg, fg] = SUBPROJECT_COLORS[color] || (Array.isArray(color) ? color : SUBPROJECT_COLORS.crimson);
  const txt = (label || '').toUpperCase().slice(0, 2);
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 32 32",
    width: size,
    height: size,
    style: style,
    "aria-label": label
  }, /*#__PURE__*/React.createElement("path", {
    d: TILE,
    fill: bg
  }), /*#__PURE__*/React.createElement("path", {
    d: CROWN,
    fill: "#EFBCC5"
  }), /*#__PURE__*/React.createElement("path", {
    d: CROWN_SH,
    fill: fg,
    opacity: ".18"
  }), txt && /*#__PURE__*/React.createElement("text", {
    x: "16",
    y: "29",
    textAnchor: "middle",
    fill: fg,
    fontFamily: "Oswald, 'Arial Narrow', sans-serif",
    fontWeight: "700",
    fontSize: txt.length > 1 ? 15 : 19,
    letterSpacing: txt.length > 1 ? -0.5 : 0
  }, txt));
}
Object.assign(__ds_scope, { SUBPROJECT_COLORS, Favicon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Favicon.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = 'https://cdn.jsdelivr.net/npm/lucide-static@0.469.0/icons/';
const cache = {};
function load(name) {
  if (!cache[name]) cache[name] = fetch(CDN + name + '.svg').then(r => r.ok ? r.text() : '').then(t => t.replace(/<!--[\s\S]*?-->/g, '').replace(/<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '')).catch(() => '');
  return cache[name];
}
function Icon({
  name,
  size = 18,
  color = 'currentColor',
  style,
  title,
  strokeWidth = 1.75,
  ...rest
}) {
  const [inner, setInner] = React.useState('');
  React.useEffect(() => {
    let live = true;
    load(name).then(t => {
      if (live) setInner(t);
    });
    return () => {
      live = false;
    };
  }, [name]);
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "square",
    strokeLinejoin: "miter",
    role: title ? 'img' : undefined,
    "aria-label": title,
    "aria-hidden": title ? undefined : true
  }, rest, {
    style: {
      display: 'inline-block',
      flex: 'none',
      color,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: inner
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/code/CodeBlock.jsx
try { (() => {
const W = s => new Set(s.split(' '));
const KW = {
  js: W('const let var function return if else for while do switch case break continue new class extends import from export default async await try catch finally throw typeof instanceof in of this super yield null undefined true false void delete interface type enum implements public private protected readonly as keyof satisfies'),
  py: W('def class return if elif else for while in not and or is import from as with try except finally raise lambda yield pass break continue global nonlocal None True False async await self match case'),
  rs: W('fn let mut pub struct enum impl trait use mod crate self Self super match if else for while loop return break continue as where move ref const static unsafe async await dyn true false Some None Ok Err in'),
  go: W('package import func return if else for range switch case default break continue go defer select chan map struct interface type var const nil true false'),
  sql: W('select from where join left right inner outer on group by order having limit offset insert into values update set delete create table index primary key foreign references not null and or as distinct count sum avg min max case when then else end with returning desc asc interval now'),
  sh: W('if then else fi for in do done while case esac function return export local echo cd sudo')
};
const ALIAS = {
  javascript: 'js',
  ts: 'js',
  typescript: 'js',
  jsx: 'js',
  tsx: 'js',
  python: 'py',
  rust: 'rs',
  golang: 'go',
  bash: 'sh',
  shell: 'sh',
  zsh: 'sh',
  yml: 'yaml',
  htm: 'html',
  xml: 'html'
};
const LABEL = {
  js: 'TypeScript',
  py: 'Python',
  rs: 'Rust',
  go: 'Go',
  sql: 'SQL',
  sh: 'Shell',
  css: 'CSS',
  html: 'HTML',
  json: 'JSON',
  yaml: 'YAML',
  diff: 'Diff',
  text: 'Text'
};
function scan(src, rules) {
  const out = [];
  let i = 0;
  while (i < src.length) {
    let hit = false;
    for (const [re, type] of rules) {
      re.lastIndex = i;
      const m = re.exec(src);
      if (m && m.index === i && m[0].length) {
        out.push([typeof type === 'function' ? type(m[0], src, i + m[0].length, out) : type, m[0]]);
        i += m[0].length;
        hit = true;
        break;
      }
    }
    if (!hit) {
      out.push(['plain', src[i]]);
      i++;
    }
  }
  return out;
}
const R = (s, f = 'y') => new RegExp(s, f);
const nextCh = (src, j) => {
  while (src[j] === ' ') j++;
  return src[j];
};
function ident(kw, ci) {
  return (w, src, j, out) => {
    const k = ci ? w.toLowerCase() : w;
    if (kw && kw.has(k)) return 'keyword';
    const prev = out.length && out[out.length - 1][1];
    const n = nextCh(src, j);
    if (prev === '.' || prev === '?.') return n === '(' ? 'function' : 'property';
    if (n === '(' || n === '!') return 'function';
    if (/^[A-Z]/.test(w) && !ci) return 'type';
    return 'plain';
  };
}
const STR = [R('"""[\\s\\S]*?"""'), R("'''[\\s\\S]*?'''"), R('"(?:\\\\.|[^"\\\\\\n])*"'), R("'(?:\\\\.|[^'\\\\\\n])*'"), R('`(?:\\\\.|[^`\\\\])*`')];
const NUM = R('(?:0x[0-9a-fA-F]+|\\d[\\d_]*(?:\\.\\d+)?(?:e[+-]?\\d+)?)\\b');
function codeRules(lang) {
  const c = lang === 'py' || lang === 'sh' ? R('#.*') : lang === 'sql' ? R('--.*') : R('//.*|/\\*[\\s\\S]*?\\*/');
  const r = [[c, 'comment'], ...STR.map(s => [s, 'string']), [NUM, 'number']];
  if (lang === 'py') r.push([R('@[\\w.]+'), 'attr']);
  if (lang === 'rs') r.push([R("'[a-z]\\b"), 'type'], [R('#!?\\[[^\\]]*\\]'), 'attr']);
  if (lang === 'sh') r.push([R('\\$\\{?[\\w@#?]+\\}?'), 'property'], [R('(?<=\\s)--?[\\w-]+'), 'attr'], [R('^[\\w.-]+|(?<=(?:\\||&&|;)\\s*)[\\w.-]+', 'my'), 'function']);
  if (lang === 'js') r.push([R('@\\w+'), 'attr']);
  r.push([R('[A-Za-z_$][\\w$]*'), ident(KW[lang], lang === 'sql')], [R('=>|->|::|[=+\\-*/%<>!&|^~?:]+'), 'operator'], [R('[{}()\\[\\];,.]'), 'punct']);
  return r;
}
function htmlTokens(src) {
  const out = [];
  let i = 0,
    inTag = false;
  const rules = () => inTag ? [[R('\\s+'), 'plain'], [R('/?>'), 'punct'], [R('[\\w:@.-]+(?=\\s*=)|[\\w:@.-]+'), 'attr'], [R('='), 'operator'], [STR[2], 'string'], [STR[3], 'string']] : [[R('<!--[\\s\\S]*?-->'), 'comment'], [R('<!doctype[^>]*>', 'yi'), 'keyword'], [R('</?[\\w-]+'), 'tag'], [R('&\\w+;'), 'number'], [R('[^<&]+'), 'plain']];
  while (i < src.length) {
    let hit = false;
    for (const [re, t] of rules()) {
      re.lastIndex = i;
      const m = re.exec(src);
      if (m && m.index === i && m[0].length) {
        out.push([t, m[0]]);
        if (t === 'tag') inTag = true;
        if (inTag && t === 'punct') inTag = false;
        i += m[0].length;
        hit = true;
        break;
      }
    }
    if (!hit) {
      out.push(['plain', src[i]]);
      i++;
    }
  }
  return out.map(([t, v]) => t === 'tag' ? null : [t, v]).flatMap((x, k) => x ? [x] : (() => {
    const v = out[k][1];
    const p = v.startsWith('</') ? 2 : 1;
    return [['punct', v.slice(0, p)], ['tag', v.slice(p)]];
  })());
}
function cssTokens(src) {
  let depth = 0;
  return scan(src, [[R('/\\*[\\s\\S]*?\\*/'), 'comment'], [STR[2], 'string'], [STR[3], 'string'], [R('@[\\w-]+'), 'keyword'], [R('[{}]'), v => {
    depth += v === '{' ? 1 : -1;
    return 'punct';
  }], [R('--[\\w-]+'), 'type'], [R('#[0-9a-fA-F]{3,8}\\b'), 'number'], [R('-?\\d*\\.?\\d+(?:px|rem|em|%|ms|s|vh|vw|deg|fr)?'), 'number'], [R('[\\w-]+(?=\\()'), 'function'], [R('[\\w-]+(?=\\s*:(?!:))'), () => depth > 0 ? 'property' : 'tag'], [R('::?[\\w-]+'), () => depth > 0 ? 'plain' : 'keyword'], [R('[.#][\\w-]+'), () => depth > 0 ? 'plain' : 'tag'], [R('[\\w-]+'), () => depth > 0 ? 'plain' : 'tag'], [R('[;:,()>+~*]'), 'punct']]);
}
function jsonTokens(src) {
  return scan(src, [[R('"(?:\\\\.|[^"\\\\])*"(?=\\s*:)'), 'property'], [STR[2], 'string'], [NUM, 'number'], [R('-'), 'number'], [R('\\b(?:true|false|null)\\b'), 'keyword'], [R('[{}\\[\\],:]'), 'punct']]);
}
function yamlTokens(src) {
  return scan(src, [[R('#.*'), 'comment'], [R('[\\w.-]+(?=\\s*:(?:\\s|$))', 'my'), 'property'], [STR[2], 'string'], [STR[3], 'string'], [NUM, 'number'], [R('\\b(?:true|false|null|yes|no)\\b'), 'keyword'], [R('[-:|>]'), 'punct']]);
}
function highlight(code, language) {
  const lang = ALIAS[language] || language || 'text';
  const toks = lang === 'html' ? htmlTokens(code) : lang === 'css' ? cssTokens(code) : lang === 'json' ? jsonTokens(code) : lang === 'yaml' ? yamlTokens(code) : KW[lang] ? scan(code, codeRules(lang)) : [['plain', code]];
  const lines = [[]];
  for (const [t, v] of toks) {
    const parts = v.split('\n');
    parts.forEach((p, k) => {
      if (k) lines.push([]);
      if (p) lines[lines.length - 1].push([t, p]);
    });
  }
  return lines;
}
const STY = {
  comment: {
    color: 'var(--syn-comment)',
    fontStyle: 'italic',
    fontWeight: 500
  },
  keyword: {
    color: 'var(--syn-keyword)',
    fontWeight: 700
  },
  string: {
    color: 'var(--syn-string)'
  },
  number: {
    color: 'var(--syn-number)'
  },
  function: {
    color: 'var(--syn-function)',
    fontWeight: 700
  },
  type: {
    color: 'var(--syn-type)',
    fontWeight: 600
  },
  property: {
    color: 'var(--syn-property)'
  },
  operator: {
    color: 'var(--syn-operator)'
  },
  punct: {
    color: 'var(--syn-punct)'
  },
  tag: {
    color: 'var(--syn-tag)',
    fontWeight: 700
  },
  attr: {
    color: 'var(--syn-attr)'
  },
  plain: null
};
// Consecutive lines of one kind share a single background block: per-line
// fills leave sub-pixel seams at fractional line heights (13px × 1.7).
const RUN = {
  hl: {
    background: 'var(--syn-line-hl)',
    boxShadow: 'inset 2px 0 0 var(--syn-keyword)'
  },
  added: {
    background: 'var(--syn-added)'
  },
  removed: {
    background: 'var(--syn-removed)'
  }
};
function runs(rows) {
  const out = [];
  for (const [kind, row] of rows) {
    const last = out[out.length - 1];
    if (kind && last && last.kind === kind) last.rows.push(row);else out.push({
      kind,
      rows: [row]
    });
  }
  return out.map((r, i) => r.kind ? /*#__PURE__*/React.createElement("div", {
    key: 'r' + i,
    style: RUN[r.kind]
  }, r.rows) : r.rows);
}
function CodeBlock({
  code = '',
  language = 'text',
  title,
  lineNumbers = true,
  highlightLines = [],
  copy = true,
  theme,
  maxHeight,
  wrap,
  style
}) {
  const lang = ALIAS[language] || language;
  const [copied, setCopied] = React.useState(false);
  const isDiff = lang === 'diff';
  const lines = React.useMemo(() => isDiff ? code.replace(/\n$/, '').split('\n').map(l => [['plain', l]]) : highlight(code.replace(/\n$/, ''), lang), [code, lang]);
  const hl = new Set(highlightLines);
  const doCopy = () => {
    navigator.clipboard && navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };
  const gutter = String(lines.length).length;
  return /*#__PURE__*/React.createElement("div", {
    "data-theme": theme,
    style: {
      background: 'var(--syn-bg)',
      color: 'var(--syn-fg)',
      border: '1px solid var(--syn-border)',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      fontWeight: 500,
      lineHeight: 1.7,
      minWidth: 0,
      ...style
    }
  }, (title || copy) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: 38,
      padding: '0 8px 0 14px',
      borderBottom: '1px solid var(--syn-border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--syn-keyword)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--syn-fg)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--syn-comment)'
    }
  }, LABEL[lang] || lang), copy && /*#__PURE__*/React.createElement("button", {
    onClick: doCopy,
    "aria-label": "Copy code",
    title: "Copy",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 28,
      height: 28,
      background: 'transparent',
      border: 'none',
      color: copied ? 'var(--syn-string)' : 'var(--syn-comment)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: copied ? 'check' : 'copy',
    size: 14
  }))), /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      padding: '12px 0',
      overflow: 'auto',
      maxHeight,
      whiteSpace: wrap ? 'pre-wrap' : 'pre'
    }
  }, /*#__PURE__*/React.createElement("code", {
    style: {
      display: 'block',
      minWidth: 'max-content'
    }
  }, runs(lines.map((ln, i) => {
    const raw = isDiff ? ln[0][1] : '';
    const d = isDiff ? raw.startsWith('+') ? 'added' : raw.startsWith('-') ? 'removed' : raw.startsWith('@@') ? 'meta' : null : null;
    const row = /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        padding: '0 16px 0 0'
      }
    }, lineNumbers && /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        width: gutter * 8 + 28,
        paddingRight: 14,
        textAlign: 'right',
        color: 'var(--syn-lineno)',
        userSelect: 'none'
      }
    }, i + 1), !lineNumbers && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 16,
        flex: 'none'
      }
    }), /*#__PURE__*/React.createElement("span", null, isDiff ? /*#__PURE__*/React.createElement("span", {
      style: d === 'meta' ? STY.keyword : d === 'added' ? {
        color: 'var(--syn-string)'
      } : d === 'removed' ? {
        color: 'var(--syn-keyword)'
      } : null
    }, raw || ' ') : ln.length ? ln.map(([t, v], k) => /*#__PURE__*/React.createElement("span", {
      key: k,
      style: STY[t] || undefined
    }, v)) : ' '));
    return [hl.has(i + 1) ? 'hl' : d === 'added' || d === 'removed' ? d : null, row];
  })))));
}
Object.assign(__ds_scope, { highlight, CodeBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/code/CodeBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    h: 32,
    px: 14,
    fs: 13,
    ic: 14
  },
  md: {
    h: 42,
    px: 20,
    fs: 15,
    ic: 16
  },
  lg: {
    h: 54,
    px: 28,
    fs: 18,
    ic: 18
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  disabled,
  full,
  children,
  style,
  onClick,
  type = 'button',
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = {
    primary: {
      background: h ? 'var(--accent-hover)' : 'var(--accent)',
      color: 'var(--accent-fg)',
      border: 'none',
      clipPath: 'var(--clip-chamfer)'
    },
    secondary: {
      background: h ? 'var(--fg-1)' : 'transparent',
      color: h ? 'var(--bg)' : 'var(--fg-1)',
      border: '1px solid var(--fg-1)'
    },
    ghost: {
      background: h ? 'var(--bg-sunken)' : 'transparent',
      color: 'var(--fg-1)',
      border: '1px solid transparent'
    },
    quiet: {
      background: 'transparent',
      color: h ? 'var(--fg-1)' : 'var(--accent-ink)',
      border: 'none',
      padding: 0,
      height: 'auto'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false)
  }, rest, {
    style: {
      display: full ? 'flex' : 'inline-flex',
      width: full ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: s.h,
      padding: '0 ' + s.px + 'px',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: s.fs,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      lineHeight: 1,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      borderRadius: 0,
      transition: 'background var(--dur-1) var(--ease-out),color var(--dur-1) var(--ease-out)',
      ...v,
      ...style
    }
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.ic
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.ic,
    style: {
      transform: h ? 'translateX(3px)' : 'none',
      transition: 'transform var(--dur-2) var(--ease-out)'
    }
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 38,
  active,
  onClick,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const v = {
    ghost: {
      background: active || h ? 'var(--bg-sunken)' : 'transparent',
      color: 'var(--fg-1)',
      border: '1px solid transparent'
    },
    outline: {
      background: h ? 'var(--fg-1)' : 'transparent',
      color: h ? 'var(--bg)' : 'var(--fg-1)',
      border: '1px solid var(--line-strong)'
    },
    solid: {
      background: h ? 'var(--accent-hover)' : 'var(--accent)',
      color: 'var(--accent-fg)',
      border: 'none',
      clipPath: 'var(--clip-chamfer)'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false)
  }, rest, {
    style: {
      width: size,
      height: size,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      cursor: 'pointer',
      borderRadius: 0,
      transition: 'background var(--dur-1) var(--ease-out)',
      ...v,
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.45)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
const P = {
  "sun": "<circle cx=\"66\" cy=\"136\" r=\"32\"/>",
  "ground": "M30 162 L178 136 L132 170 L70 182 Z",
  "groundHi": "M30 162 L112 148 L70 182 Z",
  "trunk": "M96 166 L106 146 L94 128 L102 108 L98 94 L108 94 L114 110 L108 128 L124 146 L136 158 Z",
  "trunkSh": "M96 166 L106 146 L94 128 L102 108 L98 94 L102 94 L106 110 L100 128 L114 148 L112 163 Z",
  "branchL": "M99 121 L70 104 L54 100 L60 95 L74 98 L101 112 Z",
  "branchR": "M108 127 L140 108 L152 98 L146 94 L136 103 L106 118 Z",
  "bloom": "M18 96 L30 70 L52 58 L62 40 L96 28 L112 34 L132 30 L150 48 L166 52 L172 76 L184 96 L170 104 L150 98 L134 106 L118 96 L100 102 L84 92 L66 100 L48 92 L32 102 Z",
  "bloomHi": "M62 40 L96 28 L86 54 Z M112 34 L132 30 L124 56 Z M30 70 L52 58 L46 76 Z M150 48 L166 52 L156 68 Z",
  "bloomSh": "M18 96 L40 84 L56 88 L72 76 L90 84 L106 74 L124 84 L142 78 L160 88 L184 96 L170 104 L150 98 L134 106 L118 96 L100 102 L84 92 L66 100 L48 92 L32 102 Z",
  "cord": "M150 99 V118 M166 97 V110",
  "lantern": "M150 118 L155 126 L150 136 L145 126 Z M166 110 L170 117 L166 125 L162 117 Z"
};
const C = {
  sakura: {
    sun: '#AC2937',
    ground: '#683D35',
    groundHi: '#7E4A3B',
    trunk: '#925644',
    trunkSh: '#683D35',
    bloom: '#EFBCC5',
    bloomHi: '#F7D9DE',
    bloomSh: '#E3909E',
    cord: '#BDA177',
    lantern: '#ECC483'
  },
  wine: {
    sun: '#773344',
    ground: '#191716',
    groundHi: '#2E2926',
    trunk: '#4A3A36',
    trunkSh: '#2E2926',
    bloom: '#D9C7A0',
    bloomHi: '#EADDBF',
    bloomSh: '#C2A878',
    cord: '#C2A878',
    lantern: '#C2A878'
  },
  rust: {
    sun: '#B7472A',
    ground: '#20252B',
    groundHi: '#343B43',
    trunk: '#4B535C',
    trunkSh: '#20252B',
    bloom: '#8E99A3',
    bloomHi: '#B4BDC5',
    bloomSh: '#6B7782',
    cord: '#6B737C',
    lantern: '#B7472A'
  },
  'sakura-dark': {
    sun: '#D8394A',
    ground: '#B07A62',
    groundHi: '#C48C72',
    trunk: '#D6A588',
    trunkSh: '#B07A62',
    bloom: '#EFBCC5',
    bloomHi: '#F7D9DE',
    bloomSh: '#E3909E',
    cord: '#BDA177',
    lantern: '#ECC483'
  },
  'wine-dark': {
    sun: '#B2475F',
    ground: '#A86A7A',
    groundHi: '#C08494',
    trunk: '#CFC5B4',
    trunkSh: '#A89E8E',
    bloom: '#EEC567',
    bloomHi: '#F7D688',
    bloomSh: '#D4A848',
    cord: '#D4A848',
    lantern: '#F7D688'
  },
  'rust-dark': {
    sun: '#E0603F',
    ground: '#7E8790',
    groundHi: '#9AA2AA',
    trunk: '#B5BCC2',
    trunkSh: '#9AA2AA',
    bloom: '#D5D9DB',
    bloomHi: '#E8EBEC',
    bloomSh: '#BFC4C7',
    cord: '#8E959B',
    lantern: '#E0603F'
  }
};
const THEMES = ['sakura', 'wine', 'rust', 'sakura-dark', 'wine-dark', 'rust-dark'];
function useAutoTheme(ref, explicit) {
  const [t, setT] = React.useState(explicit && explicit !== 'auto' ? explicit : 'sakura');
  React.useLayoutEffect(() => {
    if (explicit && explicit !== 'auto') {
      setT(explicit);
      return;
    }
    const read = () => {
      const host = ref.current && ref.current.closest('[data-theme]');
      const v = host ? host.getAttribute('data-theme') : 'sakura';
      setT(THEMES.includes(v) ? v : 'sakura');
    };
    read();
    const mo = new MutationObserver(read);
    let n = ref.current;
    while (n && n.nodeType === 1) {
      mo.observe(n, {
        attributes: true,
        attributeFilter: ['data-theme']
      });
      n = n.parentElement;
    }
    return () => mo.disconnect();
  }, [explicit]);
  return t;
}
function onDark(theme, dark) {
  if (!dark || theme.endsWith('-dark')) return theme;
  return theme + '-dark';
}
function Mark({
  theme = 'auto',
  size = 40,
  mono,
  dark,
  style
}) {
  const ref = React.useRef(null);
  const resolved = onDark(useAutoTheme(ref, theme), dark);
  if (mono) {
    const f = mono === true ? 'currentColor' : mono;
    return /*#__PURE__*/React.createElement("svg", {
      ref: ref,
      viewBox: "0 0 200 200",
      width: size,
      height: size,
      style: style,
      "aria-label": "Kerasi"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "66",
      cy: "136",
      r: "28",
      fill: "none",
      stroke: f,
      strokeWidth: "7"
    }), /*#__PURE__*/React.createElement("path", {
      d: P.ground,
      fill: f
    }), /*#__PURE__*/React.createElement("path", {
      d: P.trunk,
      fill: f
    }), /*#__PURE__*/React.createElement("path", {
      d: P.branchL,
      fill: f
    }), /*#__PURE__*/React.createElement("path", {
      d: P.branchR,
      fill: f
    }), /*#__PURE__*/React.createElement("path", {
      d: P.bloom,
      fill: f
    }), /*#__PURE__*/React.createElement("path", {
      d: P.cord,
      stroke: f,
      strokeWidth: "1.4"
    }), /*#__PURE__*/React.createElement("path", {
      d: P.lantern,
      fill: f
    }));
  }
  const c = C[resolved] || C.sakura;
  return /*#__PURE__*/React.createElement("svg", {
    ref: ref,
    "data-mark-theme": resolved,
    viewBox: "0 0 200 200",
    width: size,
    height: size,
    style: style,
    "aria-label": "Kerasi"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "66",
    cy: "136",
    r: "32",
    fill: c.sun
  }), ['ground', 'groundHi', 'trunk', 'trunkSh', 'branchL', 'branchR', 'bloom', 'bloomHi', 'bloomSh'].map(k => /*#__PURE__*/React.createElement("path", {
    key: k,
    d: P[k],
    fill: c[k] || (k === 'branchL' ? c.trunkSh : c.trunk)
  })), /*#__PURE__*/React.createElement("path", {
    d: P.cord,
    stroke: c.cord,
    strokeWidth: "1.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: P.lantern,
    fill: c.lantern
  }));
}
function Logo({
  theme = 'auto',
  size = 40,
  wordmark = true,
  mono,
  dark,
  tagline,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: size * 0.28,
      color: 'var(--fg-1)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    theme: theme,
    size: size,
    mono: mono,
    dark: dark
  }), wordmark && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: size * 0.62,
      lineHeight: .9,
      letterSpacing: '.02em',
      textTransform: 'uppercase'
    }
  }, "Kerasi"), tagline && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: Math.max(9, size * 0.18),
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--fg-3)'
    }
  }, tagline)));
}
Object.assign(__ds_scope, { Mark, Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  selected,
  onClick,
  onRemove,
  children,
  style
}) {
  const [h, setH] = React.useState(false);
  const Tg = onClick ? 'button' : 'span';
  return /*#__PURE__*/React.createElement(Tg, {
    type: onClick ? 'button' : undefined,
    "aria-pressed": onClick ? !!selected : undefined,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      minHeight: onClick ? 36 : 30,
      minWidth: onClick ? 56 : undefined,
      justifyContent: 'center',
      margin: 0,
      font: 'inherit',
      padding: onRemove ? '0 8px 0 16px' : onClick ? '0 16px' : '0 12px',
      cursor: onClick ? 'pointer' : 'default',
      background: selected ? 'var(--fg-1)' : h && onClick ? 'var(--bg-sunken)' : 'transparent',
      color: selected ? 'var(--bg)' : 'var(--fg-1)',
      border: '1px solid ' + (selected ? 'var(--fg-1)' : 'var(--line-strong)'),
      fontSize: 13,
      fontWeight: 500,
      transition: 'background var(--dur-1) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      pointerEvents: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, children), onRemove && /*#__PURE__*/React.createElement("span", {
    role: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      display: 'inline-flex',
      cursor: 'pointer',
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  eyebrow,
  children,
  actions,
  onClose,
  width = 480,
  inline,
  sheet
}) {
  const [narrow, setNarrow] = React.useState(() => typeof window !== 'undefined' && window.innerWidth < 640);
  React.useEffect(() => {
    const on = () => setNarrow(window.innerWidth < 640);
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);
  if (!open) return null;
  const asSheet = sheet ?? (narrow && !inline);
  const panel = /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: asSheet ? '100%' : width,
      maxWidth: asSheet ? '100%' : 'calc(100vw - 32px)',
      maxHeight: asSheet ? '88vh' : undefined,
      overflowY: asSheet ? 'auto' : undefined,
      background: 'var(--bg-raised)',
      color: 'var(--fg-1)',
      boxShadow: 'var(--shadow-pop)',
      '--chamfer': 'var(--chamfer-lg)',
      clipPath: 'var(--clip-chamfer)',
      padding: asSheet ? '24px 16px calc(16px + env(safe-area-inset-bottom))' : 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--fg-3)',
      marginBottom: 6
    }
  }, eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 28,
      lineHeight: 1.05,
      textTransform: 'uppercase'
    }
  }, title)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    size: 32,
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--fg-2)'
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      flexDirection: asSheet ? 'column-reverse' : 'row',
      gap: 10,
      paddingTop: 4
    }
  }, actions));
  if (inline) return panel;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: asSheet ? 'flex-end' : 'center',
      justifyContent: 'center',
      background: 'color-mix(in srgb, var(--fg-1) 35%, transparent)',
      backdropFilter: 'blur(6px)'
    }
  }, panel);
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const T = {
  info: ['info', 'var(--status-info)'],
  success: ['check', 'var(--status-success)'],
  warning: ['triangle-alert', 'var(--status-warning)'],
  danger: ['octagon-x', 'var(--status-danger)'],
  accent: ['sparkle', 'var(--accent)']
};
function Toast({
  tone = 'info',
  title,
  children,
  onClose,
  action,
  style
}) {
  const [ic, col] = T[tone] || T.info;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      width: 360,
      maxWidth: '100%',
      padding: '14px 14px 14px 16px',
      background: 'var(--fg-1)',
      color: 'var(--bg)',
      boxShadow: 'var(--shadow-pop)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: col,
      color: '#fff',
      borderRadius: '50%'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ic,
    size: 14
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      marginBottom: 2
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      opacity: .75,
      lineHeight: 1.5
    }
  }, children), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, action)), onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      color: 'inherit',
      opacity: .6,
      cursor: 'pointer',
      padding: 2,
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children,
  placement = 'top',
  align = 'center',
  open
}) {
  const [h, setH] = React.useState(false);
  const show = open ?? h;
  const bottom = placement === 'bottom';
  const pos = bottom ? {
    top: 'calc(100% + 10px)'
  } : {
    bottom: 'calc(100% + 10px)'
  };
  const x = align === 'start' ? {
    left: 0
  } : align === 'end' ? {
    right: 0
  } : {
    left: '50%'
  };
  const tx = align === 'center' ? 'translateX(-50%) ' : '';
  const ax = align === 'start' ? {
    left: 16
  } : align === 'end' ? {
    right: 16
  } : {
    left: '50%',
    marginLeft: -4
  };
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...x,
      ...pos,
      transform: tx + 'translateY(' + (show ? 0 : bottom ? -4 : 4) + 'px)',
      opacity: show ? 1 : 0,
      pointerEvents: 'none',
      transition: 'opacity var(--dur-1) var(--ease-out),transform var(--dur-2) var(--ease-out)',
      background: 'var(--fg-1)',
      color: 'var(--bg)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      lineHeight: '14px',
      letterSpacing: '.04em',
      padding: '6px 10px',
      whiteSpace: 'nowrap',
      zIndex: 50
    }
  }, label, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      ...ax,
      [bottom ? 'top' : 'bottom']: -4,
      width: 8,
      height: 8,
      background: 'var(--fg-1)',
      transform: 'rotate(45deg)'
    }
  })));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled,
  style
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const toggle = () => {
    if (disabled) return;
    setInner(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    onClick: toggle,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      fontSize: 15,
      color: 'var(--fg-1)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "checkbox",
    "aria-checked": on,
    style: {
      width: 18,
      height: 18,
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: on ? 'var(--accent)' : 'var(--bg-raised)',
      border: '1px solid ' + (on ? 'var(--accent)' : 'var(--line-strong)'),
      color: 'var(--accent-fg)',
      transition: 'background var(--dur-1) var(--ease-out)'
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const wrap = {
  display: 'flex',
  flexDirection: 'column',
  gap: 6
};
const lab = {
  fontFamily: 'var(--font-mono)',
  fontSize: 11,
  letterSpacing: '.12em',
  textTransform: 'uppercase',
  color: 'var(--fg-2)'
};
const hintS = err => ({
  fontSize: 12,
  color: err ? 'var(--status-danger)' : 'var(--fg-3)'
});
function Input({
  label,
  hint,
  error,
  icon,
  mono,
  disabled,
  value,
  defaultValue,
  placeholder,
  type = 'text',
  onChange,
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      ...wrap,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: lab
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 42,
      padding: '0 12px',
      background: 'var(--bg-raised)',
      border: '1px solid ' + (error ? 'var(--status-danger)' : f ? 'var(--fg-1)' : 'var(--line-strong)'),
      borderRadius: 'var(--radius-1)',
      opacity: disabled ? .5 : 1,
      boxShadow: f ? 'inset 0 -2px 0 var(--accent)' : 'none',
      transition: 'border-color var(--dur-1) var(--ease-out)'
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16,
    color: "var(--fg-3)"
  }), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setF(true),
    onBlur: () => setF(false)
  }, rest, {
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      color: 'var(--fg-1)',
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-body)',
      fontSize: mono ? 14 : 15
    }
  }))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: hintS(error)
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  options = [],
  value,
  defaultValue,
  onChange,
  name,
  direction = 'column',
  style
}) {
  const [inner, setInner] = React.useState(defaultValue);
  const cur = value !== undefined ? value : inner;
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: direction === 'row' ? 20 : 10,
      ...style
    }
  }, options.map(o => {
    const v = typeof o === 'string' ? o : o.value,
      l = typeof o === 'string' ? o : o.label,
      on = cur === v;
    return /*#__PURE__*/React.createElement("label", {
      key: v,
      onClick: () => {
        setInner(v);
        onChange && onChange(v);
      },
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        cursor: 'pointer',
        fontSize: 15,
        color: 'var(--fg-1)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      role: "radio",
      "aria-checked": on,
      style: {
        width: 18,
        height: 18,
        borderRadius: '50%',
        border: '1px solid ' + (on ? 'var(--accent)' : 'var(--line-strong)'),
        background: 'var(--bg-raised)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: '50%',
        background: 'var(--accent)',
        transform: on ? 'scale(1)' : 'scale(0)',
        transition: 'transform var(--dur-2) var(--ease-out)'
      }
    })), l);
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const wrap = {
  display: 'flex',
  flexDirection: 'column',
  gap: 6
};
const lab = {
  fontFamily: 'var(--font-mono)',
  fontSize: 11,
  letterSpacing: '.12em',
  textTransform: 'uppercase',
  color: 'var(--fg-2)'
};
const hintS = err => ({
  fontSize: 12,
  color: err ? 'var(--status-danger)' : 'var(--fg-3)'
});
function Select({
  label,
  hint,
  options = [],
  value,
  defaultValue,
  onChange,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      ...wrap,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: lab
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: 42,
      padding: '0 38px 0 12px',
      background: 'var(--bg-raised)',
      color: 'var(--fg-1)',
      border: '1px solid var(--line-strong)',
      borderRadius: 'var(--radius-1)',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      cursor: 'pointer',
      opacity: disabled ? .5 : 1
    }
  }, options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    color: "var(--fg-2)",
    style: {
      position: 'absolute',
      right: 12,
      top: 13,
      pointerEvents: 'none'
    }
  })), hint && /*#__PURE__*/React.createElement("span", {
    style: hintS()
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled,
  style
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const t = () => {
    if (disabled) return;
    setInner(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    onClick: t,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      fontSize: 15,
      color: 'var(--fg-1)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": on,
    style: {
      width: 38,
      height: 20,
      flex: 'none',
      position: 'relative',
      background: on ? 'var(--accent)' : 'var(--bg-sunken)',
      border: '1px solid ' + (on ? 'var(--accent)' : 'var(--line-strong)'),
      transition: 'background var(--dur-2) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: on ? 20 : 2,
      width: 14,
      height: 14,
      background: on ? 'var(--accent-fg)' : 'var(--fg-2)',
      transition: 'left var(--dur-2) var(--ease-out)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tab({
  on,
  size,
  onClick,
  children
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    role: "tab",
    "aria-selected": on,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      minHeight: size === 'lg' ? 52 : 44,
      minWidth: size === 'lg' ? 72 : 56,
      padding: size === 'lg' ? '0 20px' : '0 16px',
      margin: 0,
      background: h && !on ? 'var(--bg-sunken)' : 'transparent',
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      flex: 'none',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: size === 'lg' ? 18 : 15,
      letterSpacing: '.05em',
      textTransform: 'uppercase',
      color: on ? 'var(--fg-1)' : h ? 'var(--fg-2)' : 'var(--fg-3)',
      transition: 'color var(--dur-1) var(--ease-out),background var(--dur-1) var(--ease-out)'
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 2,
      background: on ? 'var(--accent)' : 'transparent',
      pointerEvents: 'none'
    }
  }));
}
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  size = 'md',
  style
}) {
  const [inner, setInner] = React.useState(defaultValue ?? (items[0] && (items[0].id ?? items[0])));
  const cur = value !== undefined ? value : inner;
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      position: 'relative',
      display: 'flex',
      gap: 2,
      borderBottom: '1px solid var(--line)',
      overflowX: 'auto',
      overflowY: 'hidden',
      scrollbarWidth: 'none',
      ...style
    }
  }, items.map(it => {
    const id = it.id ?? it,
      lbl = it.label ?? it,
      on = id === cur;
    return /*#__PURE__*/React.createElement(Tab, {
      key: id,
      on: on,
      size: size,
      onClick: () => {
        setInner(id);
        onChange && onChange(id);
      }
    }, lbl, it.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        padding: '2px 6px',
        background: 'var(--bg-sunken)',
        color: 'var(--fg-2)',
        letterSpacing: 0,
        pointerEvents: 'none'
      }
    }, it.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/kerasi/App.jsx
try { (() => {
const appThemes = [['sakura', 'Sakura'], ['sakura-dark', 'Sakura · Dark'], ['wine', 'Wine'], ['wine-dark', 'Wine · Dark'], ['rust', 'Rust'], ['rust-dark', 'Rust · Dark']];
const appNav = [['home', 'Home'], ['blog', 'Journal'], ['git', 'Code'], ['dashboard', 'Dashboard'], ['diagrams', 'Diagrams'], ['gallery', 'Gallery'], ['elements', 'Elements']];
function App() {
  const saved = JSON.parse(localStorage.getItem('kerasi-kit') || '{}');
  const q = new URLSearchParams(location.search);
  const forced = window.KERASI_ROUTE;
  const [theme, setTheme] = React.useState(q.get('theme') || saved.theme || 'sakura');
  const [route, setRoute] = React.useState(forced || q.get('route') || saved.route || 'home');
  const [slug, setSlug] = React.useState(null);
  const [menu, setMenu] = React.useState(false);
  const bp = useBp();
  const embed = q.has('route');
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (!forced && !embed) localStorage.setItem('kerasi-kit', JSON.stringify({
      theme,
      route
    }));
  }, [theme, route]);
  const family = theme.split('-')[0];
  const dark = theme.endsWith('dark');
  const markFamily = dark ? 'sakura' : family;
  const go = (r, s = null) => {
    setRoute(r);
    setSlug(s);
    setMenu(false);
    window.scrollTo(0, 0);
  };
  const S = {
    home: /*#__PURE__*/React.createElement(HomeScreen, {
      family: markFamily,
      go: go
    }),
    blog: /*#__PURE__*/React.createElement(BlogScreen, {
      slug: slug,
      go: go
    }),
    git: /*#__PURE__*/React.createElement(GitScreen, null),
    dashboard: /*#__PURE__*/React.createElement(DashboardScreen, null),
    diagrams: /*#__PURE__*/React.createElement(DiagramsScreen, null),
    gallery: /*#__PURE__*/React.createElement(GalleryScreen, {
      family: markFamily
    }),
    elements: window.ElementsScreen ? /*#__PURE__*/React.createElement(window.ElementsScreen, null) : null
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--bg)',
      color: 'var(--fg-1)'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      background: 'color-mix(in srgb,var(--bg) 86%,transparent)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...kitWrap,
      display: 'flex',
      alignItems: 'center',
      gap: bp === 'desktop' ? 32 : 16,
      height: bp === 'mobile' ? 60 : 68
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => go('home'),
    style: {
      cursor: 'pointer',
      flex: bp === 'mobile' ? 1 : 'none'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: bp === 'mobile' ? 28 : 34,
    wordmark: bp !== 'tablet'
  })), bp === 'mobile' ? /*#__PURE__*/React.createElement(IconButton, {
    icon: menu ? 'x' : 'menu',
    label: "Menu",
    size: 44,
    onClick: () => setMenu(!menu)
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: bp === 'tablet' ? 16 : 22,
      flex: 1,
      overflowX: 'auto',
      scrollbarWidth: 'none'
    }
  }, appNav.map(([id, l]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    onClick: () => go(id),
    style: {
      cursor: 'pointer',
      textDecoration: 'none',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 15,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: route === id ? 'var(--fg-1)' : 'var(--fg-3)',
      borderBottom: '2px solid ' + (route === id ? 'var(--accent)' : 'transparent'),
      padding: '6px 0'
    }
  }, l))), /*#__PURE__*/React.createElement(Select, {
    value: theme,
    onChange: e => setTheme(e.target.value),
    options: appThemes.map(([v, l]) => ({
      value: v,
      label: l
    })),
    style: {
      width: bp === 'tablet' ? 140 : 170
    }
  }))), bp === 'mobile' && menu && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line)',
      background: 'var(--bg)',
      padding: '8px 16px 20px',
      maxHeight: 'calc(100vh - 60px)',
      overflowY: 'auto'
    }
  }, appNav.map(([id, l]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    onClick: () => go(id),
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: 56,
      borderBottom: '1px solid var(--line)',
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 24,
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      color: route === id ? 'var(--accent-ink)' : 'var(--fg-1)'
    }
  }, l, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Overline, {
    style: {
      marginBottom: 10
    }
  }, "Theme"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8
    }
  }, appThemes.map(([v, l]) => /*#__PURE__*/React.createElement(Tag, {
    key: v,
    selected: v === theme,
    onClick: () => setTheme(v)
  }, l)))))), /*#__PURE__*/React.createElement("main", {
    "data-screen-label": route
  }, S[route]), /*#__PURE__*/React.createElement(Footer, {
    family: markFamily
  }));
}
if (!(window.KerasiDesignSystem_6c0512 && window.KerasiDesignSystem_6c0512.Button)) document.getElementById('root').innerHTML = '<p style="padding:24px;font-family:monospace">Design-system bundle not loaded (_ds_bundle.js).</p>';else ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/kerasi/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/kerasi/Blog.jsx
try { (() => {
window.blogPosts = [{
  slug: 'pruning',
  date: 'Oct 21, 2026',
  tag: 'Engineering',
  title: 'Pruning the build pipeline',
  read: '7 min',
  ex: 'We cut CI time from eleven minutes to three by removing work, not adding caches.'
}, {
  slug: 'facets',
  date: 'Oct 04, 2026',
  tag: 'Design',
  title: 'Why the new mark has no border',
  ex: 'The badge became a tree. Notes on redrawing the logo with points instead of curves.',
  read: '5 min'
}, {
  slug: 'palettes',
  date: 'Sep 18, 2026',
  tag: 'Design',
  title: 'Wine, rust and blossom',
  ex: 'How three seasonal palettes share one set of semantic tokens.',
  read: '6 min'
}, {
  slug: 'lantern',
  date: 'Aug 30, 2026',
  tag: 'Product',
  title: 'Lantern 1.0: counting without cookies',
  ex: 'Our analytics tool is out. It stores nothing it does not need.',
  read: '4 min'
}, {
  slug: 'roots',
  date: 'Aug 02, 2026',
  tag: 'Notes',
  title: 'A decade of side projects',
  ex: 'What survived, what was cut, and what grew back.',
  read: '9 min'
}];
function BlogList({
  open
}) {
  const bp = useBp();
  const m = bp === 'mobile';
  const [tag, setTag] = React.useState('All');
  const tags = ['All', 'Engineering', 'Design', 'Product', 'Notes'];
  const posts = window.blogPosts.filter(p => tag === 'All' || p.tag === tag);
  const [f, ...rest] = posts;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...kitWrap,
      paddingTop: m ? 32 : 64
    }
  }, /*#__PURE__*/React.createElement(Overline, {
    style: {
      marginBottom: 16
    }
  }, "Journal \xB7 ", window.blogPosts.length, " posts"), /*#__PURE__*/React.createElement(Display, {
    size: 120
  }, "Notes from", /*#__PURE__*/React.createElement("br", null), "the orchard"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: m ? 'nowrap' : 'wrap',
      overflowX: 'auto',
      scrollbarWidth: 'none',
      margin: m ? '24px -16px 32px' : '40px 0 48px',
      padding: m ? '0 16px' : 0
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    selected: t === tag,
    onClick: () => setTag(t)
  }, t))), f && /*#__PURE__*/React.createElement("div", {
    onClick: () => open(f.slug),
    style: {
      display: 'grid',
      gridTemplateColumns: bp === 'desktop' ? 'minmax(0,1.2fr) minmax(0,1fr)' : '1fr',
      gap: m ? 20 : 40,
      alignItems: 'end',
      cursor: 'pointer',
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    label: "Feature image",
    ratio: "16/10",
    tone: "var(--accent-soft)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "solid"
  }, "Featured"), /*#__PURE__*/React.createElement(Badge, null, f.tag)), /*#__PURE__*/React.createElement(Display, {
    size: 56,
    as: "h2"
  }, f.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--fg-2)',
      lineHeight: 1.6,
      margin: '20px 0'
    }
  }, f.ex), /*#__PURE__*/React.createElement(Overline, null, f.date, " \xB7 ", f.read))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
      gap: '40px 24px'
    }
  }, rest.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.slug,
    variant: "rule",
    onClick: () => open(p.slug),
    eyebrow: p.date + ' · ' + p.tag,
    title: p.title,
    footer: /*#__PURE__*/React.createElement(Overline, null, p.read)
  }, p.ex))));
}
function BlogPost({
  slug,
  back
}) {
  const p = window.blogPosts.find(x => x.slug === slug) || window.blogPosts[0];
  const m = useBp() === 'mobile';
  const P = {
    fontSize: m ? 17 : 18,
    lineHeight: 1.75,
    color: 'var(--fg-1)',
    margin: '0 0 24px',
    textWrap: 'pretty'
  };
  return /*#__PURE__*/React.createElement("article", {
    style: {
      ...kitWrap,
      maxWidth: 820,
      paddingTop: m ? 24 : 48
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "quiet",
    icon: "arrow-left",
    onClick: back
  }, "Journal"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      margin: '40px 0 20px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, p.tag), /*#__PURE__*/React.createElement(Badge, null, p.read)), /*#__PURE__*/React.createElement(Display, {
    size: 84
  }, p.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      margin: '32px 0 40px',
      paddingBottom: 24,
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: 'var(--accent-3)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14
    }
  }, "Kerasi Studio"), /*#__PURE__*/React.createElement(Overline, null, p.date))), /*#__PURE__*/React.createElement("p", {
    style: {
      ...P,
      fontSize: 22,
      color: 'var(--fg-2)'
    }
  }, p.ex), /*#__PURE__*/React.createElement("p", {
    style: P
  }, "The pipeline had grown the way branches do: one reasonable step at a time. Lint, then type-check, then a second lint for a different file type, then a visual diff that nobody read. Each was added for a reason. Few of those reasons still held."), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: '40px 0',
      padding: '8px 0 8px 0',
      borderTop: '2px solid var(--fg-1)',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement(Display, {
    size: 40,
    as: "div",
    style: {
      padding: '20px 0'
    }
  }, "Cut what you would not plant again.")), /*#__PURE__*/React.createElement("p", {
    style: P
  }, "We listed every step with its runtime and the last time it caught a real problem. Anything without a catch in six months was removed."), /*#__PURE__*/React.createElement(CodeBlock, {
    language: "yaml",
    title: ".github/workflows/ci.yml",
    code: 'steps:\n  - lint        # 38s\n  - typecheck   # 52s\n  - test        # 1m 40s\n  # - visual-diff   removed',
    highlightLines: [5],
    style: {
      margin: '0 0 24px'
    }
  }), /*#__PURE__*/React.createElement(Placeholder, {
    label: "Diagram \u2014 build timeline",
    ratio: "16/7",
    style: {
      margin: '16px 0 40px'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: P
  }, "Three minutes is not the goal. A pipeline where every step earns its place is."));
}
function BlogScreen({
  slug,
  go
}) {
  return slug ? /*#__PURE__*/React.createElement(BlogPost, {
    slug: slug,
    back: () => go('blog')
  }) : /*#__PURE__*/React.createElement(BlogList, {
    open: s => go('blog', s)
  });
}
window.BlogScreen = BlogScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/kerasi/Blog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/kerasi/Charts.jsx
try { (() => {
function chartC(i) {
  return 'var(--chart-' + (i % 5 + 1) + ')';
}
function AreaChart({
  data,
  height = 220,
  series = 2
}) {
  const w = 640,
    h = height,
    pad = 24,
    max = Math.max(...data.flat()) * 1.1;
  const x = i => pad + i * (w - pad * 2) / (data.length - 1),
    y = v => h - pad - v / max * (h - pad * 2);
  const line = s => data.map((d, i) => (i ? 'L' : 'M') + x(i) + ' ' + y(d[s])).join(' ');
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: '0 0 ' + w + ' ' + h,
    style: {
      width: '100%',
      height: 'auto',
      display: 'block'
    }
  }, [0, .25, .5, .75, 1].map(t => /*#__PURE__*/React.createElement("line", {
    key: t,
    x1: pad,
    x2: w - pad,
    y1: pad + t * (h - pad * 2),
    y2: pad + t * (h - pad * 2),
    stroke: "var(--line)",
    strokeWidth: "1"
  })), Array.from({
    length: series
  }).map((_, s) => /*#__PURE__*/React.createElement("g", {
    key: s
  }, s === 0 && /*#__PURE__*/React.createElement("path", {
    d: line(s) + ' L' + x(data.length - 1) + ' ' + (h - pad) + ' L' + pad + ' ' + (h - pad) + ' Z',
    fill: chartC(s),
    opacity: ".12"
  }), /*#__PURE__*/React.createElement("path", {
    d: line(s),
    fill: "none",
    stroke: chartC(s),
    strokeWidth: s ? 1.5 : 2.5,
    strokeDasharray: s ? '4 4' : undefined
  }))), data.map((d, i) => i === data.length - 1 && /*#__PURE__*/React.createElement("rect", {
    key: i,
    x: x(i) - 4,
    y: y(d[0]) - 4,
    width: "8",
    height: "8",
    fill: chartC(0)
  })));
}
function BarChart({
  data,
  labels,
  height = 200,
  stacked
}) {
  const w = 640,
    h = height,
    pad = 24,
    n = data.length,
    bw = (w - pad * 2) / n * .56;
  const max = Math.max(...data.map(d => stacked ? d.reduce((a, b) => a + b, 0) : Math.max(...d))) * 1.1;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: '0 0 ' + w + ' ' + (h + 18),
    style: {
      width: '100%',
      height: 'auto',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: pad,
    x2: w - pad,
    y1: h - pad,
    y2: h - pad,
    stroke: "var(--fg-1)"
  }), data.map((d, i) => {
    const cx = pad + (i + .5) * (w - pad * 2) / n;
    let acc = 0;
    return /*#__PURE__*/React.createElement("g", {
      key: i
    }, d.map((v, s) => {
      const bh = v / max * (h - pad * 2);
      const bx = stacked ? cx - bw / 2 : cx - bw / 2 + s * bw / d.length;
      const by = h - pad - bh - (stacked ? acc : 0);
      if (stacked) acc += bh;
      return /*#__PURE__*/React.createElement("rect", {
        key: s,
        x: bx,
        y: by,
        width: stacked ? bw : bw / d.length - 2,
        height: bh,
        fill: chartC(s)
      });
    }), labels && /*#__PURE__*/React.createElement("text", {
      x: cx,
      y: h - 4,
      textAnchor: "middle",
      fontFamily: "var(--font-mono)",
      fontSize: "10",
      fill: "var(--fg-3)"
    }, labels[i]));
  }));
}
function Donut({
  values,
  size = 180,
  thick = 22,
  label,
  sub
}) {
  const r = (size - thick) / 2,
    c = 2 * Math.PI * r,
    tot = values.reduce((a, b) => a + b, 0);
  let off = 0;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: '0 0 ' + size + ' ' + size,
    style: {
      width: size,
      height: size
    }
  }, /*#__PURE__*/React.createElement("g", {
    transform: 'rotate(-90 ' + size / 2 + ' ' + size / 2 + ')'
  }, values.map((v, i) => {
    const len = v / tot * c;
    const el = /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: size / 2,
      cy: size / 2,
      r: r,
      fill: "none",
      stroke: chartC(i),
      strokeWidth: thick,
      strokeDasharray: len - 2 + ' ' + (c - len + 2),
      strokeDashoffset: -off
    });
    off += len;
    return el;
  })), label && /*#__PURE__*/React.createElement("text", {
    x: "50%",
    y: "48%",
    textAnchor: "middle",
    fontFamily: "var(--font-display)",
    fontWeight: "600",
    fontSize: size * .2,
    fill: "var(--fg-1)"
  }, label), sub && /*#__PURE__*/React.createElement("text", {
    x: "50%",
    y: "62%",
    textAnchor: "middle",
    fontFamily: "var(--font-mono)",
    fontSize: "9",
    letterSpacing: "1.2",
    fill: "var(--fg-3)"
  }, sub));
}
function Sparkline({
  data,
  w = 120,
  h = 32,
  color
}) {
  const max = Math.max(...data),
    min = Math.min(...data);
  const p = data.map((v, i) => (i ? 'L' : 'M') + i * w / (data.length - 1) + ' ' + (h - 2 - (v - min) / (max - min || 1) * (h - 4))).join(' ');
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: '0 0 ' + w + ' ' + h,
    style: {
      width: w,
      height: h
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: p,
    fill: "none",
    stroke: color || 'var(--accent)',
    strokeWidth: "1.5"
  }));
}
function HeatGrid({
  weeks = 26,
  seed = 3,
  cell = 11
}) {
  let s = seed;
  const rnd = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: '0 0 ' + weeks * (cell + 2) + ' ' + 7 * (cell + 2),
    style: {
      width: '100%',
      height: 'auto',
      display: 'block'
    }
  }, Array.from({
    length: weeks * 7
  }).map((_, i) => {
    const v = rnd();
    const o = v < .35 ? 0 : v < .6 ? .3 : v < .82 ? .6 : 1;
    return /*#__PURE__*/React.createElement("rect", {
      key: i,
      x: Math.floor(i / 7) * (cell + 2),
      y: i % 7 * (cell + 2),
      width: cell,
      height: cell,
      fill: o ? 'var(--accent)' : 'var(--bg-sunken)',
      opacity: o || 1
    });
  }));
}
function Flow({
  nodes,
  edges,
  height = 220
}) {
  const w = 640;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: '0 0 ' + w + ' ' + height,
    style: {
      width: '100%',
      height: 'auto',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("marker", {
    id: "arr",
    viewBox: "0 0 8 8",
    refX: "7",
    refY: "4",
    markerWidth: "8",
    markerHeight: "8",
    orient: "auto"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0 L8 4 L0 8 Z",
    fill: "var(--fg-2)"
  }))), edges.map(([a, b], i) => {
    const A = nodes[a],
      B = nodes[b];
    const x1 = A.x + A.w,
      y1 = A.y + 18,
      x2 = B.x,
      y2 = B.y + 18,
      mx = (x1 + x2) / 2;
    return /*#__PURE__*/React.createElement("path", {
      key: i,
      d: 'M' + x1 + ' ' + y1 + ' H' + mx + ' V' + y2 + ' H' + (x2 - 2),
      fill: "none",
      stroke: "var(--fg-2)",
      strokeWidth: "1.2",
      markerEnd: "url(#arr)"
    });
  }), nodes.map((n, i) => /*#__PURE__*/React.createElement("g", {
    key: i
  }, /*#__PURE__*/React.createElement("path", {
    d: 'M' + (n.x + 8) + ' ' + n.y + ' H' + (n.x + n.w) + ' V' + (n.y + 28) + ' L' + (n.x + n.w - 8) + ' ' + (n.y + 36) + ' H' + n.x + ' V' + (n.y + 8) + ' Z',
    fill: n.accent ? 'var(--accent)' : 'var(--bg-raised)',
    stroke: n.accent ? 'none' : 'var(--fg-1)',
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("text", {
    x: n.x + n.w / 2,
    y: n.y + 22,
    textAnchor: "middle",
    fontFamily: "var(--font-display)",
    fontSize: "13",
    letterSpacing: ".6",
    fill: n.accent ? 'var(--accent-fg)' : 'var(--fg-1)'
  }, n.label.toUpperCase()))));
}
function Legend({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, items.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 12,
      color: 'var(--fg-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      background: chartC(i)
    }
  }), l)));
}
Object.assign(window, {
  chartC,
  AreaChart,
  BarChart,
  Donut,
  Sparkline,
  HeatGrid,
  Flow,
  Legend
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/kerasi/Charts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/kerasi/Dashboard.jsx
try { (() => {
const dashData = {
  Week: {
    area: [[12, 14], [18, 15], [15, 17], [22, 18], [26, 20], [24, 21], [31, 22]],
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  Month: {
    area: [[40, 38], [46, 40], [44, 41], [52, 44], [58, 46], [55, 47], [63, 49], [70, 52], [68, 54], [76, 55]],
    labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10']
  },
  Year: {
    area: [[120, 110], [140, 118], [135, 125], [160, 130], [180, 138], [175, 142], [210, 150], [230, 158], [220, 163], [260, 170], [280, 176], [300, 182]],
    labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
  }
};
function Stat({
  label,
  value,
  delta,
  spark,
  good = true
}) {
  const m = useBp() === 'mobile';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 0',
      borderTop: '2px solid var(--fg-1)'
    }
  }, /*#__PURE__*/React.createElement(Overline, null, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 12,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: m ? 36 : 56,
      lineHeight: .9
    }
  }, value), !m && /*#__PURE__*/React.createElement(Sparkline, {
    data: spark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: 13,
      color: good ? 'var(--status-success)' : 'var(--status-danger)',
      fontFamily: 'var(--font-mono)'
    }
  }, delta, " vs last period"));
}
function DashboardScreen() {
  const bp = useBp();
  const m = bp === 'mobile';
  const [range, setRange] = React.useState('Week');
  const d = dashData[range];
  const deploys = [['hanami-ui', 'main', 'success', '42s', '5h'], ['bark', 'release/1.8', 'success', '1m 12s', '9h'], ['lantern', 'main', 'danger', '—', '1d'], ['kerasi.studio', 'main', 'success', '28s', '1d']];
  const box = {
    border: '1px solid var(--line)',
    background: 'var(--bg-raised)',
    padding: m ? 16 : 24,
    minWidth: 0
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...kitWrap,
      paddingTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24,
      flexWrap: 'wrap',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, {
    style: {
      marginBottom: 10
    }
  }, "Lantern \xB7 All projects"), /*#__PURE__*/React.createElement(Display, {
    size: 72
  }, "Overview")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      width: m ? '100%' : 'auto',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: ['Week', 'Month', 'Year'],
    value: range,
    onChange: setRange
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    icon: "download"
  }, "Export"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: bp === 'desktop' ? 'repeat(4,minmax(0,1fr))' : 'repeat(2,minmax(0,1fr))',
      gap: m ? 16 : 24
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Visitors",
    value: "18.4k",
    delta: "+12.6%",
    spark: [3, 4, 3, 5, 6, 5, 7, 8]
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Stars",
    value: "1,204",
    delta: "+3.1%",
    spark: [2, 2, 3, 3, 4, 4, 5, 5]
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Deploys",
    value: "86",
    delta: "+8",
    spark: [5, 3, 6, 4, 7, 6, 8, 7]
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Build time",
    value: "3:02",
    delta: "-71%",
    spark: [11, 10, 9, 8, 6, 5, 3, 3]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: bp === 'desktop' ? 'minmax(0,2fr) minmax(0,1fr)' : 'minmax(0,1fr)',
      gap: 24,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: box
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Display, {
    size: 24,
    as: "h3"
  }, "Traffic"), /*#__PURE__*/React.createElement(Legend, {
    items: ['This period', 'Previous']
  })), /*#__PURE__*/React.createElement(AreaChart, {
    data: d.area
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...box,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Display, {
    size: 24,
    as: "h3",
    style: {
      alignSelf: 'flex-start'
    }
  }, "Sources"), /*#__PURE__*/React.createElement(Donut, {
    values: [46, 28, 16, 10],
    label: "18.4k",
    sub: "VISITS"
  }), /*#__PURE__*/React.createElement(Legend, {
    items: ['Direct', 'Search', 'GitHub', 'Social']
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: bp === 'desktop' ? 'minmax(0,1fr) minmax(0,1fr)' : 'minmax(0,1fr)',
      gap: 24,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: box
  }, /*#__PURE__*/React.createElement(Display, {
    size: 24,
    as: "h3",
    style: {
      marginBottom: 16
    }
  }, "Commits by project"), /*#__PURE__*/React.createElement(BarChart, {
    data: [[14, 6], [9, 4], [12, 8], [6, 3], [16, 5], [8, 2], [11, 7]],
    labels: d.labels.slice(0, 7),
    stacked: true
  })), /*#__PURE__*/React.createElement("div", {
    style: box
  }, /*#__PURE__*/React.createElement(Display, {
    size: 24,
    as: "h3",
    style: {
      marginBottom: 12
    }
  }, "Recent deploys"), deploys.map(([p, b, s, t, a]) => /*#__PURE__*/React.createElement("div", {
    key: p,
    style: {
      display: 'grid',
      gridTemplateColumns: m ? 'minmax(0,1fr) auto 32px' : 'minmax(0,1fr) 120px 60px 40px',
      gap: 12,
      alignItems: 'center',
      padding: '12px 0',
      borderTop: '1px solid var(--line)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600
    }
  }, p), /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--fg-3)'
    }
  }, b)), /*#__PURE__*/React.createElement(Badge, {
    tone: s,
    dot: true
  }, s === 'success' ? 'Ready' : 'Failed'), !m && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-3)',
      fontSize: 12
    }
  }, a))))));
}
window.DashboardScreen = DashboardScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/kerasi/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/kerasi/Diagrams.jsx
try { (() => {
function DiagramsScreen() {
  const m = useBp() === 'mobile';
  const box = {
    border: '1px solid var(--line)',
    background: 'var(--bg-raised)',
    padding: m ? 16 : 24,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    minWidth: 0
  };
  const H = ({
    i,
    t
  }) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, {
    style: {
      marginBottom: 6
    }
  }, i), /*#__PURE__*/React.createElement(Display, {
    size: 26,
    as: "h3"
  }, t));
  const nodes = [{
    x: 10,
    y: 40,
    w: 100,
    label: 'Commit'
  }, {
    x: 150,
    y: 40,
    w: 100,
    label: 'Lint'
  }, {
    x: 150,
    y: 140,
    w: 100,
    label: 'Test'
  }, {
    x: 290,
    y: 90,
    w: 110,
    label: 'Build',
    accent: true
  }, {
    x: 440,
    y: 40,
    w: 90,
    label: 'Preview'
  }, {
    x: 440,
    y: 140,
    w: 90,
    label: 'Release'
  }, {
    x: 560,
    y: 140,
    w: 70,
    label: 'Live'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...kitWrap,
      paddingTop: 40
    }
  }, /*#__PURE__*/React.createElement(Overline, {
    style: {
      marginBottom: 10
    }
  }, "Data visualisation"), /*#__PURE__*/React.createElement(Display, {
    size: 96
  }, "Diagrams"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--fg-2)',
      fontSize: 17,
      maxWidth: 560,
      margin: '20px 0 40px'
    }
  }, "Charts use --chart-1\u20265, square marks, hairline grids and mono labels. Switch theme to see them recolour."), /*#__PURE__*/React.createElement("div", {
    style: {
      ...box,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(H, {
    i: "Flow",
    t: "Release pipeline"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto',
      margin: m ? '0 -16px' : 0,
      padding: m ? '0 16px' : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: m ? 560 : 0
    }
  }, /*#__PURE__*/React.createElement(Flow, {
    nodes: nodes,
    edges: [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [3, 5], [5, 6]]
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: box
  }, /*#__PURE__*/React.createElement(H, {
    i: "Line \xB7 area",
    t: "Growth"
  }), /*#__PURE__*/React.createElement(AreaChart, {
    data: [[4, 3], [6, 4], [5, 5], [9, 6], [12, 7], [11, 8], [15, 9], [18, 10]],
    height: 200
  }), /*#__PURE__*/React.createElement(Legend, {
    items: ['2026', '2025']
  })), /*#__PURE__*/React.createElement("div", {
    style: box
  }, /*#__PURE__*/React.createElement(H, {
    i: "Bars \xB7 grouped",
    t: "Issues opened vs closed"
  }), /*#__PURE__*/React.createElement(BarChart, {
    data: [[8, 6], [12, 10], [9, 11], [14, 12], [7, 9], [10, 10]],
    labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
  }), /*#__PURE__*/React.createElement(Legend, {
    items: ['Opened', 'Closed']
  })), /*#__PURE__*/React.createElement("div", {
    style: box
  }, /*#__PURE__*/React.createElement(H, {
    i: "Bars \xB7 stacked",
    t: "Time by phase"
  }), /*#__PURE__*/React.createElement(BarChart, {
    data: [[3, 4, 2], [4, 3, 3], [2, 5, 2], [5, 4, 1], [3, 3, 4]],
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
    stacked: true
  }), /*#__PURE__*/React.createElement(Legend, {
    items: ['Design', 'Build', 'Review']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...box,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(H, {
    i: "Donut",
    t: "Language share"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Donut, {
    values: [62, 24, 9, 5],
    label: "62%",
    sub: "TYPESCRIPT",
    size: 170
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, ['TypeScript 62%', 'CSS 24%', 'MDX 9%', 'Other 5%'].map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13,
      color: 'var(--fg-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      background: chartC(i)
    }
  }), l))))), /*#__PURE__*/React.createElement("div", {
    style: box
  }, /*#__PURE__*/React.createElement(H, {
    i: "Heat grid",
    t: "Commit activity"
  }), /*#__PURE__*/React.createElement(HeatGrid, {
    weeks: 30,
    cell: 10
  })), /*#__PURE__*/React.createElement("div", {
    style: box
  }, /*#__PURE__*/React.createElement(H, {
    i: "Proportion",
    t: "Budget split"
  }), [['Hosting', 46], ['Domains', 12], ['Tooling', 28], ['Other', 14]].map(([l, v], i) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, v, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      background: 'var(--bg-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: v + '%',
      height: '100%',
      background: chartC(i)
    }
  })))))));
}
window.DiagramsScreen = DiagramsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/kerasi/Diagrams.jsx", error: String((e && e.message) || e) }); }

// ui_kits/kerasi/Elements.jsx
try { (() => {
function ElSection({
  n,
  title,
  note,
  children
}) {
  const m = useBp() === 'mobile';
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: m ? '28px 0' : '40px 0',
      borderTop: '2px solid var(--fg-1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 12,
      flexWrap: 'wrap',
      marginBottom: m ? 16 : 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, {
    style: {
      marginBottom: 6
    }
  }, n), /*#__PURE__*/React.createElement(Display, {
    size: m ? 28 : 36,
    as: "h2"
  }, title)), note && /*#__PURE__*/React.createElement(Overline, null, note)), children);
}
function ElementsScreen() {
  const bp = useBp();
  const m = bp === 'mobile';
  const t = bp === 'tablet';
  const [dlg, setDlg] = React.useState(false);
  const [toast, setToast] = React.useState(false);
  const [tab, setTab] = React.useState('code');
  const [tag, setTag] = React.useState('All');
  const Fav = window.KerasiDesignSystem_6c0512 && window.KerasiDesignSystem_6c0512.Favicon;
  const row = {
    display: 'flex',
    gap: m ? 8 : 12,
    flexWrap: 'wrap',
    alignItems: 'center'
  };
  const scrollRow = {
    display: 'flex',
    gap: 8,
    overflowX: 'auto',
    scrollbarWidth: 'none',
    flexWrap: m ? 'nowrap' : 'wrap',
    margin: m ? '0 -16px' : 0,
    padding: m ? '0 16px' : 0
  };
  const cols = n => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(' + n + ',minmax(0,1fr))',
    gap: m ? 12 : 16
  });
  const bsz = m ? 'lg' : 'md';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...kitWrap,
      paddingTop: m ? 24 : 40
    }
  }, /*#__PURE__*/React.createElement(Overline, {
    style: {
      marginBottom: 10
    }
  }, "Elements \xB7 ", m ? 'phone' : t ? 'tablet' : 'desktop', " layout"), /*#__PURE__*/React.createElement(Display, {
    size: 96
  }, "Elements"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--fg-2)',
      fontSize: m ? 16 : 17,
      maxWidth: 560,
      margin: '16px 0 32px',
      textWrap: 'pretty'
    }
  }, "Every component as it behaves at this width. Below 640px: full-width actions, 44px touch targets, scrolling chip rows, bottom-sheet dialogs, edge-to-edge toasts."), /*#__PURE__*/React.createElement(ElSection, {
    n: "01",
    title: "Buttons",
    note: m ? 'stacked · full width' : 'inline'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: m ? 'column' : 'row',
      gap: m ? 10 : 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    full: m,
    size: bsz,
    iconRight: "arrow-right"
  }, "Primary"), /*#__PURE__*/React.createElement(Button, {
    full: m,
    size: bsz,
    variant: "secondary"
  }, "Secondary"), /*#__PURE__*/React.createElement(Button, {
    full: m,
    size: bsz,
    variant: "ghost"
  }, "Ghost"), /*#__PURE__*/React.createElement(Button, {
    full: m,
    size: bsz,
    variant: "quiet",
    icon: "download"
  }, "Quiet"), /*#__PURE__*/React.createElement(Button, {
    full: m,
    size: bsz,
    disabled: true
  }, "Disabled")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...row,
      marginTop: 16
    }
  }, ['plus', 'search', 'share-2', 'heart', 'settings'].map(i => /*#__PURE__*/React.createElement(IconButton, {
    key: i,
    icon: i,
    label: i,
    size: 44,
    variant: i === 'plus' ? 'solid' : 'outline'
  })))), /*#__PURE__*/React.createElement(ElSection, {
    n: "02",
    title: "Badges & tags",
    note: m ? 'chips scroll sideways' : null
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...row,
      marginBottom: 16
    }
  }, ['neutral', 'accent', 'solid', 'success', 'warning', 'danger', 'info'].map(x => /*#__PURE__*/React.createElement(Badge, {
    key: x,
    tone: x,
    dot: x === 'success' || x === 'danger'
  }, x))), /*#__PURE__*/React.createElement("div", {
    style: scrollRow
  }, ['All', 'Engineering', 'Design', 'Product', 'Notes', 'Archive'].map(x => /*#__PURE__*/React.createElement(Tag, {
    key: x,
    selected: x === tag,
    onClick: () => setTag(x)
  }, x))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...row,
      marginTop: 12
    }
  }, ['react', 'tokens', 'themes'].map(x => /*#__PURE__*/React.createElement(Tag, {
    key: x,
    onRemove: () => {}
  }, x)))), /*#__PURE__*/React.createElement(ElSection, {
    n: "03",
    title: "Forms",
    note: m ? '1 column' : t ? '2 columns' : '3 columns'
  }, /*#__PURE__*/React.createElement("div", {
    style: cols(m ? 1 : t ? 2 : 3)
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "you@studio.gr",
    icon: "mail"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Branch",
    mono: true,
    defaultValue: "release/spring",
    error: "Branch is protected"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Theme",
    options: ['Sakura', 'Wine', 'Rust'],
    hint: "Applies to all pages"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: m ? 'column' : 'row',
      gap: m ? 14 : 28,
      marginTop: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Require review",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Sign commits"
  }), /*#__PURE__*/React.createElement(Radio, {
    direction: m ? 'column' : 'row',
    options: ['Public', 'Private'],
    defaultValue: "Public"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: m ? 'column' : 'row',
      gap: m ? 14 : 28,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "Dark theme",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Auto-deploy"
  })), m && /*#__PURE__*/React.createElement(Button, {
    full: true,
    size: "lg",
    style: {
      marginTop: 20
    }
  }, "Save settings")), /*#__PURE__*/React.createElement(ElSection, {
    n: "04",
    title: "Tabs",
    note: "scroll when they overflow"
  }, /*#__PURE__*/React.createElement(Tabs, {
    size: m ? 'md' : 'lg',
    value: tab,
    onChange: setTab,
    items: [{
      id: 'code',
      label: 'Code'
    }, {
      id: 'issues',
      label: 'Issues',
      count: 3
    }, {
      id: 'pulls',
      label: 'Pull requests',
      count: 2
    }, {
      id: 'actions',
      label: 'Actions'
    }, {
      id: 'settings',
      label: 'Settings'
    }]
  })), /*#__PURE__*/React.createElement(ElSection, {
    n: "05",
    title: "Cards",
    note: m ? '1 column' : t ? '2 columns' : '3 columns'
  }, /*#__PURE__*/React.createElement("div", {
    style: cols(m ? 1 : t ? 2 : 3)
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "cut",
    padding: m ? 20 : 28,
    eyebrow: "01 \u2014 Open source",
    title: "Hanami UI",
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "quiet",
      size: "sm",
      iconRight: "arrow-right"
    }, "Open")
  }, "A component library for quiet, seasonal interfaces."), /*#__PURE__*/React.createElement(Card, {
    variant: "rule",
    eyebrow: "Oct 21 \xB7 Engineering",
    title: "Pruning the build pipeline",
    footer: /*#__PURE__*/React.createElement(Overline, null, "7 min")
  }, "CI time from eleven minutes to three."), /*#__PURE__*/React.createElement(Card, {
    variant: "inverse",
    padding: m ? 20 : 24,
    eyebrow: "Lantern",
    title: "18.4k visits"
  }, "+12.6% vs last week"))), /*#__PURE__*/React.createElement(ElSection, {
    n: "06",
    title: "Code",
    note: m ? 'scrolls sideways' : null
  }, /*#__PURE__*/React.createElement(CodeBlock, {
    language: "ts",
    title: "bloom.ts",
    code: "export async function bloom(branch: Branch, opts: BloomOptions) {\n  const count = opts.petals ?? 5;\n  await branch.open({ count, at: opts.season.peak });\n}",
    highlightLines: [2],
    style: m ? {
      margin: '0 -16px',
      borderLeft: 'none',
      borderRight: 'none'
    } : null
  })), /*#__PURE__*/React.createElement(ElSection, {
    n: "07",
    title: "Feedback",
    note: m ? 'sheet · edge toast' : 'modal · corner toast'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: m ? 'column' : 'row',
      gap: m ? 10 : 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    full: m,
    size: bsz,
    variant: "secondary",
    onClick: () => setDlg(true)
  }, "Open dialog"), /*#__PURE__*/React.createElement(Button, {
    full: m,
    size: bsz,
    variant: "secondary",
    onClick: () => {
      setToast(true);
      setTimeout(() => setToast(false), 2600);
    }
  }, "Show toast"), !m && /*#__PURE__*/React.createElement(Tooltip, {
    label: "Copy SHA"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "copy",
    label: "Copy",
    variant: "outline",
    size: 42
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,1fr) minmax(0,1fr)',
      gap: 12,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Deployed",
    style: {
      width: 'auto'
    }
  }, "kerasi.studio is live \u2014 42s"), /*#__PURE__*/React.createElement(Toast, {
    tone: "danger",
    title: "Build failed",
    style: {
      width: 'auto'
    }
  }, "Step 3 \xB7 lint"))), /*#__PURE__*/React.createElement(ElSection, {
    n: "08",
    title: "Brand",
    note: "mark \xB7 favicons"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: m ? 16 : 28,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: m ? 32 : 40
  }), /*#__PURE__*/React.createElement(Mark, {
    size: m ? 56 : 72
  }), Fav && /*#__PURE__*/React.createElement(Fav, {
    size: 32
  }), Fav && /*#__PURE__*/React.createElement(Fav, {
    variant: "sub",
    label: "H",
    color: "crimson",
    size: 32
  }), Fav && /*#__PURE__*/React.createElement(Fav, {
    variant: "sub",
    label: "B",
    color: "bark",
    size: 32
  }), Fav && /*#__PURE__*/React.createElement(Fav, {
    variant: "sub",
    label: "G",
    color: "graphite",
    size: 32
  }))), /*#__PURE__*/React.createElement(Dialog, {
    open: dlg,
    eyebrow: "Branch",
    title: "Delete release/spring?",
    onClose: () => setDlg(false),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      full: m,
      variant: "ghost",
      onClick: () => setDlg(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      full: m,
      onClick: () => setDlg(false)
    }, "Delete"))
  }, "This removes 14 commits not merged into main."), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: m ? 12 : 'auto',
      right: m ? 12 : 24,
      bottom: m ? 12 : 24,
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "accent",
    title: "Saved",
    onClose: () => setToast(false),
    style: m ? {
      width: 'auto'
    } : null
  }, "Theme applied to all pages")));
}
window.ElementsScreen = ElementsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/kerasi/Elements.jsx", error: String((e && e.message) || e) }); }

// ui_kits/kerasi/Gallery.jsx
try { (() => {
const galleryItems = [{
  id: 1,
  t: 'Wine',
  k: 'Palette',
  theme: 'wine',
  r: '3/4',
  swatch: true
}, {
  id: 2,
  t: 'Blossom study',
  k: 'Photo',
  r: '4/3'
}, {
  id: 3,
  t: 'Rust',
  k: 'Palette',
  theme: 'rust',
  r: '1/1',
  swatch: true
}, {
  id: 4,
  t: 'Studio, morning',
  k: 'Photo',
  r: '3/4'
}, {
  id: 5,
  t: 'The mark',
  k: 'Brand',
  r: '1/1',
  mark: true
}, {
  id: 6,
  t: 'Sakura',
  k: 'Palette',
  theme: 'sakura',
  r: '4/3',
  swatch: true
}, {
  id: 7,
  t: 'Lantern UI',
  k: 'Screens',
  r: '16/10'
}, {
  id: 8,
  t: 'Bark docs',
  k: 'Screens',
  r: '4/3'
}, {
  id: 9,
  t: 'Wine dark',
  k: 'Palette',
  theme: 'wine-dark',
  r: '3/4',
  swatch: true
}];
function GalleryTile({
  it,
  family,
  onOpen
}) {
  const m = useBp() === 'mobile';
  const [h, setH] = React.useState(false);
  let inner;
  if (it.swatch) inner = /*#__PURE__*/React.createElement("div", {
    "data-theme": it.theme,
    style: {
      aspectRatio: it.r,
      background: 'var(--accent)',
      color: 'var(--accent-fg)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: m ? 12 : 20
    }
  }, /*#__PURE__*/React.createElement(Overline, {
    style: {
      color: 'inherit',
      opacity: .75
    }
  }, it.theme), /*#__PURE__*/React.createElement(Display, {
    size: m ? 26 : 48,
    as: "div"
  }, it.t));else if (it.mark) inner = /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: it.r,
      background: 'var(--bg-sunken)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    size: m ? 110 : 200
  }));else inner = /*#__PURE__*/React.createElement(Placeholder, {
    label: it.k + ' — drop image',
    ratio: it.r
  });
  return /*#__PURE__*/React.createElement("figure", {
    onClick: () => onOpen(it),
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      margin: m ? '0 0 14px' : '0 0 20px',
      breakInside: 'avoid',
      cursor: 'zoom-in'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      transition: 'transform var(--dur-3) var(--ease-out)',
      transform: h ? 'scale(.985)' : 'none'
    }
  }, inner), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 8,
      fontSize: m ? 12 : 14,
      gap: 6,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, it.t), /*#__PURE__*/React.createElement(Overline, null, it.k)));
}
function GalleryScreen({
  family
}) {
  const bp = useBp();
  const m = bp === 'mobile';
  const [k, setK] = React.useState('All');
  const [open, setOpen] = React.useState(null);
  const kinds = ['All', 'Palette', 'Photo', 'Brand', 'Screens'];
  const items = galleryItems.filter(i => k === 'All' || i.k === k);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...kitWrap,
      paddingTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24,
      flexWrap: 'wrap',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, {
    style: {
      marginBottom: 10
    }
  }, "Gallery \xB7 ", galleryItems.length, " works"), /*#__PURE__*/React.createElement(Display, {
    size: 96
  }, "Gallery")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: m ? 'nowrap' : 'wrap',
      overflowX: 'auto',
      scrollbarWidth: 'none',
      width: m ? 'calc(100% + 32px)' : 'auto',
      margin: m ? '0 -16px' : 0,
      padding: m ? '0 16px' : 0
    }
  }, kinds.map(x => /*#__PURE__*/React.createElement(Tag, {
    key: x,
    selected: x === k,
    onClick: () => setK(x)
  }, x)))), /*#__PURE__*/React.createElement("div", {
    style: {
      columns: m ? 2 : bp === 'tablet' ? 3 : '3 280px',
      columnGap: m ? 12 : 20
    }
  }, items.map(it => /*#__PURE__*/React.createElement(GalleryTile, {
    key: it.id,
    it: it,
    family: family,
    onOpen: setOpen
  }))), /*#__PURE__*/React.createElement(Dialog, {
    open: !!open,
    width: 720,
    eyebrow: open && open.k,
    title: open && open.t,
    onClose: () => setOpen(null),
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      icon: "download"
    }, "Download")
  }, open && (open.swatch ? /*#__PURE__*/React.createElement("div", {
    "data-theme": open.theme,
    style: {
      height: 320,
      background: 'var(--accent)'
    }
  }) : open.mark ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      background: 'var(--bg-sunken)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    size: 280
  })) : /*#__PURE__*/React.createElement(Placeholder, {
    label: "Image",
    ratio: "16/9"
  }))));
}
window.GalleryScreen = GalleryScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/kerasi/Gallery.jsx", error: String((e && e.message) || e) }); }

// ui_kits/kerasi/Git.jsx
try { (() => {
const gitFiles = [['folder', '.github', 'ci: drop visual-diff step', '2 days ago'], ['folder', 'packages', 'feat(tabs): lg size', '5 hours ago'], ['folder', 'tokens', 'themes: add rust-dark', 'yesterday'], ['file', 'package.json', 'chore: bump to 2.4.0', '5 hours ago'], ['file', 'README.md', 'docs: new logo', '3 days ago'], ['file', 'LICENSE', 'init', '2 years ago']];
const gitIssues = [{
  n: 142,
  t: 'Tabs overflow on narrow screens',
  l: 'bug',
  s: 'open',
  a: '2h'
}, {
  n: 139,
  t: 'Add chamfer size token for cards',
  l: 'design',
  s: 'open',
  a: '1d'
}, {
  n: 137,
  t: 'Switch knob jumps in Safari',
  l: 'bug',
  s: 'open',
  a: '3d'
}, {
  n: 131,
  t: 'Document wine-dark contrast',
  l: 'docs',
  s: 'closed',
  a: '1w'
}];
function GitScreen() {
  const bp = useBp();
  const m = bp === 'mobile';
  const [tab, setTab] = React.useState('code');
  const [toast, setToast] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...kitWrap,
      paddingTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24,
      flexWrap: 'wrap',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, {
    style: {
      marginBottom: 10
    }
  }, "kerasi / public"), /*#__PURE__*/React.createElement(Display, {
    size: 64
  }, "Hanami-ui"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--fg-2)',
      margin: '14px 0 0',
      fontSize: 16
    }
  }, "A component library for quiet, seasonal interfaces.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    icon: "eye"
  }, "Watch \xB7 48"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    icon: "star"
  }, "Star \xB7 1.2k"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    icon: "git-fork"
  }, "Fork"))), /*#__PURE__*/React.createElement(Tabs, {
    size: "lg",
    value: tab,
    onChange: setTab,
    items: [{
      id: 'code',
      label: 'Code'
    }, {
      id: 'issues',
      label: 'Issues',
      count: 3
    }, {
      id: 'pulls',
      label: 'Pull requests',
      count: 2
    }, {
      id: 'actions',
      label: 'Actions'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: bp === 'desktop' ? 'minmax(0,1fr) 280px' : 'minmax(0,1fr)',
      gap: 40,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, tab === 'code' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      marginBottom: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['main', 'release/spring', 'feat/tabs-lg'],
    style: {
      width: m ? 'calc(100% - 96px)' : 200
    }
  }), !m && /*#__PURE__*/React.createElement(Overline, null, "3 branches \xB7 14 tags"), !m && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), m ? null : /*#__PURE__*/React.createElement(Input, {
    placeholder: "Go to file",
    icon: "search",
    style: {
      width: 200
    }
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    icon: "copy",
    onClick: () => {
      setToast(true);
      setTimeout(() => setToast(false), 2200);
    }
  }, "Clone")), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 16px',
      background: 'var(--bg-sunken)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: 'var(--accent)'
    }
  }), /*#__PURE__*/React.createElement("b", null, "mira"), !m && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-2)'
    }
  }, "feat(tabs): lg size"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--accent-ink)'
    }
  }, "a83f2c1"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-3)'
    }
  }, "5h"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "Passing")), gitFiles.map(([k, n, mm, d]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '20px minmax(0,1fr) auto' : '24px 200px minmax(0,1fr) 110px',
      gap: 12,
      alignItems: 'center',
      padding: '11px 16px',
      borderTop: '1px solid var(--line)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: k,
    size: 16,
    color: k === 'folder' ? 'var(--accent-2)' : 'var(--fg-3)'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, n), !m && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-2)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, mm), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-3)',
      textAlign: 'right',
      fontSize: 13
    }
  }, d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--line)',
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      borderBottom: '1px solid var(--line)',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "book-open",
    size: 16
  }), /*#__PURE__*/React.createElement(Overline, {
    style: {
      color: 'var(--fg-1)'
    }
  }, "README.md")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: m ? '20px 16px' : '28px 32px'
    }
  }, /*#__PURE__*/React.createElement(Display, {
    size: 40,
    as: "h3"
  }, "Hanami UI"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--fg-2)',
      lineHeight: 1.7
    }
  }, "Sharp components on calm surfaces. Every token is themeable across Sakura, Wine and Rust."), /*#__PURE__*/React.createElement(CodeBlock, {
    language: "sh",
    code: 'pnpm add @kerasi/hanami',
    lineNumbers: false,
    style: {
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement(CodeBlock, {
    language: "tsx",
    title: "app.tsx",
    code: "import { Button } from '@kerasi/hanami';\n\nexport default function App() {\n  return <Button variant=\"primary\">Bloom</Button>;\n}"
  })))), tab !== 'code' && /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      padding: '12px 16px',
      background: 'var(--bg-sunken)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("b", null, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-dot",
    size: 14,
    style: {
      verticalAlign: -2
    }
  }), " 3 Open"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-3)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14,
    style: {
      verticalAlign: -2
    }
  }), " 1 Closed")), gitIssues.map(i => /*#__PURE__*/React.createElement("div", {
    key: i.n,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px 16px',
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i.s === 'open' ? 'circle-dot' : 'circle-check',
    size: 16,
    color: i.s === 'open' ? 'var(--status-success)' : 'var(--fg-3)'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15
    }
  }, i.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--fg-3)',
      marginTop: 2
    }
  }, "#", i.n, " opened ", i.a, " ago")), /*#__PURE__*/React.createElement(Badge, {
    tone: i.l === 'bug' ? 'danger' : i.l === 'design' ? 'accent' : 'neutral'
  }, i.l))))), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, {
    style: {
      marginBottom: 12
    }
  }, "About"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, ['react', 'design-tokens', 'ui', 'themes'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, {
    style: {
      marginBottom: 12
    }
  }, "Languages"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 62,
      background: 'var(--chart-1)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 24,
      background: 'var(--chart-2)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 14,
      background: 'var(--chart-3)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Legend, {
    items: ['TypeScript 62%', 'CSS 24%', 'MDX 14%']
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, {
    style: {
      marginBottom: 12
    }
  }, "Commit activity \xB7 26 weeks"), /*#__PURE__*/React.createElement(HeatGrid, {
    weeks: 18,
    cell: 10
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, {
    style: {
      marginBottom: 12
    }
  }, "Latest release"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "tag",
    size: 16
  }), /*#__PURE__*/React.createElement("b", null, "v2.4.0"), /*#__PURE__*/React.createElement(Badge, {
    tone: "solid"
  }, "Latest"))))), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: m ? 12 : 24,
      left: m ? 12 : 'auto',
      bottom: m ? 12 : 24,
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Copied"
  }, "git@kerasi.studio:hanami-ui.git")));
}
window.GitScreen = GitScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/kerasi/Git.jsx", error: String((e && e.message) || e) }); }

// ui_kits/kerasi/Home.jsx
try { (() => {
const homeProjects = [{
  n: '01',
  t: 'Hanami UI',
  d: 'A component library for quiet, seasonal interfaces.',
  tag: 'Open source'
}, {
  n: '02',
  t: 'Bark',
  d: 'Static site engine. Markdown in, sharp pages out.',
  tag: 'Tooling'
}, {
  n: '03',
  t: 'Lantern',
  d: 'Self-hosted analytics with no cookies and no noise.',
  tag: 'Product'
}];
function HomeScreen({
  family,
  go
}) {
  const bp = useBp();
  const m = bp === 'mobile';
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      ...kitWrap,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))',
      gap: 48,
      alignItems: 'center',
      paddingTop: m ? 40 : 72,
      paddingBottom: m ? 56 : 88
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, {
    style: {
      marginBottom: 24
    }
  }, "\u039A\u03B5\u03C1\u03AC\u03C3\u03B9 \u2014 cherry \xB7 Studio & lab"), /*#__PURE__*/React.createElement(Display, {
    size: "clamp(64px,10vw,148px)"
  }, "Grown slowly.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-ink)'
    }
  }, "Cut sharp.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: m ? 17 : 19,
      lineHeight: 1.6,
      color: 'var(--fg-2)',
      maxWidth: 520,
      margin: '32px 0 36px',
      textWrap: 'pretty'
    }
  }, "Kerasi is a home for long-lived projects: open-source tools, writing, experiments and the data behind them."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      flexDirection: m ? 'column' : 'row'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    full: m,
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => go('git')
  }, "Browse projects"), /*#__PURE__*/React.createElement(Button, {
    full: m,
    size: "lg",
    variant: "secondary",
    onClick: () => go('blog')
  }, "Read the journal"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    size: m ? 240 : 420,
    style: {
      maxWidth: '100%',
      height: 'auto'
    }
  }))), /*#__PURE__*/React.createElement("section", {
    style: kitWrap
  }, /*#__PURE__*/React.createElement(SectionHead, {
    index: "01",
    label: "Projects",
    title: "In the orchard",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "quiet",
      iconRight: "arrow-up-right",
      onClick: () => go('git')
    }, "All repositories")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
      gap: 16
    }
  }, homeProjects.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.n,
    variant: "cut",
    padding: 28,
    eyebrow: p.n + ' — ' + p.tag,
    title: p.t,
    onClick: () => go('git'),
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "quiet",
      size: "sm",
      iconRight: "arrow-right"
    }, "Open")
  }, p.d)))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...kitWrap,
      marginTop: m ? 64 : 96
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    index: "02",
    label: "Seasons",
    title: "Three palettes, one tree"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)'
    }
  }, [['sakura', 'Sakura', '#AC2937'], ['wine', 'Wine', '#773344'], ['rust', 'Rust', '#B7472A']].map(([t, n, hex]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    "data-theme": t,
    style: {
      background: 'var(--accent)',
      color: 'var(--accent-fg)',
      padding: '28px 24px',
      minHeight: m ? 150 : bp === 'tablet' ? 200 : 260,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Overline, {
    style: {
      color: 'inherit',
      opacity: .75
    }
  }, hex), /*#__PURE__*/React.createElement(Display, {
    size: 72,
    as: "div"
  }, n))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...kitWrap,
      marginTop: 96
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    index: "03",
    label: "Journal",
    title: "Latest notes",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "quiet",
      iconRight: "arrow-right",
      onClick: () => go('blog')
    }, "All posts")
  }), /*#__PURE__*/React.createElement("div", null, window.blogPosts.slice(0, 3).map(p => /*#__PURE__*/React.createElement("div", {
    key: p.slug,
    onClick: () => go('blog', p.slug),
    style: {
      display: 'grid',
      gridTemplateColumns: m ? 'minmax(0,1fr) auto' : '120px minmax(0,1fr) auto',
      gap: m ? '8px 16px' : 24,
      alignItems: 'baseline',
      padding: '22px 0',
      borderBottom: '1px solid var(--line)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Overline, {
    style: m ? {
      gridColumn: '1 / -1'
    } : null
  }, p.date), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: m ? 22 : 28,
      fontWeight: 500,
      textTransform: 'uppercase',
      lineHeight: 1.05
    }
  }, p.title), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, p.tag))))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/kerasi/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/kerasi/Kit.jsx
try { (() => {
const DS = window.KerasiDesignSystem_6c0512 || {};
const {
  Button,
  IconButton,
  Icon,
  Badge,
  Tag,
  Card,
  Logo,
  Mark,
  Tabs,
  Input,
  Select,
  Checkbox,
  Radio,
  Switch,
  Dialog,
  Toast,
  Tooltip,
  CodeBlock
} = DS;
const kitWrap = {
  maxWidth: 1240,
  margin: '0 auto',
  padding: '0 clamp(16px,4vw,32px)'
};
function useBp() {
  const get = () => {
    const w = window.innerWidth;
    return w < 640 ? 'mobile' : w < 1024 ? 'tablet' : 'desktop';
  };
  const [bp, setBp] = React.useState(get);
  React.useEffect(() => {
    const on = () => setBp(get());
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);
  return bp;
}
const fluid = s => typeof s === 'number' && s > 32 ? 'clamp(' + Math.round(Math.max(28, s * .42)) + 'px,' + (s / 14.4).toFixed(2) + 'vw,' + s + 'px)' : s;
function Overline({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--fg-3)',
      ...style
    }
  }, children);
}
function Display({
  size = 88,
  children,
  style,
  as = 'h1'
}) {
  const T = as;
  return /*#__PURE__*/React.createElement(T, {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: fluid(size),
      lineHeight: .9,
      letterSpacing: '-.01em',
      textTransform: 'uppercase',
      margin: 0,
      textWrap: 'balance',
      ...style
    }
  }, children);
}
function SectionHead({
  index,
  label,
  title,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '12px 24px',
      borderTop: '2px solid var(--fg-1)',
      paddingTop: 16,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, {
    style: {
      marginBottom: 10
    }
  }, index, " \u2014 ", label), /*#__PURE__*/React.createElement(Display, {
    size: 44,
    as: "h2"
  }, title)), action);
}
function Placeholder({
  label,
  ratio = '4/3',
  tone = 'var(--bg-sunken)',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      background: 'repeating-linear-gradient(135deg,' + tone + ' 0 14px,color-mix(in srgb,' + tone + ' 85%,var(--fg-1)) 14px 15px)',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 12,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--fg-2)',
      background: 'var(--bg)',
      padding: '3px 6px'
    }
  }, label));
}
function Footer({
  family
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--line)',
      marginTop: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...kitWrap,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '32px 32px',
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 28
  }), /*#__PURE__*/React.createElement(Overline, null, "\xA9 2026 Kerasi \xB7 Grown slowly, cut sharp"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "github",
    label: "GitHub"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "rss",
    label: "RSS"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "mail",
    label: "Mail"
  }))));
}
Object.assign(window, {
  useBp,
  fluid,
  DS,
  Button,
  IconButton,
  Icon,
  Badge,
  Tag,
  Card,
  Logo,
  Mark,
  Tabs,
  Input,
  Select,
  Checkbox,
  Radio,
  Switch,
  Dialog,
  Toast,
  Tooltip,
  CodeBlock,
  kitWrap,
  Overline,
  Display,
  SectionHead,
  Placeholder,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/kerasi/Kit.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CodeBlock = __ds_scope.CodeBlock;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.SUBPROJECT_COLORS = __ds_scope.SUBPROJECT_COLORS;

__ds_ns.Favicon = __ds_scope.Favicon;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Mark = __ds_scope.Mark;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
