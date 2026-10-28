import React from 'react';
function Tab({on,size,onClick,children}){
  const [h,setH]=React.useState(false);
  return <button role="tab" aria-selected={on} onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{position:'relative',display:'inline-flex',alignItems:'center',justifyContent:'center',gap:8,minHeight:size==='lg'?52:44,minWidth:size==='lg'?72:56,padding:size==='lg'?'0 20px':'0 16px',margin:0,background:h&&!on?'var(--bg-sunken)':'transparent',border:'none',outline:'none',cursor:'pointer',whiteSpace:'nowrap',flex:'none',
      fontFamily:'var(--font-display)',fontWeight:500,fontSize:size==='lg'?18:15,letterSpacing:'.05em',textTransform:'uppercase',color:on?'var(--fg-1)':h?'var(--fg-2)':'var(--fg-3)',transition:'color var(--dur-1) var(--ease-out),background var(--dur-1) var(--ease-out)'}}>
    {children}<span aria-hidden="true" style={{position:'absolute',left:0,right:0,bottom:0,height:2,background:on?'var(--accent)':'transparent',pointerEvents:'none'}}/></button>;
}
export function Tabs({items=[],value,defaultValue,onChange,size='md',style}){
  const [inner,setInner]=React.useState(defaultValue??(items[0]&&(items[0].id??items[0])));
  const cur=value!==undefined?value:inner;
  return <div role="tablist" style={{position:'relative',display:'flex',gap:2,borderBottom:'1px solid var(--line)',overflowX:'auto',overflowY:'hidden',scrollbarWidth:'none',...style}}>
    {items.map(it=>{const id=it.id??it,lbl=it.label??it,on=id===cur;
      return <Tab key={id} on={on} size={size} onClick={()=>{setInner(id);onChange&&onChange(id);}}>{lbl}{it.count!=null&&<span style={{fontFamily:'var(--font-mono)',fontSize:11,padding:'2px 6px',background:'var(--bg-sunken)',color:'var(--fg-2)',letterSpacing:0,pointerEvents:'none'}}>{it.count}</span>}</Tab>;})}
  </div>;
}
