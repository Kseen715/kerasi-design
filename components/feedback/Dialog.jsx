import React from 'react';
import { IconButton } from '../core/IconButton.jsx';
export function Dialog({open,title,eyebrow,children,actions,onClose,width=480,inline,sheet}){
  const [narrow,setNarrow]=React.useState(()=>typeof window!=='undefined'&&window.innerWidth<640);
  React.useEffect(()=>{const on=()=>setNarrow(window.innerWidth<640);window.addEventListener('resize',on);return()=>window.removeEventListener('resize',on);},[]);
  if(!open)return null;
  const asSheet=sheet??(narrow&&!inline);
  const panel=<div role="dialog" aria-modal="true" onClick={e=>e.stopPropagation()} style={{width:asSheet?'100%':width,maxWidth:asSheet?'100%':'calc(100vw - 32px)',maxHeight:asSheet?'88vh':undefined,overflowY:asSheet?'auto':undefined,background:'var(--bg-raised)',color:'var(--fg-1)',boxShadow:'var(--shadow-pop)','--chamfer':'var(--chamfer-lg)',clipPath:'var(--clip-chamfer)',padding:asSheet?'24px 16px calc(16px + env(safe-area-inset-bottom))':28,display:'flex',flexDirection:'column',gap:16}}>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:16}}>
      <div>{eyebrow&&<div style={{fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'.14em',textTransform:'uppercase',color:'var(--fg-3)',marginBottom:6}}>{eyebrow}</div>}
      <div style={{fontFamily:'var(--font-display)',fontWeight:500,fontSize:28,lineHeight:1.05,textTransform:'uppercase'}}>{title}</div></div>
      {onClose&&<IconButton icon="x" label="Close" size={32} onClick={onClose}/>}
    </div>
    <div style={{fontSize:15,lineHeight:1.6,color:'var(--fg-2)'}}>{children}</div>
    {actions&&<div style={{display:'flex',justifyContent:'flex-end',flexDirection:asSheet?'column-reverse':'row',gap:10,paddingTop:4}}>{actions}</div>}
  </div>;
  if(inline)return panel;
  return <div onClick={onClose} style={{position:'fixed',inset:0,zIndex:100,display:'flex',alignItems:asSheet?'flex-end':'center',justifyContent:'center',background:'color-mix(in srgb, var(--fg-1) 35%, transparent)',backdropFilter:'blur(6px)'}}>{panel}</div>;
}
