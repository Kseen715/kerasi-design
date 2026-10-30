import React from 'react';
import { Icon } from '../core/Icon.jsx';
// A real <button>, so Tab reaches it, Space toggles it and the global :focus-visible ring shows.
export function Checkbox({checked,defaultChecked,onChange,label,disabled,style}){
  const [inner,setInner]=React.useState(!!defaultChecked);
  const on=checked!==undefined?checked:inner;
  const toggle=()=>{setInner(!on);onChange&&onChange(!on);};
  return <button type="button" role="checkbox" aria-checked={on} disabled={disabled} onClick={toggle} style={{display:'inline-flex',alignItems:'center',gap:10,margin:0,padding:0,background:'none',border:'none',font:'inherit',textAlign:'left',cursor:disabled?'not-allowed':'pointer',opacity:disabled?.45:1,fontSize:15,color:'var(--fg-1)',...style}}>
    <span aria-hidden="true" style={{width:18,height:18,flex:'none',display:'inline-flex',alignItems:'center',justifyContent:'center',background:on?'var(--accent)':'var(--bg-raised)',border:'1px solid '+(on?'var(--accent)':'var(--line-strong)'),color:'var(--accent-fg)',transition:'background var(--dur-1) var(--ease-out)'}}>
      {on&&<Icon name="check" size={13}/>}</span>{label}</button>;
}
