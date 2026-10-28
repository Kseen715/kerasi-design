/** Native select styled to match Input. */
export interface SelectProps{
  label?:string;
  hint?:string;
  options?:(string|{value:string;label:string})[];
  value?:string;
  defaultValue?:string;
  onChange?:(e:any)=>void;
  disabled?:boolean;
  style?:React.CSSProperties;
}
export declare function Select(props:SelectProps):JSX.Element;
