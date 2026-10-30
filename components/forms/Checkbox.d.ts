/** Square checkbox, reachable by Tab and toggled with Space; controlled (checked) or uncontrolled (defaultChecked). onChange receives the new boolean. */
export interface CheckboxProps{
  checked?:boolean;
  defaultChecked?:boolean;
  onChange?:(checked:boolean)=>void;
  label?:React.ReactNode;
  disabled?:boolean;
  style?:React.CSSProperties;
}
export declare function Checkbox(props:CheckboxProps):JSX.Element;
