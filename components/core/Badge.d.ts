/** Small mono uppercase status label. */
export interface BadgeProps{
  tone?:'neutral'|'accent'|'solid'|'success'|'warning'|'danger'|'info';
  /** Leading round dot (the "sun") */
  dot?:boolean;
  children?:React.ReactNode;
  style?:React.CSSProperties;
}
export declare function Badge(props:BadgeProps):JSX.Element;
