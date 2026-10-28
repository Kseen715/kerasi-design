const gitFiles=[
  ['folder','.github','ci: drop visual-diff step','2 days ago'],
  ['folder','packages','feat(tabs): lg size','5 hours ago'],
  ['folder','tokens','themes: add rust-dark','yesterday'],
  ['file','package.json','chore: bump to 2.4.0','5 hours ago'],
  ['file','README.md','docs: new logo','3 days ago'],
  ['file','LICENSE','init','2 years ago'],
];
const gitIssues=[
  {n:142,t:'Tabs overflow on narrow screens',l:'bug',s:'open',a:'2h'},
  {n:139,t:'Add chamfer size token for cards',l:'design',s:'open',a:'1d'},
  {n:137,t:'Switch knob jumps in Safari',l:'bug',s:'open',a:'3d'},
  {n:131,t:'Document wine-dark contrast',l:'docs',s:'closed',a:'1w'},
];
function GitScreen(){
  const [tab,setTab]=React.useState('code');
  const [toast,setToast]=React.useState(false);
  return <div style={{...kitWrap,paddingTop:40}}>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:24,flexWrap:'wrap',marginBottom:24}}>
      <div><Overline style={{marginBottom:10}}>kerasi / public</Overline><Display size={64}>Hanami-ui</Display><p style={{color:'var(--fg-2)',margin:'14px 0 0',fontSize:16}}>A component library for quiet, seasonal interfaces.</p></div>
      <div style={{display:'flex',gap:8}}><Button variant="secondary" size="sm" icon="eye">Watch · 48</Button><Button variant="secondary" size="sm" icon="star">Star · 1.2k</Button><Button size="sm" icon="git-fork">Fork</Button></div>
    </div>
    <Tabs size="lg" value={tab} onChange={setTab} items={[{id:'code',label:'Code'},{id:'issues',label:'Issues',count:3},{id:'pulls',label:'Pull requests',count:2},{id:'actions',label:'Actions'}]}/>
    <div style={{display:'grid',gridTemplateColumns:'minmax(0,1fr) 280px',gap:40,marginTop:28}}>
      <div>
        {tab==='code'&&<>
          <div style={{display:'flex',gap:10,alignItems:'center',marginBottom:16,flexWrap:'wrap'}}>
            <Select options={['main','release/spring','feat/tabs-lg']} style={{width:200}}/>
            <Overline>3 branches · 14 tags</Overline><div style={{flex:1}}/>
            <Input placeholder="Go to file" icon="search" style={{width:200}}/>
            <Button size="sm" icon="copy" onClick={()=>{setToast(true);setTimeout(()=>setToast(false),2200);}}>Clone</Button>
          </div>
          <div style={{border:'1px solid var(--line)'}}>
            <div style={{display:'flex',alignItems:'center',gap:12,padding:'12px 16px',background:'var(--bg-sunken)',fontSize:13}}><span style={{width:22,height:22,borderRadius:'50%',background:'var(--accent)'}}/><b>mira</b><span style={{color:'var(--fg-2)'}}>feat(tabs): lg size</span><div style={{flex:1}}/><code style={{fontFamily:'var(--font-mono)',fontSize:12,color:'var(--accent-ink)'}}>a83f2c1</code><span style={{color:'var(--fg-3)'}}>5h</span><Badge tone="success" dot>Passing</Badge></div>
            {gitFiles.map(([k,n,m,d])=><div key={n} style={{display:'grid',gridTemplateColumns:'24px 200px minmax(0,1fr) 110px',gap:12,alignItems:'center',padding:'11px 16px',borderTop:'1px solid var(--line)',fontSize:14}}>
              <Icon name={k} size={16} color={k==='folder'?'var(--accent-2)':'var(--fg-3)'}/><span style={{fontWeight:500}}>{n}</span><span style={{color:'var(--fg-2)',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{m}</span><span style={{color:'var(--fg-3)',textAlign:'right',fontSize:13}}>{d}</span></div>)}
          </div>
          <div style={{border:'1px solid var(--line)',marginTop:24}}>
            <div style={{padding:'12px 16px',borderBottom:'1px solid var(--line)',display:'flex',alignItems:'center',gap:8}}><Icon name="book-open" size={16}/><Overline style={{color:'var(--fg-1)'}}>README.md</Overline></div>
            <div style={{padding:'28px 32px'}}><Display size={40} as="h3">Hanami UI</Display><p style={{color:'var(--fg-2)',lineHeight:1.7}}>Sharp components on calm surfaces. Every token is themeable across Sakura, Wine and Rust.</p>
              <CodeBlock language="sh" code={'pnpm add @kerasi/hanami'} lineNumbers={false} style={{marginBottom:16}}/><CodeBlock language="tsx" title="app.tsx" code={"import { Button } from '@kerasi/hanami';\n\nexport default function App() {\n  return <Button variant=\"primary\">Bloom</Button>;\n}"}/></div>
          </div>
        </>}
        {tab!=='code'&&<div style={{border:'1px solid var(--line)'}}>
          <div style={{display:'flex',gap:16,padding:'12px 16px',background:'var(--bg-sunken)',fontSize:13}}><b><Icon name="circle-dot" size={14} style={{verticalAlign:-2}}/> 3 Open</b><span style={{color:'var(--fg-3)'}}><Icon name="check" size={14} style={{verticalAlign:-2}}/> 1 Closed</span></div>
          {gitIssues.map(i=><div key={i.n} style={{display:'flex',alignItems:'center',gap:12,padding:'14px 16px',borderTop:'1px solid var(--line)'}}>
            <Icon name={i.s==='open'?'circle-dot':'circle-check'} size={16} color={i.s==='open'?'var(--status-success)':'var(--fg-3)'}/>
            <div style={{flex:1}}><div style={{fontWeight:600,fontSize:15}}>{i.t}</div><div style={{fontSize:12,color:'var(--fg-3)',marginTop:2}}>#{i.n} opened {i.a} ago</div></div>
            <Badge tone={i.l==='bug'?'danger':i.l==='design'?'accent':'neutral'}>{i.l}</Badge></div>)}
        </div>}
      </div>
      <aside style={{display:'flex',flexDirection:'column',gap:28}}>
        <div><Overline style={{marginBottom:12}}>About</Overline><div style={{display:'flex',flexWrap:'wrap',gap:6}}>{['react','design-tokens','ui','themes'].map(t=><Tag key={t}>{t}</Tag>)}</div></div>
        <div><Overline style={{marginBottom:12}}>Languages</Overline><div style={{display:'flex',height:8}}><span style={{flex:62,background:'var(--chart-1)'}}/><span style={{flex:24,background:'var(--chart-2)'}}/><span style={{flex:14,background:'var(--chart-3)'}}/></div>
          <div style={{marginTop:10}}><Legend items={['TypeScript 62%','CSS 24%','MDX 14%']}/></div></div>
        <div><Overline style={{marginBottom:12}}>Commit activity · 26 weeks</Overline><HeatGrid weeks={18} cell={10}/></div>
        <div><Overline style={{marginBottom:12}}>Latest release</Overline><div style={{display:'flex',alignItems:'center',gap:8}}><Icon name="tag" size={16}/><b>v2.4.0</b><Badge tone="solid">Latest</Badge></div></div>
      </aside>
    </div>
    {toast&&<div style={{position:'fixed',right:24,bottom:24,zIndex:60}}><Toast tone="success" title="Copied">git@kerasi.studio:hanami-ui.git</Toast></div>}
  </div>;
}
window.GitScreen=GitScreen;
