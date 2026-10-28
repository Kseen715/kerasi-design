import React from 'react';
const TILE='M4 0 H32 V28 L28 32 H0 V4 Z';
const CROWN='M0 4 L4 0 H32 V9.5 L27 7 L21.5 10.5 L16 7 L10.5 10.5 L5 7 L0 9.5 Z';
const CROWN_SH='M0 9.5 L5 7 L10.5 10.5 L16 7 L21.5 10.5 L27 7 L32 9.5 L27 8.6 L21.5 12 L16 8.6 L10.5 12 L5 8.6 L0 11 Z';
const MAIN=[["c","sun"],["M3.5 26.5 L29.5 22 L21.5 28 L10.5 30 Z","ground"],["M3.5 26.5 L18 24 L10.5 30 Z","groundHi"],["M15 27.5 L16.5 23.5 L14.5 20.5 L15.5 17 L15 14.5 L18 14.5 L19 17.5 L18.5 20.5 L21 23.5 L23 26 Z","trunk"],["M15 27.5 L16.5 23.5 L14.5 20.5 L15.5 17 L15 14.5 L16 14.5 L16.8 17.5 L15.9 20.5 L18.5 24 L18 27 Z","trunkSh"],["M15.5 19.5 L10.5 16.5 L7.5 15.5 L9 14.5 L11.5 15 L16 17.5 Z","trunkSh"],["M17.5 20.5 L23 17 L25 15 L24 14.5 L22 16 L17 18.5 Z","trunk"],["M1.5 15 L3.5 10.5 L7.5 8.5 L9 5 L15 3 L18 4 L21.5 3.5 L24.5 6.5 L27.5 7 L28.5 11.5 L30.5 15 L28 16.5 L24.5 15 L22 17 L19 15 L16 16 L13 14 L10 15.5 L7 14 L4 16 Z","bloom"],["M9 5 L15 3 L13.5 7.5 Z M18 4 L21.5 3.5 L20.5 8 Z M3.5 10.5 L7.5 8.5 L6.5 11.5 Z M24.5 6.5 L27.5 7 L25.5 10 Z","bloomHi"],["M1.5 15 L5.5 13 L8 13.5 L11 11.5 L14 13 L17 11 L20 13 L23 12 L26.5 13.5 L30.5 15 L28 16.5 L24.5 15 L22 17 L19 15 L16 16 L13 14 L10 15.5 L7 14 L4 16 Z","bloomSh"],["M24.25 15.5 H24.75 V18.5 H24.25 Z","cord"],["M24.5 18.5 L26 20.5 L24.5 22.5 L23 20.5 Z","lantern"]];
const MC={light:{"sun":"#AC2937","ground":"#683D35","groundHi":"#7E4A3B","trunk":"#925644","trunkSh":"#683D35","bloom":"#EFBCC5","bloomHi":"#F7D9DE","bloomSh":"#E3909E","cord":"#BDA177","lantern":"#ECC483"},dark:{"sun":"#D8394A","ground":"#B07A62","groundHi":"#C48C72","trunk":"#D6A588","trunkSh":"#B07A62","bloom":"#EFBCC5","bloomHi":"#F7D9DE","bloomSh":"#E3909E","cord":"#BDA177","lantern":"#ECC483"}};
export const SUBPROJECT_COLORS={crimson:['#AC2937','#FFF6F2'],bark:['#683D35','#F9F0EC'],wine:['#773344','#F4EFE6'],gold:['#C2A878','#191716'],night:['#191716','#ECC483'],rust:['#B7472A','#F8F9F9'],graphite:['#20252B','#E07A5A'],chrome:['#BFC4C7','#20252B']};
export function Favicon({variant='main',label,color='crimson',ground='paper',size=32,style}){
  if(variant==='main'){
    const bg=ground==='paper'?'#F9F0EC':ground==='dark'?'#1C1210':null;
    return <svg viewBox="0 0 32 32" width={size} height={size} style={style} aria-label="Kerasi">
      {bg&&<path d={TILE} fill={bg}/>}
      {MAIN.map(([d,k],i)=>{const c=MC[ground==='dark'?'dark':'light'][k];return d==='c'?<circle key={i} cx="10" cy="22" r="6" fill={c}/>:<path key={i} d={d} fill={c}/>;})}
    </svg>;
  }
  const [bg,fg]=SUBPROJECT_COLORS[color]||(Array.isArray(color)?color:SUBPROJECT_COLORS.crimson);
  const txt=(label||'').toUpperCase().slice(0,2);
  return <svg viewBox="0 0 32 32" width={size} height={size} style={style} aria-label={label}>
    <path d={TILE} fill={bg}/><path d={CROWN} fill="#EFBCC5"/><path d={CROWN_SH} fill={fg} opacity=".18"/>
    {txt&&<text x="16" y="29" textAnchor="middle" fill={fg} fontFamily="Oswald, 'Arial Narrow', sans-serif" fontWeight="700" fontSize={txt.length>1?15:19} letterSpacing={txt.length>1?-0.5:0}>{txt}</text>}
  </svg>;
}
