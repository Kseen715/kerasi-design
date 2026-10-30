import React from 'react';
const STEP={ArrowRight:1,ArrowDown:1,ArrowLeft:-1,ArrowUp:-1};
// Keyboard works like a native radio group: Tab stops once, on the checked option (or the first),
// and the arrow keys move both the choice and the focus, wrapping at the ends.
export function Radio({options=[],value,defaultValue,onChange,name,direction='column',style}){
  const [inner,setInner]=React.useState(defaultValue);
  const cur=value!==undefined?value:inner;
  const group=React.useRef(null);
  const vals=options.map(o=>typeof o==='string'?o:o.value);
  const pick=v=>{setInner(v);onChange&&onChange(v);};
  const key=(e,i)=>{const s=STEP[e.key];if(!s)return;e.preventDefault();
    const n=(i+s+vals.length)%vals.length;pick(vals[n]);group.current.querySelectorAll('[role="radio"]')[n].focus();};
  return <div ref={group} role="radiogroup" style={{display:'flex',flexDirection:direction,gap:direction==='row'?20:10,...style}}>
    {options.map((o,i)=>{const v=vals[i],l=typeof o==='string'?o:o.label,on=cur===v,stop=on||(i===0&&!vals.includes(cur));
      return <button key={v} type="button" role="radio" aria-checked={on} tabIndex={stop?0:-1} onClick={()=>pick(v)} onKeyDown={e=>key(e,i)} style={{display:'inline-flex',alignItems:'center',gap:10,margin:0,padding:0,background:'none',border:'none',font:'inherit',textAlign:'left',cursor:'pointer',fontSize:15,color:'var(--fg-1)'}}>
        <span aria-hidden="true" style={{width:18,height:18,flex:'none',borderRadius:'50%',border:'1px solid '+(on?'var(--accent)':'var(--line-strong)'),background:'var(--bg-raised)',display:'inline-flex',alignItems:'center',justifyContent:'center'}}>
          <span style={{width:10,height:10,borderRadius:'50%',background:'var(--accent)',transform:on?'scale(1)':'scale(0)',transition:'transform var(--dur-2) var(--ease-out)'}}/></span>{l}</button>;})}
  </div>;
}
