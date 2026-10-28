/**
 * Syntax-highlighted code block. Colours come from --syn-* tokens, so it follows the active data-theme (or the theme prop).
 * Languages: ts/js/jsx, python, rust, go, sql, shell, css, html, json, yaml, diff, text.
 */
export interface CodeBlockProps{
  code:string;
  language?:'ts'|'js'|'tsx'|'jsx'|'typescript'|'javascript'|'python'|'py'|'rust'|'rs'|'go'|'sql'|'bash'|'sh'|'shell'|'css'|'html'|'json'|'yaml'|'diff'|'text';
  /** File name shown in the header */
  title?:string;
  lineNumbers?:boolean;
  /** 1-based line numbers to emphasise */
  highlightLines?:number[];
  copy?:boolean;
  /** Force a theme for this block only (e.g. dark code on a light page) */
  theme?:'sakura'|'sakura-dark'|'wine'|'wine-dark'|'rust'|'rust-dark';
  maxHeight?:number|string;
  wrap?:boolean;
  style?:React.CSSProperties;
}
export declare function CodeBlock(props:CodeBlockProps):JSX.Element;
