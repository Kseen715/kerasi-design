import React from 'react';
export function Tooltip({label,children,placement='top',open}){
  const [h,setH]=React.useState(false);
  const show=open??h;
  const pos=placement==='bottom'?{top:'calc(100% + 8px)'}:{bottom:'calc(100% + 8px)'};
  return <span onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{position:'relative',display:'inline-flex'}}>
    {children}
    <span role="tooltip" style={{position:'absolute',left:'50%',...pos,transform:'translateX(-50%) translateY('+(show?0:placement==='bottom'?-4:4)+'px)',opacity:show?1:0,pointerEvents:'none',transition:'opacity var(--dur-1) var(--ease-out),transform var(--dur-2) var(--ease-out)',
      background:'var(--fg-1)',color:'var(--bg)',fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'.04em',padding:'6px 9px',whiteSpace:'nowrap',zIndex:50}}>{label}</span>
  </span>;
}
