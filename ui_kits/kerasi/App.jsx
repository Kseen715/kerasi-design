const appThemes=[['sakura','Sakura'],['sakura-dark','Sakura · Dark'],['wine','Wine'],['wine-dark','Wine · Dark'],['rust','Rust'],['rust-dark','Rust · Dark']];
const appNav=[['home','Home'],['blog','Journal'],['git','Code'],['dashboard','Dashboard'],['diagrams','Diagrams'],['gallery','Gallery']];
function App(){
  const saved=JSON.parse(localStorage.getItem('kerasi-kit')||'{}');
  const q=new URLSearchParams(location.search);
  const forced=window.KERASI_ROUTE;
  const [theme,setTheme]=React.useState(q.get('theme')||saved.theme||'sakura');
  const [route,setRoute]=React.useState(forced||q.get('route')||saved.route||'home');
  const [slug,setSlug]=React.useState(null);
  React.useEffect(()=>{document.documentElement.setAttribute('data-theme',theme);if(!forced)localStorage.setItem('kerasi-kit',JSON.stringify({theme,route}));},[theme,route]);
  const family=theme.split('-')[0];
  const dark=theme.endsWith('dark');
  const markFamily=dark?'sakura':family;
  const go=(r,s=null)=>{setRoute(r);setSlug(s);window.scrollTo(0,0);};
  const S={home:<HomeScreen family={markFamily} go={go}/>,blog:<BlogScreen slug={slug} go={go}/>,git:<GitScreen/>,dashboard:<DashboardScreen/>,diagrams:<DiagramsScreen/>,gallery:<GalleryScreen family={markFamily}/>};
  return <div style={{minHeight:'100vh',background:'var(--bg)',color:'var(--fg-1)'}}>
    <header style={{position:'sticky',top:0,zIndex:40,background:'color-mix(in srgb,var(--bg) 86%,transparent)',backdropFilter:'blur(10px)',borderBottom:'1px solid var(--line)'}}>
      <div style={{...kitWrap,display:'flex',alignItems:'center',gap:32,height:68}}>
        <span onClick={()=>go('home')} style={{cursor:'pointer'}}><Logo size={34}/></span>
        <nav style={{display:'flex',gap:22,flex:1,overflowX:'auto'}}>{appNav.map(([id,l])=><a key={id} onClick={()=>go(id)} style={{cursor:'pointer',textDecoration:'none',fontFamily:'var(--font-display)',fontWeight:500,fontSize:15,letterSpacing:'.06em',textTransform:'uppercase',color:route===id?'var(--fg-1)':'var(--fg-3)',borderBottom:'2px solid '+(route===id?'var(--accent)':'transparent'),padding:'6px 0'}}>{l}</a>)}</nav>
        <Select value={theme} onChange={e=>setTheme(e.target.value)} options={appThemes.map(([v,l])=>({value:v,label:l}))} style={{width:170}}/>
      </div>
    </header>
    <main data-screen-label={route}>{S[route]}</main>
    <Footer family={markFamily}/>
  </div>;
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
