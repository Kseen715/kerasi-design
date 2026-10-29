const homeProjects=[
  {n:'01',t:'Hanami UI',d:'A component library for quiet, seasonal interfaces.',tag:'Open source'},
  {n:'02',t:'Bark',d:'Static site engine. Markdown in, sharp pages out.',tag:'Tooling'},
  {n:'03',t:'Lantern',d:'Self-hosted analytics with no cookies and no noise.',tag:'Product'},
];
function HomeScreen({family,go}){const bp=useBp();const m=bp==='mobile';
  return <div>
    <section style={{...kitWrap,display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,420px),1fr))',gap:48,alignItems:'center',paddingTop:m?40:72,paddingBottom:m?56:88}}>
      <div>
        <Overline style={{marginBottom:24}}>Κεράσι — cherry · Studio & lab</Overline>
        <Display size="clamp(64px,10vw,148px)">Grown slowly.<br/><span style={{color:'var(--accent-ink)'}}>Cut sharp.</span></Display>
        <p style={{fontSize:m?17:19,lineHeight:1.6,color:'var(--fg-2)',maxWidth:520,margin:'32px 0 36px',textWrap:'pretty'}}>Kerasi is a home for long-lived projects: open-source tools, writing, experiments and the data behind them.</p>
        <div style={{display:'flex',gap:12,flexWrap:'wrap',flexDirection:m?'column':'row'}}><Button full={m} size="lg" iconRight="arrow-right" onClick={()=>go('git')}>Browse projects</Button><Button full={m} size="lg" variant="secondary" onClick={()=>go('blog')}>Read the journal</Button></div>
      </div>
      <div style={{display:'flex',justifyContent:'center'}}><Mark size={m?240:420} style={{maxWidth:'100%',height:'auto'}}/></div>
    </section>
    <section style={kitWrap}>
      <SectionHead index="01" label="Projects" title="In the orchard" action={<Button variant="quiet" iconRight="arrow-up-right" onClick={()=>go('git')}>All repositories</Button>}/>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,260px),1fr))',gap:16}}>
        {homeProjects.map(p=><Card key={p.n} variant="cut" padding={28} eyebrow={p.n+' — '+p.tag} title={p.t} onClick={()=>go('git')} footer={<Button variant="quiet" size="sm" iconRight="arrow-right">Open</Button>}>{p.d}</Card>)}
      </div>
    </section>
    <section style={{...kitWrap,marginTop:m?64:96}}>
      <SectionHead index="02" label="Seasons" title="Three palettes, one tree"/>
      <div style={{display:'grid',gridTemplateColumns:m?'1fr':'repeat(3,1fr)'}}>
        {[['sakura','Sakura','#AC2937'],['wine','Wine','#773344'],['rust','Rust','#B7472A']].map(([t,n,hex])=>
          <div key={t} data-theme={t} style={{background:'var(--accent)',color:'var(--accent-fg)',padding:'28px 24px',minHeight:m?150:bp==='tablet'?200:260,display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <Overline style={{color:'inherit',opacity:.75}}>{hex}</Overline><Display size={72} as="div">{n}</Display></div>)}
      </div>
    </section>
    <section style={{...kitWrap,marginTop:96}}>
      <SectionHead index="03" label="Journal" title="Latest notes" action={<Button variant="quiet" iconRight="arrow-right" onClick={()=>go('blog')}>All posts</Button>}/>
      <div>{window.blogPosts.slice(0,3).map(p=><div key={p.slug} onClick={()=>go('blog',p.slug)} style={{display:'grid',gridTemplateColumns:m?'minmax(0,1fr) auto':'120px minmax(0,1fr) auto',gap:m?'8px 16px':24,alignItems:'baseline',padding:'22px 0',borderBottom:'1px solid var(--line)',cursor:'pointer'}}>
        <Overline style={m?{gridColumn:'1 / -1'}:null}>{p.date}</Overline><span style={{fontFamily:'var(--font-display)',fontSize:m?22:28,fontWeight:500,textTransform:'uppercase',lineHeight:1.05}}>{p.title}</span><Badge tone="accent">{p.tag}</Badge></div>)}</div>
    </section>
  </div>;
}
window.HomeScreen=HomeScreen;
