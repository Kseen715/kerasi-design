import React from 'react';
// A real <button>, so Tab reaches it, Space toggles it and the global :focus-visible ring shows.
export function Switch({checked,defaultChecked,onChange,label,disabled,style}){
  const [inner,setInner]=React.useState(!!defaultChecked);
  const on=checked!==undefined?checked:inner;
  const t=()=>{setInner(!on);onChange&&onChange(!on);};
  return <button type="button" role="switch" aria-checked={on} disabled={disabled} onClick={t} style={{display:'inline-flex',alignItems:'center',gap:10,margin:0,padding:0,background:'none',border:'none',font:'inherit',textAlign:'left',cursor:disabled?'not-allowed':'pointer',opacity:disabled?.45:1,fontSize:15,color:'var(--fg-1)',...style}}>
    <span aria-hidden="true" style={{width:38,height:20,flex:'none',position:'relative',background:on?'var(--accent)':'var(--bg-sunken)',border:'1px solid '+(on?'var(--accent)':'var(--line-strong)'),transition:'background var(--dur-2) var(--ease-out)'}}>
      <span style={{position:'absolute',top:2,left:on?20:2,width:14,height:14,background:on?'var(--accent-fg)':'var(--fg-2)',transition:'left var(--dur-2) var(--ease-out)'}}/></span>{label}</button>;
}
