import React from 'react';
import { Icon } from '../core/Icon.jsx';
const wrap={display:'flex',flexDirection:'column',gap:6};
const lab={fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'.12em',textTransform:'uppercase',color:'var(--fg-2)'};
const hintS=(err)=>({fontSize:12,color:err?'var(--status-danger)':'var(--fg-3)'});
export function Input({label,hint,error,icon,mono,disabled,value,defaultValue,placeholder,type='text',onChange,style,...rest}){
  const [f,setF]=React.useState(false);
  return <label style={{...wrap,...style}}>
    {label&&<span style={lab}>{label}</span>}
    <span style={{display:'flex',alignItems:'center',gap:8,height:42,padding:'0 12px',background:'var(--bg-raised)',border:'1px solid '+(error?'var(--status-danger)':f?'var(--fg-1)':'var(--line-strong)'),borderRadius:'var(--radius-1)',opacity:disabled?.5:1,boxShadow:f?'inset 0 -2px 0 var(--accent)':'none',transition:'border-color var(--dur-1) var(--ease-out)'}}>
      {icon&&<Icon name={icon} size={16} color="var(--fg-3)"/>}
      <input type={type} value={value} defaultValue={defaultValue} placeholder={placeholder} disabled={disabled} onChange={onChange} onFocus={()=>setF(true)} onBlur={()=>setF(false)} {...rest}
        style={{flex:1,minWidth:0,border:'none',outline:'none',background:'transparent',color:'var(--fg-1)',fontFamily:mono?'var(--font-mono)':'var(--font-body)',fontSize:mono?14:15}}/>
    </span>
    {(hint||error)&&<span style={hintS(error)}>{error||hint}</span>}
  </label>;
}
