/** Square icon-only button. Always pass a label for accessibility. */
export interface IconButtonProps{
  icon:string;
  label:string;
  variant?:'ghost'|'outline'|'solid';
  size?:number;
  active?:boolean;
  onClick?:(e:any)=>void;
  style?:React.CSSProperties;
}
export declare function IconButton(props:IconButtonProps):JSX.Element;
