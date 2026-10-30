const appThemes=[['sakura','Sakura'],['sakura-dark','Sakura · Dark'],['wine','Wine'],['wine-dark','Wine · Dark'],['rust','Rust'],['rust-dark','Rust · Dark']];
const appNav=[['home','Home'],['blog','Journal'],['git','Code'],['dashboard','Dashboard'],['diagrams','Diagrams'],['gallery','Gallery'],['elements','Elements']];
function App(){
  const saved=JSON.parse(localStorage.getItem('kerasi-kit')||'{}');
  const q=new URLSearchParams(location.search);
  const forced=window.KERASI_ROUTE;
  const [theme,setTheme]=React.useState(q.get('theme')||saved.theme||(matchMedia('(prefers-color-scheme: dark)').matches?'sakura-dark':'sakura'));
  const [route,setRoute]=React.useState(forced||q.get('route')||saved.route||'home');
  const [slug,setSlug]=React.useState(null);const [menu,setMenu]=React.useState(false);const bp=useBp();const embed=q.has('route');
  React.useEffect(()=>{document.documentElement.setAttribute('data-theme',theme);if(!forced&&!embed)localStorage.setItem('kerasi-kit',JSON.stringify({theme,route}));},[theme,route]);
  const family=theme.split('-')[0];
  const dark=theme.endsWith('dark');
  const markFamily=dark?'sakura':family;
  const go=(r,s=null)=>{setRoute(r);setSlug(s);setMenu(false);window.scrollTo(0,0);};
  const S={home:<HomeScreen family={markFamily} go={go}/>,blog:<BlogScreen slug={slug} go={go}/>,git:<GitScreen/>,dashboard:<DashboardScreen/>,diagrams:<DiagramsScreen/>,gallery:<GalleryScreen family={markFamily}/>,elements:window.ElementsScreen?<window.ElementsScreen/>:null};
  return <div style={{minHeight:'100vh',background:'var(--bg)',color:'var(--fg-1)'}}>
    <header style={{position:'sticky',top:0,zIndex:40,background:'color-mix(in srgb,var(--bg) 86%,transparent)',backdropFilter:'blur(10px)',borderBottom:'1px solid var(--line)'}}>
      <div style={{...kitWrap,display:'flex',alignItems:'center',gap:bp==='desktop'?32:16,height:bp==='mobile'?60:68}}>
        <span onClick={()=>go('home')} style={{cursor:'pointer',flex:bp==='mobile'?1:'none'}}><Logo size={bp==='mobile'?28:34} wordmark={bp!=='tablet'}/></span>
        {bp==='mobile'?<IconButton icon={menu?'x':'menu'} label="Menu" size={44} onClick={()=>setMenu(!menu)}/>:<>
        <nav style={{display:'flex',gap:bp==='tablet'?16:22,flex:1,overflowX:'auto',scrollbarWidth:'none'}}>{appNav.map(([id,l])=><a key={id} onClick={()=>go(id)} style={{cursor:'pointer',textDecoration:'none',fontFamily:'var(--font-display)',fontWeight:500,fontSize:15,letterSpacing:'.06em',textTransform:'uppercase',color:route===id?'var(--fg-1)':'var(--fg-3)',borderBottom:'2px solid '+(route===id?'var(--accent)':'transparent'),padding:'6px 0'}}>{l}</a>)}</nav>
        <Select value={theme} onChange={e=>setTheme(e.target.value)} options={appThemes.map(([v,l])=>({value:v,label:l}))} style={{width:bp==='tablet'?140:170}}/></>}
      </div>
      {bp==='mobile'&&menu&&<div style={{borderTop:'1px solid var(--line)',background:'var(--bg)',padding:'8px 16px 20px',maxHeight:'calc(100vh - 60px)',overflowY:'auto'}}>
        {appNav.map(([id,l])=><a key={id} onClick={()=>go(id)} style={{display:'flex',alignItems:'center',justifyContent:'space-between',minHeight:56,borderBottom:'1px solid var(--line)',cursor:'pointer',fontFamily:'var(--font-display)',fontWeight:500,fontSize:24,letterSpacing:'.04em',textTransform:'uppercase',color:route===id?'var(--accent-ink)':'var(--fg-1)'}}>{l}<Icon name="arrow-right" size={18}/></a>)}
        <div style={{marginTop:20}}><Overline style={{marginBottom:10}}>Theme</Overline><div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>{appThemes.map(([v,l])=><Tag key={v} selected={v===theme} onClick={()=>setTheme(v)}>{l}</Tag>)}</div></div>
      </div>}
    </header>
    <main data-screen-label={route}>{S[route]}</main>
    <Footer family={markFamily}/>
  </div>;
}
if(!(window.KerasiDesignSystem_6c0512&&window.KerasiDesignSystem_6c0512.Button))document.getElementById('root').innerHTML='<p style="padding:24px;font-family:monospace">Design-system bundle not loaded (_ds_bundle.js).</p>';
else ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
