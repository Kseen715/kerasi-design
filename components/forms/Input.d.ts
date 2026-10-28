/** Text field with mono uppercase label. Focus draws an accent underline inside the box. */
export interface InputProps{
  label?:string;
  hint?:string;
  /** Error message; turns the border danger red */
  error?:string;
  /** Lucide icon name shown at the start */
  icon?:string;
  mono?:boolean;
  disabled?:boolean;
  value?:string;
  defaultValue?:string;
  placeholder?:string;
  type?:string;
  onChange?:(e:any)=>void;
  style?:React.CSSProperties;
}
export declare function Input(props:InputProps):JSX.Element;
