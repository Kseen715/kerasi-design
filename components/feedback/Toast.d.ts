/** Inverse (ink) notification with a round tone marker. Position it yourself (usually bottom-right). */
export interface ToastProps{
  tone?:'info'|'success'|'warning'|'danger'|'accent';
  title?:React.ReactNode;
  children?:React.ReactNode;
  action?:React.ReactNode;
  onClose?:()=>void;
  style?:React.CSSProperties;
}
export declare function Toast(props:ToastProps):JSX.Element;
