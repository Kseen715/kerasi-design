const DS=window.KerasiDesignSystem_6c0512||{};
if(!DS.Button)document.body.insertAdjacentHTML("afterbegin","<p style=\"padding:24px;font-family:monospace\">Design-system bundle not loaded (_ds_bundle.js).</p>");
const {Button,IconButton,Icon,Badge,Tag,Card,Logo,Mark,Tabs,Input,Select,Checkbox,Radio,Switch,Dialog,Toast,Tooltip,CodeBlock}=DS;
const kitWrap={maxWidth:1240,margin:'0 auto',padding:'0 32px'};
function Overline({children,style}){return <div style={{fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'.14em',textTransform:'uppercase',color:'var(--fg-3)',...style}}>{children}</div>;}
function Display({size=88,children,style,as='h1'}){const T=as;return <T style={{fontFamily:'var(--font-display)',fontWeight:600,fontSize:size,lineHeight:.9,letterSpacing:'-.01em',textTransform:'uppercase',margin:0,textWrap:'balance',...style}}>{children}</T>;}
function SectionHead({index,label,title,action}){return <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',gap:24,borderTop:'2px solid var(--fg-1)',paddingTop:16,marginBottom:32}}>
  <div><Overline style={{marginBottom:10}}>{index} — {label}</Overline><Display size={44} as="h2">{title}</Display></div>{action}</div>;}
function Placeholder({label,ratio='4/3',tone='var(--bg-sunken)',style}){return <div style={{aspectRatio:ratio,background:'repeating-linear-gradient(135deg,'+tone+' 0 14px,color-mix(in srgb,'+tone+' 85%,var(--fg-1)) 14px 15px)',display:'flex',alignItems:'flex-end',padding:12,...style}}><span style={{fontFamily:'var(--font-mono)',fontSize:10,letterSpacing:'.12em',textTransform:'uppercase',color:'var(--fg-2)',background:'var(--bg)',padding:'3px 6px'}}>{label}</span></div>;}
function Footer({family}){return <footer style={{borderTop:'1px solid var(--line)',marginTop:96}}><div style={{...kitWrap,display:'flex',justifyContent:'space-between',alignItems:'center',padding:'32px 32px',flexWrap:'wrap',gap:16}}>
  <Logo size={28}/><Overline>© 2026 Kerasi · Grown slowly, cut sharp</Overline><div style={{display:'flex',gap:4}}><IconButton icon="github" label="GitHub"/><IconButton icon="rss" label="RSS"/><IconButton icon="mail" label="Mail"/></div></div></footer>;}
Object.assign(window,{DS,Button,IconButton,Icon,Badge,Tag,Card,Logo,Mark,Tabs,Input,Select,Checkbox,Radio,Switch,Dialog,Toast,Tooltip,CodeBlock,kitWrap,Overline,Display,SectionHead,Placeholder,Footer});
