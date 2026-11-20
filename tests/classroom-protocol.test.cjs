const {test} = require('node:test');
const assert = require('node:assert/strict');
const {readFileSync} = require('node:fs');
const {runInNewContext} = require('node:vm');
const path = require('node:path');

// Run the actual classroom-window controller with a tiny browser boundary.
// These checks cover source isolation and connection recovery, not visual layout.
function classroom() {
  const events = {}, sent = [], drawn = [], timers = [];
  const opener = {closed:false, postMessage:(data,origin)=>sent.push({data,origin})};
  const child = {postMessage:(data,origin)=>drawn.push({data,origin})};
  const nodes = {
    classroomStage:{contentWindow:child}, classroomStatus:{textContent:''},
    classroomNotice:{hidden:false,textContent:''}, classroomFullscreen:{addEventListener(){}},
  };
  const document = {getElementById:id=>nodes[id],querySelector:()=>({getBoundingClientRect:()=>({height:80})}),
    addEventListener(){},documentElement:{style:{setProperty(){}}},body:{classList:{toggle(){},remove(){},contains(){return false;},add(){}}}};
  const window = {opener,addEventListener:(name,fn)=>events[name]=fn};
  runInNewContext(readFileSync(path.join(__dirname,'../classroom.js'),'utf8'),{
    window,document,location:{origin:'https://example.test'},Date,
    setInterval:fn=>timers.push(fn), ResizeObserver:class {observe(){}},
  });
  const receive = (data,source=opener,origin='https://example.test')=>events.message({data,source,origin});
  return {opener,child,nodes,sent,drawn,timers,receive};
}
const view = {room:'slides',hash:'#slides/3',html:'<section>The Invincibles</section>',scroll:0};
test('accepts only the exact presenter window at the same origin',()=>{
  const c=classroom();
  c.receive({type:'arsenal:classroom:stage-ready'},c.child);
  c.receive({type:'arsenal:presenter:render',view},{},'https://example.test');
  c.receive({type:'arsenal:presenter:render',view},c.opener,'https://other.test');
  assert.equal(c.drawn.length,0);
  c.receive({type:'arsenal:presenter:render',view});
  assert.equal(c.drawn.length,1);
  assert.equal(c.drawn[0].origin,'https://example.test');
  assert.deepEqual(c.drawn[0].data.view,view);
});
test('waits for the stage and acknowledges the actual rendered visual',()=>{
  const c=classroom();
  c.receive({type:'arsenal:presenter:render',view});
  assert.equal(c.drawn.length,0);
  assert.equal(c.sent.filter(x=>x.data.type==='arsenal:classroom:ack').length,0);
  c.receive({type:'arsenal:classroom:stage-ready'},c.child);
  assert.equal(c.drawn.length,1);
  c.receive({type:'arsenal:classroom:drawn'},c.child);
  assert.equal(c.sent.at(-1).data.label,'Journal page 3 / 12');
});
test('holds the visual on disconnect and clears the notice after reconnection',()=>{
  const c=classroom();
  c.receive({type:'arsenal:classroom:stage-ready'},c.child);
  c.receive({type:'arsenal:presenter:render',view});
  c.receive({type:'arsenal:classroom:drawn'},c.child);
  c.receive({type:'arsenal:presenter:disconnected'});
  c.timers[0]();
  assert.equal(c.nodes.classroomNotice.hidden,false);
  assert.match(c.nodes.classroomNotice.textContent,/last visual/);
  assert.equal(c.drawn.length,1);
  c.receive({type:'arsenal:presenter:pulse'});
  assert.equal(c.nodes.classroomNotice.hidden,true);
  assert.equal(c.drawn.length,1);
  assert.equal(c.sent.at(-1).data.type,'arsenal:classroom:ack');
});
test('replays the same current visual when the classroom stage reloads',()=>{
  const c=classroom();
  c.receive({type:'arsenal:classroom:stage-ready'},c.child);
  const draft={room:'draft',hash:'#draft',html:'<section>PICK 9 OF 21 · 17</section>',scroll:.2};
  c.receive({type:'arsenal:presenter:render',view:draft});
  c.receive({type:'arsenal:classroom:stage-ready'},c.child);
  assert.equal(c.drawn.length,2);
  assert.deepEqual(c.drawn[1].data.view,draft);
  assert.match(c.nodes.classroomStatus.textContent,/Draft Day/);
});
