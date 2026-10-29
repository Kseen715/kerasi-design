/** Modal dialog with chamfered panel over a blurred scrim. */
export interface DialogProps{
  open:boolean;
  title:React.ReactNode;
  eyebrow?:React.ReactNode;
  children?:React.ReactNode;
  /** Buttons, right-aligned */
  actions?:React.ReactNode;
  onClose?:()=>void;
  width?:number;
  /** Render the panel in place without the fixed scrim (for docs/cards) */
  inline?:boolean;
  /** Bottom-sheet layout. Default: automatic below 640px viewport width (not for inline). */
  sheet?:boolean;
}
export declare function Dialog(props:DialogProps):JSX.Element|null;
