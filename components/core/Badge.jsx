import React from 'react';
const TONES={neutral:['var(--bg-sunken)','var(--fg-2)'],accent:['var(--accent-soft)','var(--accent-ink)'],solid:['var(--accent)','var(--accent-fg)'],success:['transparent','var(--status-success)'],warning:['transparent','var(--status-warning)'],danger:['transparent','var(--status-danger)'],info:['transparent','var(--status-info)']};
export function Badge({tone='neutral',dot,children,style}){
  const [bg,fg]=TONES[tone]||TONES.neutral;
  const outlined=bg==='transparent';
  return <span style={{display:'inline-flex',alignItems:'center',gap:6,height:22,padding:'0 8px',background:bg,color:fg,border:outlined?'1px solid currentColor':'1px solid transparent',
    fontFamily:'var(--font-mono)',fontSize:11,fontWeight:500,letterSpacing:'.08em',textTransform:'uppercase',whiteSpace:'nowrap',...style}}>
    {dot&&<span style={{width:6,height:6,borderRadius:'50%',background:'currentColor'}}/>}{children}</span>;
}
