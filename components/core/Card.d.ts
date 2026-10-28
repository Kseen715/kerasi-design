/**
 * Content container. Default is a flat hairline box; "cut" adds the large chamfer.
 */
export interface CardProps{
  variant?:'plain'|'raised'|'cut'|'rule'|'inverse';
  eyebrow?:React.ReactNode;
  title?:React.ReactNode;
  children?:React.ReactNode;
  footer?:React.ReactNode;
  padding?:number;
  /** Makes the card interactive: lifts 2px with pop shadow on hover */
  onClick?:()=>void;
  style?:React.CSSProperties;
}
export declare function Card(props:CardProps):JSX.Element;
