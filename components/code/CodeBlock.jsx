import React from 'react';
import { Icon } from '../core/Icon.jsx';
const W=s=>new Set(s.split(' '));
const KW={
  js:W('const let var function return if else for while do switch case break continue new class extends import from export default async await try catch finally throw typeof instanceof in of this super yield null undefined true false void delete interface type enum implements public private protected readonly as keyof satisfies'),
  py:W('def class return if elif else for while in not and or is import from as with try except finally raise lambda yield pass break continue global nonlocal None True False async await self match case'),
  rs:W('fn let mut pub struct enum impl trait use mod crate self Self super match if else for while loop return break continue as where move ref const static unsafe async await dyn true false Some None Ok Err in'),
  go:W('package import func return if else for range switch case default break continue go defer select chan map struct interface type var const nil true false'),
  sql:W('select from where join left right inner outer on group by order having limit offset insert into values update set delete create table index primary key foreign references not null and or as distinct count sum avg min max case when then else end with returning desc asc interval now'),
  sh:W('if then else fi for in do done while case esac function return export local echo cd sudo'),
};
const ALIAS={javascript:'js',ts:'js',typescript:'js',jsx:'js',tsx:'js',python:'py',rust:'rs',golang:'go',bash:'sh',shell:'sh',zsh:'sh',yml:'yaml',htm:'html',xml:'html'};
const LABEL={js:'TypeScript',py:'Python',rs:'Rust',go:'Go',sql:'SQL',sh:'Shell',css:'CSS',html:'HTML',json:'JSON',yaml:'YAML',diff:'Diff',text:'Text'};
function scan(src,rules){const out=[];let i=0;
  while(i<src.length){let hit=false;
    for(const [re,type] of rules){re.lastIndex=i;const m=re.exec(src);if(m&&m.index===i&&m[0].length){out.push([typeof type==='function'?type(m[0],src,i+m[0].length,out):type,m[0]]);i+=m[0].length;hit=true;break;}}
    if(!hit){out.push(['plain',src[i]]);i++;}}
  return out;}
const R=(s,f='y')=>new RegExp(s,f);
const nextCh=(src,j)=>{while(src[j]===' ')j++;return src[j];};
function ident(kw,ci){return (w,src,j,out)=>{const k=ci?w.toLowerCase():w;if(kw&&kw.has(k))return 'keyword';const prev=out.length&&out[out.length-1][1];const n=nextCh(src,j);
  if(prev==='.'||prev==='?.')return n==='('?'function':'property';if(n==='('||n==='!')return 'function';if(/^[A-Z]/.test(w)&&!ci)return 'type';return 'plain';};}
const STR=[R('"""[\\s\\S]*?"""'),R("'''[\\s\\S]*?'''"),R('"(?:\\\\.|[^"\\\\\\n])*"'),R("'(?:\\\\.|[^'\\\\\\n])*'"),R('`(?:\\\\.|[^`\\\\])*`')];
const NUM=R('(?:0x[0-9a-fA-F]+|\\d[\\d_]*(?:\\.\\d+)?(?:e[+-]?\\d+)?)\\b');
function codeRules(lang){const c=lang==='py'||lang==='sh'?R('#.*'):lang==='sql'?R('--.*'):R('//.*|/\\*[\\s\\S]*?\\*/');
  const r=[[c,'comment'],...STR.map(s=>[s,'string']),[NUM,'number']];
  if(lang==='py')r.push([R('@[\\w.]+'),'attr']);
  if(lang==='rs')r.push([R("'[a-z]\\b"),'type'],[R('#!?\\[[^\\]]*\\]'),'attr']);
  if(lang==='sh')r.push([R('\\$\\{?[\\w@#?]+\\}?'),'property'],[R('(?<=\\s)--?[\\w-]+'),'attr'],[R('^[\\w.-]+|(?<=(?:\\||&&|;)\\s*)[\\w.-]+','my'),'function']);
  if(lang==='js')r.push([R('@\\w+'),'attr']);
  r.push([R('[A-Za-z_$][\\w$]*'),ident(KW[lang],lang==='sql')],[R('=>|->|::|[=+\\-*/%<>!&|^~?:]+'),'operator'],[R('[{}()\\[\\];,.]'),'punct']);return r;}
function htmlTokens(src){const out=[];let i=0,inTag=false;
  const rules=()=>inTag?[[R('\\s+'),'plain'],[R('/?>'),'punct'],[R('[\\w:@.-]+(?=\\s*=)|[\\w:@.-]+'),'attr'],[R('='),'operator'],[STR[2],'string'],[STR[3],'string']]:[[R('<!--[\\s\\S]*?-->'),'comment'],[R('<!doctype[^>]*>','yi'),'keyword'],[R('</?[\\w-]+'),'tag'],[R('&\\w+;'),'number'],[R('[^<&]+'),'plain']];
  while(i<src.length){let hit=false;for(const [re,t] of rules()){re.lastIndex=i;const m=re.exec(src);if(m&&m.index===i&&m[0].length){out.push([t,m[0]]);if(t==='tag')inTag=true;if(inTag&&t==='punct')inTag=false;i+=m[0].length;hit=true;break;}}if(!hit){out.push(['plain',src[i]]);i++;}}
  return out.map(([t,v])=>t==='tag'?null:[t,v]).flatMap((x,k)=>x?[x]:(()=>{const v=out[k][1];const p=v.startsWith('</')?2:1;return [['punct',v.slice(0,p)],['tag',v.slice(p)]];})());}
function cssTokens(src){let depth=0;return scan(src,[[R('/\\*[\\s\\S]*?\\*/'),'comment'],[STR[2],'string'],[STR[3],'string'],[R('@[\\w-]+'),'keyword'],
  [R('[{}]'),(v)=>{depth+=v==='{'?1:-1;return 'punct';}],[R('--[\\w-]+'),'type'],[R('#[0-9a-fA-F]{3,8}\\b'),'number'],[R('-?\\d*\\.?\\d+(?:px|rem|em|%|ms|s|vh|vw|deg|fr)?'),'number'],
  [R('[\\w-]+(?=\\()'),'function'],[R('[\\w-]+(?=\\s*:(?!:))'),()=>depth>0?'property':'tag'],[R('::?[\\w-]+'),()=>depth>0?'plain':'keyword'],[R('[.#][\\w-]+'),()=>depth>0?'plain':'tag'],[R('[\\w-]+'),()=>depth>0?'plain':'tag'],[R('[;:,()>+~*]'),'punct']]);}
function jsonTokens(src){return scan(src,[[R('"(?:\\\\.|[^"\\\\])*"(?=\\s*:)'),'property'],[STR[2],'string'],[NUM,'number'],[R('-'),'number'],[R('\\b(?:true|false|null)\\b'),'keyword'],[R('[{}\\[\\],:]'),'punct']]);}
function yamlTokens(src){return scan(src,[[R('#.*'),'comment'],[R('[\\w.-]+(?=\\s*:(?:\\s|$))','my'),'property'],[STR[2],'string'],[STR[3],'string'],[NUM,'number'],[R('\\b(?:true|false|null|yes|no)\\b'),'keyword'],[R('[-:|>]'),'punct']]);}
export function highlight(code,language){
  const lang=ALIAS[language]||language||'text';
  const toks=lang==='html'?htmlTokens(code):lang==='css'?cssTokens(code):lang==='json'?jsonTokens(code):lang==='yaml'?yamlTokens(code):KW[lang]?scan(code,codeRules(lang)):[['plain',code]];
  const lines=[[]];for(const [t,v] of toks){const parts=v.split('\n');parts.forEach((p,k)=>{if(k)lines.push([]);if(p)lines[lines.length-1].push([t,p]);});}
  return lines;}
const STY={comment:{color:'var(--syn-comment)',fontStyle:'italic',fontWeight:500},keyword:{color:'var(--syn-keyword)',fontWeight:700},string:{color:'var(--syn-string)'},number:{color:'var(--syn-number)'},function:{color:'var(--syn-function)',fontWeight:700},type:{color:'var(--syn-type)',fontWeight:600},property:{color:'var(--syn-property)'},operator:{color:'var(--syn-operator)'},punct:{color:'var(--syn-punct)'},tag:{color:'var(--syn-tag)',fontWeight:700},attr:{color:'var(--syn-attr)'},plain:null};
export function CodeBlock({code='',language='text',title,lineNumbers=true,highlightLines=[],copy=true,theme,maxHeight,wrap,style}){
  const lang=ALIAS[language]||language;
  const [copied,setCopied]=React.useState(false);
  const isDiff=lang==='diff';
  const lines=React.useMemo(()=>isDiff?code.replace(/\n$/,'').split('\n').map(l=>[['plain',l]]):highlight(code.replace(/\n$/,''),lang),[code,lang]);
  const hl=new Set(highlightLines);
  const doCopy=()=>{navigator.clipboard&&navigator.clipboard.writeText(code);setCopied(true);setTimeout(()=>setCopied(false),1400);};
  const gutter=String(lines.length).length;
  return <div data-theme={theme} style={{background:'var(--syn-bg)',color:'var(--syn-fg)',border:'1px solid var(--syn-border)',fontFamily:'var(--font-mono)',fontSize:13,fontWeight:500,lineHeight:1.7,minWidth:0,...style}}>
    {(title||copy)&&<div style={{display:'flex',alignItems:'center',gap:10,height:38,padding:'0 8px 0 14px',borderBottom:'1px solid var(--syn-border)'}}>
      <span style={{width:8,height:8,borderRadius:'50%',background:'var(--syn-keyword)'}}/>
      <span style={{fontSize:12,color:'var(--syn-fg)',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{title}</span>
      <span style={{flex:1}}/>
      <span style={{fontSize:10,letterSpacing:'.14em',textTransform:'uppercase',color:'var(--syn-comment)'}}>{LABEL[lang]||lang}</span>
      {copy&&<button onClick={doCopy} aria-label="Copy code" title="Copy" style={{display:'inline-flex',alignItems:'center',justifyContent:'center',width:28,height:28,background:'transparent',border:'none',color:copied?'var(--syn-string)':'var(--syn-comment)',cursor:'pointer'}}><Icon name={copied?'check':'copy'} size={14}/></button>}
    </div>}
    <pre style={{margin:0,padding:'12px 0',overflow:'auto',maxHeight,whiteSpace:wrap?'pre-wrap':'pre'}}><code style={{display:'block',minWidth:'max-content'}}>
      {lines.map((ln,i)=>{const raw=isDiff?ln[0][1]:'';const d=isDiff?(raw.startsWith('+')?'added':raw.startsWith('-')?'removed':raw.startsWith('@@')?'meta':null):null;
        return <div key={i} style={{display:'flex',padding:'0 16px 0 0',background:hl.has(i+1)?'var(--syn-line-hl)':d==='added'?'var(--syn-added)':d==='removed'?'var(--syn-removed)':'transparent',boxShadow:hl.has(i+1)?'inset 2px 0 0 var(--syn-keyword)':'none'}}>
          {lineNumbers&&<span style={{flex:'none',width:gutter*8+28,paddingRight:14,textAlign:'right',color:'var(--syn-lineno)',userSelect:'none'}}>{i+1}</span>}
          {!lineNumbers&&<span style={{width:16,flex:'none'}}/>}
          <span>{isDiff?<span style={d==='meta'?STY.keyword:d==='added'?{color:'var(--syn-string)'}:d==='removed'?{color:'var(--syn-keyword)'}:null}>{raw||' '}</span>:ln.length?ln.map(([t,v],k)=><span key={k} style={STY[t]||undefined}>{v}</span>):' '}</span>
        </div>;})}
    </code></pre>
  </div>;
}
