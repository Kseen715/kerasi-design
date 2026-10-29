import React from 'react';
const P={"sun":"<circle cx=\"66\" cy=\"136\" r=\"32\"/>","ground":"M30 162 L178 136 L132 170 L70 182 Z","groundHi":"M30 162 L112 148 L70 182 Z","trunk":"M96 166 L106 146 L94 128 L102 108 L98 94 L108 94 L114 110 L108 128 L124 146 L136 158 Z","trunkSh":"M96 166 L106 146 L94 128 L102 108 L98 94 L102 94 L106 110 L100 128 L114 148 L112 163 Z","branchL":"M99 121 L70 104 L54 100 L60 95 L74 98 L101 112 Z","branchR":"M108 127 L140 108 L152 98 L146 94 L136 103 L106 118 Z","bloom":"M18 96 L30 70 L52 58 L62 40 L96 28 L112 34 L132 30 L150 48 L166 52 L172 76 L184 96 L170 104 L150 98 L134 106 L118 96 L100 102 L84 92 L66 100 L48 92 L32 102 Z","bloomHi":"M62 40 L96 28 L86 54 Z M112 34 L132 30 L124 56 Z M30 70 L52 58 L46 76 Z M150 48 L166 52 L156 68 Z","bloomSh":"M18 96 L40 84 L56 88 L72 76 L90 84 L106 74 L124 84 L142 78 L160 88 L184 96 L170 104 L150 98 L134 106 L118 96 L100 102 L84 92 L66 100 L48 92 L32 102 Z","cord":"M150 99 V118 M166 97 V110","lantern":"M150 118 L155 126 L150 136 L145 126 Z M166 110 L170 117 L166 125 L162 117 Z"};
const C={
  sakura:{sun:'#AC2937',ground:'#683D35',groundHi:'#7E4A3B',trunk:'#925644',trunkSh:'#683D35',bloom:'#EFBCC5',bloomHi:'#F7D9DE',bloomSh:'#E3909E',cord:'#BDA177',lantern:'#ECC483'},
  wine:{sun:'#773344',ground:'#191716',groundHi:'#2E2926',trunk:'#4A3A36',trunkSh:'#2E2926',bloom:'#D9C7A0',bloomHi:'#EADDBF',bloomSh:'#C2A878',cord:'#C2A878',lantern:'#C2A878'},
  rust:{sun:'#B7472A',ground:'#20252B',groundHi:'#343B43',trunk:'#4B535C',trunkSh:'#20252B',bloom:'#8E99A3',bloomHi:'#B4BDC5',bloomSh:'#6B7782',cord:'#6B737C',lantern:'#B7472A'},
  'sakura-dark':{sun:'#D8394A',ground:'#B07A62',groundHi:'#C48C72',trunk:'#D6A588',trunkSh:'#B07A62',bloom:'#EFBCC5',bloomHi:'#F7D9DE',bloomSh:'#E3909E',cord:'#BDA177',lantern:'#ECC483'},
  'wine-dark':{sun:'#B2475F',ground:'#A86A7A',groundHi:'#C08494',trunk:'#CFC5B4',trunkSh:'#A89E8E',bloom:'#EEC567',bloomHi:'#F7D688',bloomSh:'#D4A848',cord:'#D4A848',lantern:'#F7D688'},
  'rust-dark':{sun:'#E0603F',ground:'#7E8790',groundHi:'#9AA2AA',trunk:'#B5BCC2',trunkSh:'#9AA2AA',bloom:'#D5D9DB',bloomHi:'#E8EBEC',bloomSh:'#BFC4C7',cord:'#8E959B',lantern:'#E0603F'},
};
const THEMES=['sakura','wine','rust','sakura-dark','wine-dark','rust-dark'];
function useAutoTheme(ref,explicit){
  const [t,setT]=React.useState(explicit&&explicit!=='auto'?explicit:'sakura');
  React.useLayoutEffect(()=>{
    if(explicit&&explicit!=='auto'){setT(explicit);return;}
    const read=()=>{const host=ref.current&&ref.current.closest('[data-theme]');const v=host?host.getAttribute('data-theme'):'sakura';setT(THEMES.includes(v)?v:'sakura');};
    read();
    const mo=new MutationObserver(read);
    let n=ref.current;while(n&&n.nodeType===1){mo.observe(n,{attributes:true,attributeFilter:['data-theme']});n=n.parentElement;}
    return()=>mo.disconnect();
  },[explicit]);
  return t;
}
function onDark(theme,dark){if(!dark||theme.endsWith('-dark'))return theme;return theme+'-dark';}
export function Mark({theme='auto',size=40,mono,dark,style}){
  const ref=React.useRef(null);
  const resolved=onDark(useAutoTheme(ref,theme),dark);
  if(mono){
    const f=mono===true?'currentColor':mono;
    return <svg ref={ref} viewBox="0 0 200 200" width={size} height={size} style={style} aria-label="Kerasi">
      <circle cx="66" cy="136" r="28" fill="none" stroke={f} strokeWidth="7"/>
      <path d={P.ground} fill={f}/><path d={P.trunk} fill={f}/><path d={P.branchL} fill={f}/><path d={P.branchR} fill={f}/><path d={P.bloom} fill={f}/>
      <path d={P.cord} stroke={f} strokeWidth="1.4"/><path d={P.lantern} fill={f}/></svg>;
  }
  const c=C[resolved]||C.sakura;
  return <svg ref={ref} data-mark-theme={resolved} viewBox="0 0 200 200" width={size} height={size} style={style} aria-label="Kerasi">
    <circle cx="66" cy="136" r="32" fill={c.sun}/>
    {['ground','groundHi','trunk','trunkSh','branchL','branchR','bloom','bloomHi','bloomSh'].map(k=><path key={k} d={P[k]} fill={c[k]||(k==='branchL'?c.trunkSh:c.trunk)}/>)}
    <path d={P.cord} stroke={c.cord} strokeWidth="1.4"/><path d={P.lantern} fill={c.lantern}/></svg>;
}
export function Logo({theme='auto',size=40,wordmark=true,mono,dark,tagline,style}){
  return <span style={{display:'inline-flex',alignItems:'center',gap:size*0.28,color:'var(--fg-1)',...style}}>
    <Mark theme={theme} size={size} mono={mono} dark={dark}/>
    {wordmark&&<span style={{display:'flex',flexDirection:'column',gap:2}}>
      <span style={{fontFamily:'var(--font-display)',fontWeight:600,fontSize:size*0.62,lineHeight:.9,letterSpacing:'.02em',textTransform:'uppercase'}}>Kerasi</span>
      {tagline&&<span style={{fontFamily:'var(--font-mono)',fontSize:Math.max(9,size*0.18),letterSpacing:'.14em',textTransform:'uppercase',color:'var(--fg-3)'}}>{tagline}</span>}
    </span>}
  </span>;
}
