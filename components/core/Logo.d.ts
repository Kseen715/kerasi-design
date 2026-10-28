/** Kerasi mark + wordmark. The mark is drawn inline so it needs no asset path. */
export interface LogoProps{
  /** Colour set. Default "auto" reads the nearest [data-theme] ancestor (live) and picks the matching on-dark palette for *-dark themes. */
  theme?:'auto'|'sakura'|'wine'|'rust'|'sakura-dark'|'wine-dark'|'rust-dark';
  /** Force the on-dark palette (e.g. a dark hero inside a light theme) */
  dark?:boolean;
  /** Mark height in px; wordmark scales with it */
  size?:number;
  wordmark?:boolean;
  /** true = currentColor single-colour mark, or pass a colour string */
  mono?:boolean|string;
  tagline?:string;
  style?:React.CSSProperties;
}
export declare function Logo(props:LogoProps):JSX.Element;
export interface MarkProps{theme?:'auto'|'sakura'|'wine'|'rust'|'sakura-dark'|'wine-dark'|'rust-dark';dark?:boolean;size?:number;mono?:boolean|string;style?:React.CSSProperties;}
export declare function Mark(props:MarkProps):JSX.Element;
