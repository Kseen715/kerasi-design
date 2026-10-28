import React from 'react';
import { Icon } from '../core/Icon.jsx';
const T={info:['info','var(--status-info)'],success:['check','var(--status-success)'],warning:['triangle-alert','var(--status-warning)'],danger:['octagon-x','var(--status-danger)'],accent:['sparkle','var(--accent)']};
export function Toast({tone='info',title,children,onClose,action,style}){
  const [ic,col]=T[tone]||T.info;
  return <div role="status" style={{display:'flex',gap:12,alignItems:'flex-start',width:360,maxWidth:'100%',padding:'14px 14px 14px 16px',background:'var(--fg-1)',color:'var(--bg)',boxShadow:'var(--shadow-pop)',...style}}>
    <span style={{width:24,height:24,flex:'none',display:'inline-flex',alignItems:'center',justifyContent:'center',background:col,color:'#fff',borderRadius:'50%'}}><Icon name={ic} size={14}/></span>
    <div style={{flex:1,minWidth:0}}>
      {title&&<div style={{fontWeight:600,fontSize:14,marginBottom:2}}>{title}</div>}
      {children&&<div style={{fontSize:13,opacity:.75,lineHeight:1.5}}>{children}</div>}
      {action&&<div style={{marginTop:8}}>{action}</div>}
    </div>
    {onClose&&<button aria-label="Dismiss" onClick={onClose} style={{background:'none',border:'none',color:'inherit',opacity:.6,cursor:'pointer',padding:2,display:'inline-flex'}}><Icon name="x" size={16}/></button>}
  </div>;
}
