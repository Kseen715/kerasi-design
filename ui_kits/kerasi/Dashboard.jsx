const dashData={
  Week:{area:[[12,14],[18,15],[15,17],[22,18],[26,20],[24,21],[31,22]],labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun']},
  Month:{area:[[40,38],[46,40],[44,41],[52,44],[58,46],[55,47],[63,49],[70,52],[68,54],[76,55]],labels:['W1','W2','W3','W4','W5','W6','W7','W8','W9','W10']},
  Year:{area:[[120,110],[140,118],[135,125],[160,130],[180,138],[175,142],[210,150],[230,158],[220,163],[260,170],[280,176],[300,182]],labels:['J','F','M','A','M','J','J','A','S','O','N','D']},
};
function Stat({label,value,delta,spark,good=true}){return <div style={{padding:'20px 0',borderTop:'2px solid var(--fg-1)'}}>
  <Overline>{label}</Overline>
  <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',gap:12,marginTop:12}}>
    <span style={{fontFamily:'var(--font-display)',fontWeight:600,fontSize:56,lineHeight:.9}}>{value}</span><Sparkline data={spark}/></div>
  <div style={{marginTop:10,fontSize:13,color:good?'var(--status-success)':'var(--status-danger)',fontFamily:'var(--font-mono)'}}>{delta} vs last period</div></div>;}
function DashboardScreen(){
  const [range,setRange]=React.useState('Week');
  const d=dashData[range];
  const deploys=[['hanami-ui','main','success','42s','5h'],['bark','release/1.8','success','1m 12s','9h'],['lantern','main','danger','—','1d'],['kerasi.studio','main','success','28s','1d']];
  const box={border:'1px solid var(--line)',background:'var(--bg-raised)',padding:24};
  return <div style={{...kitWrap,paddingTop:40}}>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:24,flexWrap:'wrap',marginBottom:32}}>
      <div><Overline style={{marginBottom:10}}>Lantern · All projects</Overline><Display size={72}>Overview</Display></div>
      <div style={{display:'flex',gap:16,alignItems:'center'}}><Tabs items={['Week','Month','Year']} value={range} onChange={setRange}/><Button size="sm" variant="secondary" icon="download">Export</Button></div>
    </div>
    <div style={{display:'grid',gridTemplateColumns:'repeat(4,minmax(0,1fr))',gap:24}}>
      <Stat label="Visitors" value="18.4k" delta="+12.6%" spark={[3,4,3,5,6,5,7,8]}/>
      <Stat label="Stars" value="1,204" delta="+3.1%" spark={[2,2,3,3,4,4,5,5]}/>
      <Stat label="Deploys" value="86" delta="+8" spark={[5,3,6,4,7,6,8,7]}/>
      <Stat label="Build time" value="3:02" delta="-71%" spark={[11,10,9,8,6,5,3,3]}/>
    </div>
    <div style={{display:'grid',gridTemplateColumns:'minmax(0,2fr) minmax(0,1fr)',gap:24,marginTop:32}}>
      <div style={box}><div style={{display:'flex',justifyContent:'space-between',marginBottom:16}}><Display size={24} as="h3">Traffic</Display><Legend items={['This period','Previous']}/></div><AreaChart data={d.area}/></div>
      <div style={{...box,display:'flex',flexDirection:'column',alignItems:'center',gap:20}}><Display size={24} as="h3" style={{alignSelf:'flex-start'}}>Sources</Display><Donut values={[46,28,16,10]} label="18.4k" sub="VISITS"/><Legend items={['Direct','Search','GitHub','Social']}/></div>
    </div>
    <div style={{display:'grid',gridTemplateColumns:'minmax(0,1fr) minmax(0,1fr)',gap:24,marginTop:24}}>
      <div style={box}><Display size={24} as="h3" style={{marginBottom:16}}>Commits by project</Display><BarChart data={[[14,6],[9,4],[12,8],[6,3],[16,5],[8,2],[11,7]]} labels={d.labels.slice(0,7)} stacked/></div>
      <div style={box}><Display size={24} as="h3" style={{marginBottom:12}}>Recent deploys</Display>
        {deploys.map(([p,b,s,t,a])=><div key={p} style={{display:'grid',gridTemplateColumns:'minmax(0,1fr) 120px 60px 40px',gap:12,alignItems:'center',padding:'12px 0',borderTop:'1px solid var(--line)',fontSize:14}}>
          <div><div style={{fontWeight:600}}>{p}</div><code style={{fontFamily:'var(--font-mono)',fontSize:12,color:'var(--fg-3)'}}>{b}</code></div>
          <Badge tone={s} dot>{s==='success'?'Ready':'Failed'}</Badge><span style={{fontFamily:'var(--font-mono)',fontSize:12}}>{t}</span><span style={{color:'var(--fg-3)',fontSize:12}}>{a}</span></div>)}
      </div>
    </div>
  </div>;
}
window.DashboardScreen=DashboardScreen;
