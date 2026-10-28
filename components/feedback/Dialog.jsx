import React from 'react';
import { IconButton } from '../core/IconButton.jsx';
export function Dialog({open,title,eyebrow,children,actions,onClose,width=480,inline}){
  if(!open)return null;
  const panel=<div role="dialog" aria-modal="true" onClick={e=>e.stopPropagation()} style={{width,maxWidth:'calc(100vw - 32px)',background:'var(--bg-raised)',color:'var(--fg-1)',boxShadow:'var(--shadow-pop)','--chamfer':'var(--chamfer-lg)',clipPath:'var(--clip-chamfer)',padding:28,display:'flex',flexDirection:'column',gap:16}}>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:16}}>
      <div>{eyebrow&&<div style={{fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'.14em',textTransform:'uppercase',color:'var(--fg-3)',marginBottom:6}}>{eyebrow}</div>}
      <div style={{fontFamily:'var(--font-display)',fontWeight:500,fontSize:28,lineHeight:1.05,textTransform:'uppercase'}}>{title}</div></div>
      {onClose&&<IconButton icon="x" label="Close" size={32} onClick={onClose}/>}
    </div>
    <div style={{fontSize:15,lineHeight:1.6,color:'var(--fg-2)'}}>{children}</div>
    {actions&&<div style={{display:'flex',justifyContent:'flex-end',gap:10,paddingTop:4}}>{actions}</div>}
  </div>;
  if(inline)return panel;
  return <div onClick={onClose} style={{position:'fixed',inset:0,zIndex:100,display:'flex',alignItems:'center',justifyContent:'center',background:'color-mix(in srgb, var(--fg-1) 35%, transparent)',backdropFilter:'blur(6px)'}}>{panel}</div>;
}
