const galleryItems=[
  {id:1,t:'Wine',k:'Palette',theme:'wine',r:'3/4',swatch:true},
  {id:2,t:'Blossom study',k:'Photo',r:'4/3'},
  {id:3,t:'Rust',k:'Palette',theme:'rust',r:'1/1',swatch:true},
  {id:4,t:'Studio, morning',k:'Photo',r:'3/4'},
  {id:5,t:'The mark',k:'Brand',r:'1/1',mark:true},
  {id:6,t:'Sakura',k:'Palette',theme:'sakura',r:'4/3',swatch:true},
  {id:7,t:'Lantern UI',k:'Screens',r:'16/10'},
  {id:8,t:'Bark docs',k:'Screens',r:'4/3'},
  {id:9,t:'Wine dark',k:'Palette',theme:'wine-dark',r:'3/4',swatch:true},
];
function GalleryTile({it,family,onOpen}){
  const [h,setH]=React.useState(false);
  let inner;
  if(it.swatch)inner=<div data-theme={it.theme} style={{aspectRatio:it.r,background:'var(--accent)',color:'var(--accent-fg)',display:'flex',flexDirection:'column',justifyContent:'space-between',padding:20}}><Overline style={{color:'inherit',opacity:.75}}>{it.theme}</Overline><Display size={48} as="div">{it.t}</Display></div>;
  else if(it.mark)inner=<div style={{aspectRatio:it.r,background:'var(--bg-sunken)',display:'flex',alignItems:'center',justifyContent:'center'}}><Mark size={200}/></div>;
  else inner=<Placeholder label={it.k+' — drop image'} ratio={it.r}/>;
  return <figure onClick={()=>onOpen(it)} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{margin:'0 0 20px',breakInside:'avoid',cursor:'zoom-in'}}>
    <div style={{transition:'transform var(--dur-3) var(--ease-out)',transform:h?'scale(.985)':'none'}}>{inner}</div>
    <figcaption style={{display:'flex',justifyContent:'space-between',marginTop:10,fontSize:14}}><span style={{fontWeight:600}}>{it.t}</span><Overline>{it.k}</Overline></figcaption></figure>;
}
function GalleryScreen({family}){
  const [k,setK]=React.useState('All');const [open,setOpen]=React.useState(null);
  const kinds=['All','Palette','Photo','Brand','Screens'];
  const items=galleryItems.filter(i=>k==='All'||i.k===k);
  return <div style={{...kitWrap,paddingTop:40}}>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:24,flexWrap:'wrap',marginBottom:40}}>
      <div><Overline style={{marginBottom:10}}>Gallery · {galleryItems.length} works</Overline><Display size={96}>Gallery</Display></div>
      <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>{kinds.map(x=><Tag key={x} selected={x===k} onClick={()=>setK(x)}>{x}</Tag>)}</div>
    </div>
    <div style={{columns:'3 280px',columnGap:20}}>{items.map(it=><GalleryTile key={it.id} it={it} family={family} onOpen={setOpen}/>)}</div>
    <Dialog open={!!open} width={720} eyebrow={open&&open.k} title={open&&open.t} onClose={()=>setOpen(null)} actions={<Button variant="secondary" size="sm" icon="download">Download</Button>}>
      {open&&(open.swatch?<div data-theme={open.theme} style={{height:320,background:'var(--accent)'}}/>:open.mark?<div style={{display:'flex',justifyContent:'center',background:'var(--bg-sunken)',padding:24}}><Mark size={280}/></div>:<Placeholder label="Image" ratio="16/9"/>)}
    </Dialog>
  </div>;
}
window.GalleryScreen=GalleryScreen;
