const {test} = require('node:test');
const assert = require('node:assert/strict');
const {readFileSync} = require('node:fs');
const {runInNewContext} = require('node:vm');
const path = require('node:path');
const html=readFileSync(path.join(__dirname,'../docs/host-script.html'),'utf8');
const source=html.match(/<script>\s*([\s\S]*?)<\/script>/)[1];
const ids=[...html.matchAll(/<section id="([^"]+)" class="cue"/g)].map(x=>x[1]);
function guide(linked,start='page1') {
  const elements={};
  const nodes=ids.map(id=>({id,hidden:true,querySelector:()=>({textContent:id,focus(){}})}));
  const intro={hidden:false};
  for(const id of ['jump','prev','next','progress','larger','words','print'])elements[id]={setAttribute(){}};
  const document={querySelectorAll:()=>nodes,querySelector:()=>intro,getElementById:id=>elements[id],
    body:{classList:{contains:()=>linked}},documentElement:{style:{setProperty(){}}},addEventListener(){}};
  const location={hash:'#'+start};
  runInNewContext(source,{document,location,window:{scrollTo(){},print(){}},history:{replaceState:(_,__,hash)=>{location.hash=hash;}}});
  return {elements,current:()=>nodes.find(n=>!n.hidden).id};
}
test('one Next changes the current journal cue by exactly one page',()=>{
  const g=guide(true);g.elements.next.onclick();assert.equal(g.current(),'page2');
  g.elements.prev.onclick();assert.equal(g.current(),'page1');
});
test('linked journal flow leaves optional Matchday out of Next and Previous',()=>{
  const g=guide(true,'page8');g.elements.next.onclick();assert.equal(g.current(),'page9');
  g.elements.prev.onclick();assert.equal(g.current(),'page8');
});
test('standalone guide retains every stop and explicit Matchday remains selectable',()=>{
  const g=guide(false,'page8');g.elements.next.onclick();assert.equal(g.current(),'matchday');
  const linked=guide(true);linked.elements.jump.value='matchday';linked.elements.jump.onchange();assert.equal(linked.current(),'matchday');
});
test('Vault remains before Draft Day, then optional chosen-player discoveries',()=>{
  const g=guide(true,'page12');g.elements.next.onclick();assert.equal(g.current(),'draft');
  g.elements.next.onclick();assert.equal(g.current(),'after-cards');assert.equal(g.elements.next.disabled,true);
});
