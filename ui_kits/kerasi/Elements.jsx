function ElSection({n,title,note,children}){const m=useBp()==='mobile';return <section style={{padding:m?'28px 0':'40px 0',borderTop:'2px solid var(--fg-1)'}}>
  <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',gap:12,flexWrap:'wrap',marginBottom:m?16:24}}><div><Overline style={{marginBottom:6}}>{n}</Overline><Display size={m?28:36} as="h2">{title}</Display></div>{note&&<Overline>{note}</Overline>}</div>{children}</section>;}
function ElementsScreen(){
  const bp=useBp();const m=bp==='mobile';const t=bp==='tablet';
  const [dlg,setDlg]=React.useState(false);const [toast,setToast]=React.useState(false);const [tab,setTab]=React.useState('code');const [tag,setTag]=React.useState('All');
  const Fav=window.KerasiDesignSystem_6c0512&&window.KerasiDesignSystem_6c0512.Favicon;
  const row={display:'flex',gap:m?8:12,flexWrap:'wrap',alignItems:'center'};
  const scrollRow={display:'flex',gap:8,overflowX:'auto',scrollbarWidth:'none',flexWrap:m?'nowrap':'wrap',margin:m?'0 -16px':0,padding:m?'0 16px':0};
  const cols=n=>({display:'grid',gridTemplateColumns:'repeat('+n+',minmax(0,1fr))',gap:m?12:16});
  const bsz=m?'lg':'md';
  return <div style={{...kitWrap,paddingTop:m?24:40}}>
    <Overline style={{marginBottom:10}}>Elements · {m?'phone':t?'tablet':'desktop'} layout</Overline>
    <Display size={96}>Elements</Display>
    <p style={{color:'var(--fg-2)',fontSize:m?16:17,maxWidth:560,margin:'16px 0 32px',textWrap:'pretty'}}>Every component as it behaves at this width. Below 640px: full-width actions, 44px touch targets, scrolling chip rows, bottom-sheet dialogs, edge-to-edge toasts.</p>
    <ElSection n="01" title="Buttons" note={m?'stacked · full width':'inline'}>
      <div style={{display:'flex',flexDirection:m?'column':'row',gap:m?10:12,flexWrap:'wrap'}}>
        <Button full={m} size={bsz} iconRight="arrow-right">Primary</Button><Button full={m} size={bsz} variant="secondary">Secondary</Button><Button full={m} size={bsz} variant="ghost">Ghost</Button><Button full={m} size={bsz} variant="quiet" icon="download">Quiet</Button><Button full={m} size={bsz} disabled>Disabled</Button></div>
      <div style={{...row,marginTop:16}}>{['plus','search','share-2','heart','settings'].map(i=><IconButton key={i} icon={i} label={i} size={44} variant={i==='plus'?'solid':'outline'}/>)}</div>
    </ElSection>
    <ElSection n="02" title="Badges & tags" note={m?'chips scroll sideways':null}>
      <div style={{...row,marginBottom:16}}>{['neutral','accent','solid','success','warning','danger','info'].map(x=><Badge key={x} tone={x} dot={x==='success'||x==='danger'}>{x}</Badge>)}</div>
      <div style={scrollRow}>{['All','Engineering','Design','Product','Notes','Archive'].map(x=><Tag key={x} selected={x===tag} onClick={()=>setTag(x)}>{x}</Tag>)}</div>
      <div style={{...row,marginTop:12}}>{['react','tokens','themes'].map(x=><Tag key={x} onRemove={()=>{}}>{x}</Tag>)}</div>
    </ElSection>
    <ElSection n="03" title="Forms" note={m?'1 column':t?'2 columns':'3 columns'}>
      <div style={cols(m?1:t?2:3)}><Input label="Email" placeholder="you@studio.gr" icon="mail"/><Input label="Branch" mono defaultValue="release/spring" error="Branch is protected"/><Select label="Theme" options={['Sakura','Wine','Rust']} hint="Applies to all pages"/></div>
      <div style={{display:'flex',flexDirection:m?'column':'row',gap:m?14:28,marginTop:20,flexWrap:'wrap'}}><Checkbox label="Require review" defaultChecked/><Checkbox label="Sign commits"/><Radio direction={m?'column':'row'} options={['Public','Private']} defaultValue="Public"/></div>
      <div style={{display:'flex',flexDirection:m?'column':'row',gap:m?14:28,marginTop:16}}><Switch label="Dark theme" defaultChecked/><Switch label="Auto-deploy"/></div>
      {m&&<Button full size="lg" style={{marginTop:20}}>Save settings</Button>}
    </ElSection>
    <ElSection n="04" title="Tabs" note="scroll when they overflow">
      <Tabs size={m?'md':'lg'} value={tab} onChange={setTab} items={[{id:'code',label:'Code'},{id:'issues',label:'Issues',count:3},{id:'pulls',label:'Pull requests',count:2},{id:'actions',label:'Actions'},{id:'settings',label:'Settings'}]}/>
    </ElSection>
    <ElSection n="05" title="Cards" note={m?'1 column':t?'2 columns':'3 columns'}>
      <div style={cols(m?1:t?2:3)}>
        <Card variant="cut" padding={m?20:28} eyebrow="01 — Open source" title="Hanami UI" footer={<Button variant="quiet" size="sm" iconRight="arrow-right">Open</Button>}>A component library for quiet, seasonal interfaces.</Card>
        <Card variant="rule" eyebrow="Oct 21 · Engineering" title="Pruning the build pipeline" footer={<Overline>7 min</Overline>}>CI time from eleven minutes to three.</Card>
        <Card variant="inverse" padding={m?20:24} eyebrow="Lantern" title="18.4k visits">+12.6% vs last week</Card>
      </div>
    </ElSection>
    <ElSection n="06" title="Code" note={m?'scrolls sideways':null}>
      <CodeBlock language="ts" title="bloom.ts" code={"export async function bloom(branch: Branch, opts: BloomOptions) {\n  const count = opts.petals ?? 5;\n  await branch.open({ count, at: opts.season.peak });\n}"} highlightLines={[2]} style={m?{margin:'0 -16px',borderLeft:'none',borderRight:'none'}:null}/>
    </ElSection>
    <ElSection n="07" title="Feedback" note={m?'sheet · edge toast':'modal · corner toast'}>
      <div style={{display:'flex',flexDirection:m?'column':'row',gap:m?10:12}}><Button full={m} size={bsz} variant="secondary" onClick={()=>setDlg(true)}>Open dialog</Button><Button full={m} size={bsz} variant="secondary" onClick={()=>{setToast(true);setTimeout(()=>setToast(false),2600);}}>Show toast</Button>{!m&&<Tooltip label="Copy SHA"><IconButton icon="copy" label="Copy" variant="outline" size={42}/></Tooltip>}</div>
      <div style={{display:'grid',gridTemplateColumns:m?'1fr':'minmax(0,1fr) minmax(0,1fr)',gap:12,marginTop:16}}><Toast tone="success" title="Deployed" style={{width:'auto'}}>kerasi.studio is live — 42s</Toast><Toast tone="danger" title="Build failed" style={{width:'auto'}}>Step 3 · lint</Toast></div>
    </ElSection>
    <ElSection n="08" title="Brand" note="mark · favicons">
      <div style={{display:'flex',gap:m?16:28,alignItems:'center',flexWrap:'wrap'}}><Logo size={m?32:40}/><Mark size={m?56:72}/>
        {Fav&&<Fav size={32}/>}{Fav&&<Fav variant="sub" label="H" color="crimson" size={32}/>}{Fav&&<Fav variant="sub" label="B" color="bark" size={32}/>}{Fav&&<Fav variant="sub" label="G" color="graphite" size={32}/>}</div>
    </ElSection>
    <Dialog open={dlg} eyebrow="Branch" title="Delete release/spring?" onClose={()=>setDlg(false)} actions={<><Button full={m} variant="ghost" onClick={()=>setDlg(false)}>Cancel</Button><Button full={m} onClick={()=>setDlg(false)}>Delete</Button></>}>This removes 14 commits not merged into main.</Dialog>
    {toast&&<div style={{position:'fixed',left:m?12:'auto',right:m?12:24,bottom:m?12:24,zIndex:60}}><Toast tone="accent" title="Saved" onClose={()=>setToast(false)} style={m?{width:'auto'}:null}>Theme applied to all pages</Toast></div>}
  </div>;
}
window.ElementsScreen=ElementsScreen;
