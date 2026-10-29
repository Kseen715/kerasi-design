function DiagramsScreen(){const m=useBp()==='mobile';
  const box={border:'1px solid var(--line)',background:'var(--bg-raised)',padding:m?16:24,display:'flex',flexDirection:'column',gap:16,minWidth:0};
  const H=({i,t})=><div><Overline style={{marginBottom:6}}>{i}</Overline><Display size={26} as="h3">{t}</Display></div>;
  const nodes=[{x:10,y:40,w:100,label:'Commit'},{x:150,y:40,w:100,label:'Lint'},{x:150,y:140,w:100,label:'Test'},{x:290,y:90,w:110,label:'Build',accent:true},{x:440,y:40,w:90,label:'Preview'},{x:440,y:140,w:90,label:'Release'},{x:560,y:140,w:70,label:'Live'}];
  return <div style={{...kitWrap,paddingTop:40}}>
    <Overline style={{marginBottom:10}}>Data visualisation</Overline><Display size={96}>Diagrams</Display>
    <p style={{color:'var(--fg-2)',fontSize:17,maxWidth:560,margin:'20px 0 40px'}}>Charts use --chart-1…5, square marks, hairline grids and mono labels. Switch theme to see them recolour.</p>
    <div style={{...box,marginBottom:24}}><H i="Flow" t="Release pipeline"/><div style={{overflowX:'auto',margin:m?'0 -16px':0,padding:m?'0 16px':0}}><div style={{minWidth:m?560:0}}><Flow nodes={nodes} edges={[[0,1],[0,2],[1,3],[2,3],[3,4],[3,5],[5,6]]}/></div></div></div>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,340px),1fr))',gap:24}}>
      <div style={box}><H i="Line · area" t="Growth"/><AreaChart data={[[4,3],[6,4],[5,5],[9,6],[12,7],[11,8],[15,9],[18,10]]} height={200}/><Legend items={['2026','2025']}/></div>
      <div style={box}><H i="Bars · grouped" t="Issues opened vs closed"/><BarChart data={[[8,6],[12,10],[9,11],[14,12],[7,9],[10,10]]} labels={['May','Jun','Jul','Aug','Sep','Oct']}/><Legend items={['Opened','Closed']}/></div>
      <div style={box}><H i="Bars · stacked" t="Time by phase"/><BarChart data={[[3,4,2],[4,3,3],[2,5,2],[5,4,1],[3,3,4]]} labels={['Q1','Q2','Q3','Q4','Q5']} stacked/><Legend items={['Design','Build','Review']}/></div>
      <div style={{...box,alignItems:'flex-start'}}><H i="Donut" t="Language share"/><div style={{display:'flex',gap:24,alignItems:'center',flexWrap:'wrap'}}><Donut values={[62,24,9,5]} label="62%" sub="TYPESCRIPT" size={170}/><div style={{display:'flex',flexDirection:'column',gap:8}}>{['TypeScript 62%','CSS 24%','MDX 9%','Other 5%'].map((l,i)=><span key={l} style={{display:'inline-flex',alignItems:'center',gap:8,fontSize:13,color:'var(--fg-2)'}}><span style={{width:10,height:10,background:chartC(i)}}/>{l}</span>)}</div></div></div>
      <div style={box}><H i="Heat grid" t="Commit activity"/><HeatGrid weeks={30} cell={10}/></div>
      <div style={box}><H i="Proportion" t="Budget split"/>
        {[['Hosting',46],['Domains',12],['Tooling',28],['Other',14]].map(([l,v],i)=><div key={l}><div style={{display:'flex',justifyContent:'space-between',fontSize:13,marginBottom:6}}><span>{l}</span><span style={{fontFamily:'var(--font-mono)'}}>{v}%</span></div><div style={{height:8,background:'var(--bg-sunken)'}}><div style={{width:v+'%',height:'100%',background:chartC(i)}}/></div></div>)}</div>
    </div>
  </div>;
}
window.DiagramsScreen=DiagramsScreen;
