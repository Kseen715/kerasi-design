/** Hover label in ink with mono text. */
export interface TooltipProps{
  label:React.ReactNode;
  children:React.ReactNode;
  placement?:'top'|'bottom';
  /** Horizontal anchor relative to the trigger — use start/end near container edges */
  align?:'center'|'start'|'end';
  /** Force open (docs) */
  open?:boolean;
}
export declare function Tooltip(props:TooltipProps):JSX.Element;
