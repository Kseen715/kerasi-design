import React from 'react';
import { Icon } from '../core/Icon.jsx';
const wrap={display:'flex',flexDirection:'column',gap:6};
const lab={fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'.12em',textTransform:'uppercase',color:'var(--fg-2)'};
const hintS=(err)=>({fontSize:12,color:err?'var(--status-danger)':'var(--fg-3)'});
export function Select({label,hint,options=[],value,defaultValue,onChange,disabled,style}){
  return <label style={{...wrap,...style}}>
    {label&&<span style={lab}>{label}</span>}
    <span style={{position:'relative',display:'flex'}}>
      <select value={value} defaultValue={defaultValue} onChange={onChange} disabled={disabled}
        style={{appearance:'none',WebkitAppearance:'none',width:'100%',height:42,padding:'0 38px 0 12px',background:'var(--bg-raised)',color:'var(--fg-1)',border:'1px solid var(--line-strong)',borderRadius:'var(--radius-1)',fontFamily:'var(--font-body)',fontSize:15,cursor:'pointer',opacity:disabled?.5:1}}>
        {options.map(o=>typeof o==='string'?<option key={o} value={o}>{o}</option>:<option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      <Icon name="chevron-down" size={16} color="var(--fg-2)" style={{position:'absolute',right:12,top:13,pointerEvents:'none'}}/>
    </span>
    {hint&&<span style={hintS()}>{hint}</span>}
  </label>;
}
