/** Underline tabs — Oswald uppercase labels, 2px accent bar on the active tab. */
export interface TabItem{id:string;label:string;count?:number}
export interface TabsProps{
  items?:(TabItem|string)[];
  value?:string;
  defaultValue?:string;
  onChange?:(id:string)=>void;
  size?:'md'|'lg';
  style?:React.CSSProperties;
}
export declare function Tabs(props:TabsProps):JSX.Element;
