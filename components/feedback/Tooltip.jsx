import React from 'react';
export function Tooltip({label,children,placement='top',align='center',open}){
  const [h,setH]=React.useState(false);
  const show=open??h;
  const bottom=placement==='bottom';
  const pos=bottom?{top:'calc(100% + 10px)'}:{bottom:'calc(100% + 10px)'};
  const x=align==='start'?{left:0}:align==='end'?{right:0}:{left:'50%'};
  const tx=align==='center'?'translateX(-50%) ':'';
  const ax=align==='start'?{left:16}:align==='end'?{right:16}:{left:'50%',marginLeft:-4};
  return <span onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{position:'relative',display:'inline-flex'}}>
    {children}
    <span role="tooltip" style={{position:'absolute',...x,...pos,transform:tx+'translateY('+(show?0:bottom?-4:4)+'px)',opacity:show?1:0,pointerEvents:'none',transition:'opacity var(--dur-1) var(--ease-out),transform var(--dur-2) var(--ease-out)',
      background:'var(--fg-1)',color:'var(--bg)',fontFamily:'var(--font-mono)',fontSize:11,lineHeight:'14px',letterSpacing:'.04em',padding:'6px 10px',whiteSpace:'nowrap',zIndex:50}}>
      {label}<span aria-hidden="true" style={{position:'absolute',...ax,[bottom?'top':'bottom']:-4,width:8,height:8,background:'var(--fg-1)',transform:'rotate(45deg)'}}/>
    </span>
  </span>;
}
