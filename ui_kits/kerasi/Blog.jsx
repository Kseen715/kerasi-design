window.blogPosts=[
  {slug:'pruning',date:'Oct 21, 2026',tag:'Engineering',title:'Pruning the build pipeline',read:'7 min',ex:'We cut CI time from eleven minutes to three by removing work, not adding caches.'},
  {slug:'facets',date:'Oct 04, 2026',tag:'Design',title:'Why the new mark has no border',ex:'The badge became a tree. Notes on redrawing the logo with points instead of curves.',read:'5 min'},
  {slug:'palettes',date:'Sep 18, 2026',tag:'Design',title:'Wine, rust and blossom',ex:'How three seasonal palettes share one set of semantic tokens.',read:'6 min'},
  {slug:'lantern',date:'Aug 30, 2026',tag:'Product',title:'Lantern 1.0: counting without cookies',ex:'Our analytics tool is out. It stores nothing it does not need.',read:'4 min'},
  {slug:'roots',date:'Aug 02, 2026',tag:'Notes',title:'A decade of side projects',ex:'What survived, what was cut, and what grew back.',read:'9 min'},
];
function BlogList({open}){
  const [tag,setTag]=React.useState('All');
  const tags=['All','Engineering','Design','Product','Notes'];
  const posts=window.blogPosts.filter(p=>tag==='All'||p.tag===tag);
  const [f,...rest]=posts;
  return <div style={{...kitWrap,paddingTop:64}}>
    <Overline style={{marginBottom:16}}>Journal · {window.blogPosts.length} posts</Overline>
    <Display size={120}>Notes from<br/>the orchard</Display>
    <div style={{display:'flex',gap:8,flexWrap:'wrap',margin:'40px 0 48px'}}>{tags.map(t=><Tag key={t} selected={t===tag} onClick={()=>setTag(t)}>{t}</Tag>)}</div>
    {f&&<div onClick={()=>open(f.slug)} style={{display:'grid',gridTemplateColumns:'minmax(0,1.2fr) minmax(0,1fr)',gap:40,alignItems:'end',cursor:'pointer',marginBottom:56}}>
      <Placeholder label="Feature image" ratio="16/10" tone="var(--accent-soft)"/>
      <div><div style={{display:'flex',gap:10,marginBottom:16}}><Badge tone="solid">Featured</Badge><Badge>{f.tag}</Badge></div>
        <Display size={56} as="h2">{f.title}</Display><p style={{fontSize:18,color:'var(--fg-2)',lineHeight:1.6,margin:'20px 0'}}>{f.ex}</p><Overline>{f.date} · {f.read}</Overline></div></div>}
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:'40px 24px'}}>
      {rest.map(p=><Card key={p.slug} variant="rule" onClick={()=>open(p.slug)} eyebrow={p.date+' · '+p.tag} title={p.title} footer={<Overline>{p.read}</Overline>}>{p.ex}</Card>)}
    </div>
  </div>;
}
function BlogPost({slug,back}){
  const p=window.blogPosts.find(x=>x.slug===slug)||window.blogPosts[0];
  const P={fontSize:18,lineHeight:1.75,color:'var(--fg-1)',margin:'0 0 24px',textWrap:'pretty'};
  return <article style={{...kitWrap,maxWidth:820,paddingTop:48}}>
    <Button variant="quiet" icon="arrow-left" onClick={back}>Journal</Button>
    <div style={{display:'flex',gap:10,margin:'40px 0 20px'}}><Badge tone="accent">{p.tag}</Badge><Badge>{p.read}</Badge></div>
    <Display size={84}>{p.title}</Display>
    <div style={{display:'flex',alignItems:'center',gap:12,margin:'32px 0 40px',paddingBottom:24,borderBottom:'1px solid var(--line)'}}><span style={{width:36,height:36,borderRadius:'50%',background:'var(--accent-3)'}}/><div><div style={{fontWeight:600,fontSize:14}}>Kerasi Studio</div><Overline>{p.date}</Overline></div></div>
    <p style={{...P,fontSize:22,color:'var(--fg-2)'}}>{p.ex}</p>
    <p style={P}>The pipeline had grown the way branches do: one reasonable step at a time. Lint, then type-check, then a second lint for a different file type, then a visual diff that nobody read. Each was added for a reason. Few of those reasons still held.</p>
    <blockquote style={{margin:'40px 0',padding:'8px 0 8px 0',borderTop:'2px solid var(--fg-1)',borderBottom:'1px solid var(--line)'}}><Display size={40} as="div" style={{padding:'20px 0'}}>Cut what you would not plant again.</Display></blockquote>
    <p style={P}>We listed every step with its runtime and the last time it caught a real problem. Anything without a catch in six months was removed.</p>
    <CodeBlock language="yaml" title=".github/workflows/ci.yml" code={'steps:\n  - lint        # 38s\n  - typecheck   # 52s\n  - test        # 1m 40s\n  # - visual-diff   removed'} highlightLines={[5]} style={{margin:'0 0 24px'}}/>
    <Placeholder label="Diagram — build timeline" ratio="16/7" style={{margin:'16px 0 40px'}}/>
    <p style={P}>Three minutes is not the goal. A pipeline where every step earns its place is.</p>
  </article>;
}
function BlogScreen({slug,go}){return slug?<BlogPost slug={slug} back={()=>go('blog')}/>:<BlogList open={s=>go('blog',s)}/>;}
window.BlogScreen=BlogScreen;
