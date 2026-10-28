/** Filter chip / topic tag. Square corners, 1px outline; selected inverts to ink. */
export interface TagProps{
  selected?:boolean;
  onClick?:()=>void;
  onRemove?:()=>void;
  children?:React.ReactNode;
  style?:React.CSSProperties;
}
export declare function Tag(props:TagProps):JSX.Element;
