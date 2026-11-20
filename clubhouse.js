'use strict';
const modal=document.getElementById('overlay'),frame=document.getElementById('experience'),title=document.getElementById('modalTitle');
const labels={matchday:'Arsenal Matchday',slides:'The Arsenal Academy Journal',draft:'Draft Day',scout:'Player Scouting Academy',captains:'Captain’s Mystery Vault',cinema:'Arsenal Cinema'};
let previous=null,activeDialog=null;
function setBackgroundInert(dialog, enabled){[...document.body.children].forEach(el=>{if(el!==dialog&&el.tagName!=='SCRIPT')el.inert=enabled;});}
function openDialog(dialog,trigger,focus){previous=trigger;activeDialog=dialog;dialog.hidden=false;setBackgroundInert(dialog,true);document.body.style.overflow='hidden';focus.focus();}
function closeDialog(){if(!activeDialog)return;const dialog=activeDialog;dialog.hidden=true;activeDialog=null;setBackgroundInert(dialog,false);document.body.style.overflow='';if(dialog===modal){frame.src='about:blank';}previous?.focus();}
document.querySelectorAll('[data-room]').forEach(b=>b.addEventListener('click',()=>{const room=b.dataset.room;title.textContent=labels[room];frame.src='legacy.html?v=editorial-14#'+(room==='slides'?'slides/1':room);openDialog(modal,b,document.getElementById('close'));}));
document.getElementById('close').addEventListener('click',closeDialog);
window.addEventListener('message',e=>{if(e.origin!==location.origin||e.source!==frame.contentWindow)return;if(e.data?.type==='arsenal:close')closeDialog();if(e.data?.type==='arsenal:room'&&labels[e.data.room])title.textContent=labels[e.data.room];});
document.addEventListener('keydown',e=>{
 if(e.key==='Escape'&&activeDialog){e.preventDefault();closeDialog();}
 if(e.key==='Tab'&&activeDialog&&activeDialog!==modal){const targets=[...activeDialog.querySelectorAll('button,a,input,[tabindex="0"]')].filter(el=>!el.disabled);if(!targets.length)return;const first=targets[0],last=targets.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}
});
const artProbe=new Image();artProbe.onload=()=>document.querySelector('.world').classList.add('art-ready');artProbe.src='art/clubhouse-classroom-v4.jpg';
const egg=document.getElementById('egg');
document.querySelectorAll('[data-knights]').forEach(b=>b.addEventListener('click',e=>openDialog(egg,e.currentTarget,document.getElementById('knightsTitle'))));
document.getElementById('closeEggTop').addEventListener('click',closeDialog);
document.getElementById('closeEgg').addEventListener('click',closeDialog);
