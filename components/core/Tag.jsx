import React from 'react';
import { Icon } from './Icon.jsx';
export function Tag({selected,onClick,onRemove,children,style}){
  const [h,setH]=React.useState(false);
  const Tg=onClick?'button':'span';
  return <Tg type={onClick?'button':undefined} aria-pressed={onClick?!!selected:undefined} onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{display:'inline-flex',alignItems:'center',gap:6,minHeight:onClick?36:30,minWidth:onClick?56:undefined,justifyContent:'center',margin:0,font:'inherit',padding:onRemove?'0 8px 0 16px':onClick?'0 16px':'0 12px',cursor:onClick?'pointer':'default',
      background:selected?'var(--fg-1)':h&&onClick?'var(--bg-sunken)':'transparent',color:selected?'var(--bg)':'var(--fg-1)',border:'1px solid '+(selected?'var(--fg-1)':'var(--line-strong)'),
      fontSize:13,fontWeight:500,transition:'background var(--dur-1) var(--ease-out)',...style}}>
    <span style={{pointerEvents:'none',display:'inline-flex',alignItems:'center',gap:6}}>{children}</span>{onRemove&&<span role="button" aria-label="Remove" onClick={e=>{e.stopPropagation();onRemove();}} style={{display:'inline-flex',cursor:'pointer',opacity:.7}}><Icon name="x" size={14}/></span>}</Tg>;
}
