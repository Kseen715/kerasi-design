import React from 'react';
const CDN='https://cdn.jsdelivr.net/npm/lucide-static@0.469.0/icons/';
const cache={};
function load(name){
  if(!cache[name])cache[name]=fetch(CDN+name+'.svg').then(r=>r.ok?r.text():'').then(t=>t.replace(/<!--[\s\S]*?-->/g,'').replace(/<svg[^>]*>/,'').replace(/<\/svg>\s*$/,'')).catch(()=>'');
  return cache[name];
}
export function Icon({name,size=18,color='currentColor',style,title,strokeWidth=1.75,...rest}){
  const [inner,setInner]=React.useState('');
  React.useEffect(()=>{let live=true;load(name).then(t=>{if(live)setInner(t);});return()=>{live=false;};},[name]);
  return <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter"
    role={title?'img':undefined} aria-label={title} aria-hidden={title?undefined:true} {...rest}
    style={{display:'inline-block',flex:'none',color,...style}} dangerouslySetInnerHTML={{__html:inner}}/>;
}
