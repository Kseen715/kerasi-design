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
}
export declare function Dialog(props:DialogProps):JSX.Element|null;
