import React from 'react';
export function Card({variant='plain',eyebrow,title,children,footer,padding=24,onClick,style}){
  const [h,setH]=React.useState(false);
  const v={
    plain:{background:'transparent',border:'1px solid var(--line)'},
    raised:{background:'var(--bg-raised)',border:'1px solid var(--line)',boxShadow:onClick&&h?'var(--shadow-pop)':'none'},
    cut:{background:'var(--bg-raised)',border:'none','--chamfer':'var(--chamfer-lg)',clipPath:'var(--clip-chamfer)'},
    rule:{background:'transparent',border:'none',borderTop:'2px solid var(--fg-1)'},
    inverse:{background:'var(--fg-1)',color:'var(--bg)',border:'none'},
  }[variant];
  return <div onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{display:'flex',flexDirection:'column',gap:12,padding:variant==='rule'?padding+'px 0 0':padding,cursor:onClick?'pointer':undefined,transition:'box-shadow var(--dur-2) var(--ease-out),transform var(--dur-2) var(--ease-out)',transform:onClick&&h?'translateY(-2px)':'none',...v,...style}}>
    {eyebrow&&<div style={{fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'.14em',textTransform:'uppercase',color:variant==='inverse'?'inherit':'var(--fg-3)',opacity:variant==='inverse'?.7:1}}>{eyebrow}</div>}
    {title&&<div style={{fontFamily:'var(--font-display)',fontWeight:500,fontSize:24,lineHeight:1.1,textTransform:'uppercase'}}>{title}</div>}
    {children&&<div style={{fontSize:15,lineHeight:1.6,color:variant==='inverse'?'inherit':'var(--fg-2)'}}>{children}</div>}
    {footer&&<div style={{marginTop:'auto',paddingTop:8}}>{footer}</div>}
  </div>;
}
