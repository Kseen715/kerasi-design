/** Radio group. The filled dot echoes the sun in the mark. One Tab stop; arrow keys move the choice. */
export interface RadioProps{
  options?:(string|{value:string;label:string})[];
  value?:string;
  defaultValue?:string;
  onChange?:(value:string)=>void;
  name?:string;
  direction?:'row'|'column';
  style?:React.CSSProperties;
}
export declare function Radio(props:RadioProps):JSX.Element;
