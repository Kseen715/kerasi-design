/** Rectangular on/off switch with a square knob, reachable by Tab and toggled with Space. onChange receives the new boolean. */
export interface SwitchProps{
  checked?:boolean;
  defaultChecked?:boolean;
  onChange?:(checked:boolean)=>void;
  label?:React.ReactNode;
  disabled?:boolean;
  style?:React.CSSProperties;
}
export declare function Switch(props:SwitchProps):JSX.Element;
