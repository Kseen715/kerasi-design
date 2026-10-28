/** Hover label in ink with mono text. */
export interface TooltipProps{
  label:React.ReactNode;
  children:React.ReactNode;
  placement?:'top'|'bottom';
  /** Force open (docs) */
  open?:boolean;
}
export declare function Tooltip(props:TooltipProps):JSX.Element;
