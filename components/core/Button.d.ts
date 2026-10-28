/**
 * Primary action control. Primary uses the chamfer cut — the brand's "pointy" edge.
 * @startingPoint section="Core" subtitle="Chamfered primary, outline, ghost and quiet buttons" viewport="700x300"
 */
export interface ButtonProps{
  variant?:'primary'|'secondary'|'ghost'|'quiet';
  size?:'sm'|'md'|'lg';
  /** Lucide icon name before the label */
  icon?:string;
  /** Lucide icon name after the label (nudges right on hover) */
  iconRight?:string;
  disabled?:boolean;
  full?:boolean;
  type?:'button'|'submit'|'reset';
  onClick?:(e:any)=>void;
  children?:React.ReactNode;
  style?:React.CSSProperties;
}
export declare function Button(props:ButtonProps):JSX.Element;
