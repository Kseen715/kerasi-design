/** Kerasi favicon / app glyph. "main" = simplified mark on a chamfered tile; "sub" = subproject tile with the blossom crown and a 1–2 letter label. */
export interface FaviconProps{
  variant?:'main'|'sub';
  /** Subproject label, 1–2 characters (sub only) */
  label?:string;
  /** Subproject tile colour key, or [background, foreground] hex pair (sub only) */
  color?:'crimson'|'bark'|'wine'|'gold'|'night'|'rust'|'graphite'|'chrome'|[string,string];
  /** Main only: paper tile, dark tile, or none (transparent) */
  ground?:'paper'|'dark'|'none';
  size?:number;
  style?:React.CSSProperties;
}
export declare function Favicon(props:FaviconProps):JSX.Element;
export declare const SUBPROJECT_COLORS:Record<string,[string,string]>;
