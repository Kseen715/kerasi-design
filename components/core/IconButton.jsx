import React from 'react';
import { Icon } from './Icon.jsx';
export function IconButton({icon,label,variant='ghost',size=38,active,onClick,style,...rest}){
  const [h,setH]=React.useState(false);
  const v={
    ghost:{background:active||h?'var(--bg-sunken)':'transparent',color:'var(--fg-1)',border:'1px solid transparent'},
    outline:{background:h?'var(--fg-1)':'transparent',color:h?'var(--bg)':'var(--fg-1)',border:'1px solid var(--line-strong)'},
    solid:{background:h?'var(--accent-hover)':'var(--accent)',color:'var(--accent-fg)',border:'none',clipPath:'var(--clip-chamfer)'},
  }[variant];
  return <button type="button" aria-label={label} title={label} onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} {...rest}
    style={{width:size,height:size,display:'inline-flex',alignItems:'center',justifyContent:'center',padding:0,cursor:'pointer',borderRadius:0,transition:'background var(--dur-1) var(--ease-out)',...v,...style}}>
    <Icon name={icon} size={Math.round(size*0.45)}/></button>;
}
