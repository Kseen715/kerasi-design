import React from 'react';
export function Radio({options=[],value,defaultValue,onChange,name,direction='column',style}){
  const [inner,setInner]=React.useState(defaultValue);
  const cur=value!==undefined?value:inner;
  return <div role="radiogroup" style={{display:'flex',flexDirection:direction,gap:direction==='row'?20:10,...style}}>
    {options.map(o=>{const v=typeof o==='string'?o:o.value,l=typeof o==='string'?o:o.label,on=cur===v;
      return <label key={v} onClick={()=>{setInner(v);onChange&&onChange(v);}} style={{display:'inline-flex',alignItems:'center',gap:10,cursor:'pointer',fontSize:15,color:'var(--fg-1)'}}>
        <span role="radio" aria-checked={on} style={{width:18,height:18,borderRadius:'50%',border:'1px solid '+(on?'var(--accent)':'var(--line-strong)'),background:'var(--bg-raised)',display:'inline-flex',alignItems:'center',justifyContent:'center'}}>
          <span style={{width:10,height:10,borderRadius:'50%',background:'var(--accent)',transform:on?'scale(1)':'scale(0)',transition:'transform var(--dur-2) var(--ease-out)'}}/></span>{l}</label>;})}
  </div>;
}
