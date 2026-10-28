function chartC(i){return 'var(--chart-'+((i%5)+1)+')';}
function AreaChart({data,height=220,series=2}){
  const w=640,h=height,pad=24,max=Math.max(...data.flat())*1.1;
  const x=i=>pad+i*(w-pad*2)/(data.length-1),y=v=>h-pad-(v/max)*(h-pad*2);
  const line=s=>data.map((d,i)=>(i?'L':'M')+x(i)+' '+y(d[s])).join(' ');
  return <svg viewBox={'0 0 '+w+' '+h} style={{width:'100%',height:'auto',display:'block'}}>
    {[0,.25,.5,.75,1].map(t=><line key={t} x1={pad} x2={w-pad} y1={pad+t*(h-pad*2)} y2={pad+t*(h-pad*2)} stroke="var(--line)" strokeWidth="1"/>)}
    {Array.from({length:series}).map((_,s)=><g key={s}>{s===0&&<path d={line(s)+' L'+x(data.length-1)+' '+(h-pad)+' L'+pad+' '+(h-pad)+' Z'} fill={chartC(s)} opacity=".12"/>}
      <path d={line(s)} fill="none" stroke={chartC(s)} strokeWidth={s?1.5:2.5} strokeDasharray={s?'4 4':undefined}/></g>)}
    {data.map((d,i)=>i===data.length-1&&<rect key={i} x={x(i)-4} y={y(d[0])-4} width="8" height="8" fill={chartC(0)}/>)}
  </svg>;}
function BarChart({data,labels,height=200,stacked}){
  const w=640,h=height,pad=24,n=data.length,bw=(w-pad*2)/n*.56;
  const max=Math.max(...data.map(d=>stacked?d.reduce((a,b)=>a+b,0):Math.max(...d)))*1.1;
  return <svg viewBox={'0 0 '+w+' '+(h+18)} style={{width:'100%',height:'auto',display:'block'}}>
    <line x1={pad} x2={w-pad} y1={h-pad} y2={h-pad} stroke="var(--fg-1)"/>
    {data.map((d,i)=>{const cx=pad+(i+.5)*(w-pad*2)/n;let acc=0;return <g key={i}>
      {d.map((v,s)=>{const bh=v/max*(h-pad*2);const bx=stacked?cx-bw/2:cx-bw/2+s*bw/d.length;const by=h-pad-bh-(stacked?acc:0);if(stacked)acc+=bh;
        return <rect key={s} x={bx} y={by} width={stacked?bw:bw/d.length-2} height={bh} fill={chartC(s)}/>;})}
      {labels&&<text x={cx} y={h-4} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="var(--fg-3)">{labels[i]}</text>}</g>;})}
  </svg>;}
function Donut({values,size=180,thick=22,label,sub}){
  const r=(size-thick)/2,c=2*Math.PI*r,tot=values.reduce((a,b)=>a+b,0);let off=0;
  return <svg viewBox={'0 0 '+size+' '+size} style={{width:size,height:size}}>
    <g transform={'rotate(-90 '+size/2+' '+size/2+')'}>{values.map((v,i)=>{const len=v/tot*c;const el=<circle key={i} cx={size/2} cy={size/2} r={r} fill="none" stroke={chartC(i)} strokeWidth={thick} strokeDasharray={(len-2)+' '+(c-len+2)} strokeDashoffset={-off}/>;off+=len;return el;})}</g>
    {label&&<text x="50%" y="48%" textAnchor="middle" fontFamily="var(--font-display)" fontWeight="600" fontSize={size*.2} fill="var(--fg-1)">{label}</text>}
    {sub&&<text x="50%" y="62%" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="1.2" fill="var(--fg-3)">{sub}</text>}
  </svg>;}
function Sparkline({data,w=120,h=32,color}){const max=Math.max(...data),min=Math.min(...data);const p=data.map((v,i)=>(i?'L':'M')+(i*w/(data.length-1))+' '+(h-2-(v-min)/(max-min||1)*(h-4))).join(' ');
  return <svg viewBox={'0 0 '+w+' '+h} style={{width:w,height:h}}><path d={p} fill="none" stroke={color||'var(--accent)'} strokeWidth="1.5"/></svg>;}
function HeatGrid({weeks=26,seed=3,cell=11}){let s=seed;const rnd=()=>{s=(s*9301+49297)%233280;return s/233280;};
  return <svg viewBox={'0 0 '+weeks*(cell+2)+' '+7*(cell+2)} style={{width:'100%',height:'auto',display:'block'}}>{Array.from({length:weeks*7}).map((_,i)=>{const v=rnd();const o=v<.35?0:v<.6?.3:v<.82?.6:1;
    return <rect key={i} x={Math.floor(i/7)*(cell+2)} y={(i%7)*(cell+2)} width={cell} height={cell} fill={o?'var(--accent)':'var(--bg-sunken)'} opacity={o||1}/>;})}</svg>;}
function Flow({nodes,edges,height=220}){const w=640;
  return <svg viewBox={'0 0 '+w+' '+height} style={{width:'100%',height:'auto',display:'block'}}>
    <defs><marker id="arr" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="var(--fg-2)"/></marker></defs>
    {edges.map(([a,b],i)=>{const A=nodes[a],B=nodes[b];const x1=A.x+A.w,y1=A.y+18,x2=B.x,y2=B.y+18,mx=(x1+x2)/2;return <path key={i} d={'M'+x1+' '+y1+' H'+mx+' V'+y2+' H'+(x2-2)} fill="none" stroke="var(--fg-2)" strokeWidth="1.2" markerEnd="url(#arr)"/>;})}
    {nodes.map((n,i)=><g key={i}><path d={'M'+(n.x+8)+' '+n.y+' H'+(n.x+n.w)+' V'+(n.y+28)+' L'+(n.x+n.w-8)+' '+(n.y+36)+' H'+n.x+' V'+(n.y+8)+' Z'} fill={n.accent?'var(--accent)':'var(--bg-raised)'} stroke={n.accent?'none':'var(--fg-1)'} strokeWidth="1"/>
      <text x={n.x+n.w/2} y={n.y+22} textAnchor="middle" fontFamily="var(--font-display)" fontSize="13" letterSpacing=".6" fill={n.accent?'var(--accent-fg)':'var(--fg-1)'}>{n.label.toUpperCase()}</text></g>)}
  </svg>;}
function Legend({items}){return <div style={{display:'flex',gap:16,flexWrap:'wrap'}}>{items.map((l,i)=><span key={l} style={{display:'inline-flex',alignItems:'center',gap:6,fontSize:12,color:'var(--fg-2)'}}><span style={{width:10,height:10,background:chartC(i)}}/>{l}</span>)}</div>;}
Object.assign(window,{chartC,AreaChart,BarChart,Donut,Sparkline,HeatGrid,Flow,Legend});
