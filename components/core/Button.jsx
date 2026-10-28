import React from 'react';
import { Icon } from './Icon.jsx';
const SIZES={sm:{h:32,px:14,fs:13,ic:14},md:{h:42,px:20,fs:15,ic:16},lg:{h:54,px:28,fs:18,ic:18}};
export function Button({variant='primary',size='md',icon,iconRight,disabled,full,children,style,onClick,type='button',...rest}){
  const [h,setH]=React.useState(false);
  const s=SIZES[size]||SIZES.md;
  const v={
    primary:{background:h?'var(--accent-hover)':'var(--accent)',color:'var(--accent-fg)',border:'none',clipPath:'var(--clip-chamfer)'},
    secondary:{background:h?'var(--fg-1)':'transparent',color:h?'var(--bg)':'var(--fg-1)',border:'1px solid var(--fg-1)'},
    ghost:{background:h?'var(--bg-sunken)':'transparent',color:'var(--fg-1)',border:'1px solid transparent'},
    quiet:{background:'transparent',color:h?'var(--fg-1)':'var(--accent-ink)',border:'none',padding:0,height:'auto'},
  }[variant];
  return <button type={type} disabled={disabled} onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} {...rest}
    style={{display:full?'flex':'inline-flex',width:full?'100%':undefined,alignItems:'center',justifyContent:'center',gap:8,height:s.h,padding:'0 '+s.px+'px',
      fontFamily:'var(--font-display)',fontWeight:500,fontSize:s.fs,letterSpacing:'.06em',textTransform:'uppercase',lineHeight:1,
      cursor:disabled?'not-allowed':'pointer',opacity:disabled?.4:1,borderRadius:0,transition:'background var(--dur-1) var(--ease-out),color var(--dur-1) var(--ease-out)',...v,...style}}>
    {icon&&<Icon name={icon} size={s.ic}/>}{children}{iconRight&&<Icon name={iconRight} size={s.ic} style={{transform:h?'translateX(3px)':'none',transition:'transform var(--dur-2) var(--ease-out)'}}/>}
  </button>;
}
