'use strict';
const modal=document.getElementById('overlay'),frame=document.getElementById('experience'),title=document.getElementById('modalTitle');
const labels={slides:'The Gunners Journal',draft:'Draft Day',scout:'Player Scouting Academy',captains:'Captain’s Mystery Vault',cinema:'Arsenal Cinema'};
let previous=null,activeDialog=null;
function setBackgroundInert(dialog, enabled){[...document.body.children].forEach(el=>{if(el!==dialog&&el.tagName!=='SCRIPT')el.inert=enabled;});}
function openDialog(dialog,trigger,focus){previous=trigger;activeDialog=dialog;dialog.hidden=false;setBackgroundInert(dialog,true);document.body.style.overflow='hidden';focus.focus();}
function closeDialog(){if(!activeDialog)return;const dialog=activeDialog;dialog.hidden=true;activeDialog=null;setBackgroundInert(dialog,false);document.body.style.overflow='';if(dialog===modal)frame.src='about:blank';previous?.focus();}
document.querySelectorAll('[data-room]').forEach(b=>b.addEventListener('click',()=>{const room=b.dataset.room;title.textContent=labels[room];frame.src='legacy.html?v=editorial-1#'+(room==='slides'?'slides/1':room);openDialog(modal,b,document.getElementById('close'));}));
document.getElementById('close').addEventListener('click',closeDialog);
window.addEventListener('message',e=>{if(e.origin===location.origin&&e.source===frame.contentWindow&&e.data?.type==='arsenal:close')closeDialog();});
document.addEventListener('keydown',e=>{
 if(e.key==='Escape'&&activeDialog){e.preventDefault();closeDialog();}
 if(e.key==='Tab'&&activeDialog&&activeDialog!==modal){const targets=[...activeDialog.querySelectorAll('button,a,input,[tabindex="0"]')].filter(el=>!el.disabled);if(!targets.length)return;const first=targets[0],last=targets.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}
});
const artProbe=new Image();artProbe.onload=()=>document.querySelector('.world').classList.add('art-ready');artProbe.src='arsenal-academy-clubhouse-v3.webp';
const egg=document.getElementById('egg');
document.getElementById('knights').addEventListener('click',e=>openDialog(egg,e.currentTarget,document.getElementById('closeEgg')));
document.getElementById('closeEgg').addEventListener('click',closeDialog);
const achievementData={
 men:['2025/26 Premier League Champions','Arsenal’s men lifted the Premier League trophy in 2026, ending a 22-year wait for a league championship.','Teamwork question: What does it take to keep trying for something for 22 years?'],
 invincibles:['The Invincibles · 2003/04','Arsenal finished all 38 Premier League matches without a single defeat: 26 wins and 12 draws.','Challenge: Can you name a sport where teamwork matters as much as individual skill?'],
 europe:['Arsenal Women · Champions of Europe','Arsenal Women won Europe in 2007 (UEFA Women’s Cup) and again in 2025 (UEFA Women’s Champions League). They defeated Barcelona 1–0 in the 2025 final.','Big moment: Stina Blackstenius scored the 2025 final’s winning goal.'],
 women:['Arsenal Women · 15 League Titles','Arsenal Women have won the English women’s top-flight league 15 times, most recently in 2018/19.','A club can have more than one great team and more than one kind of champion.']};
const achievementModal=document.getElementById('achievement');
document.querySelectorAll('[data-achievement]').forEach(b=>b.addEventListener('click',()=>{const [name,story,fact]=achievementData[b.dataset.achievement];document.getElementById('achievementTitle').textContent=name;document.getElementById('achievementBody').textContent=story;document.getElementById('achievementFact').textContent=fact;openDialog(achievementModal,b,document.getElementById('closeAchievement'));}));
document.getElementById('closeAchievement').addEventListener('click',closeDialog);
