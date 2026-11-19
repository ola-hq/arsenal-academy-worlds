'use strict';
(() => {
  const embedded = window.parent !== window;
  const applyChildState = state => {
    document.body.classList.toggle('classroom-view',state.focus);
    document.body.classList.toggle('experience-focus',state.focus);
  };
  if(embedded){
    document.body.classList.add('is-embedded');
    window.addEventListener('message',event=>{
      if(event.origin===location.origin&&event.source===parent&&event.data?.type==='arsenal:experience-state')applyChildState(event.data.state);
    });
    try{if(parent.AcademyExperience)applyChildState(parent.AcademyExperience.state());}catch{}
    document.addEventListener('pointerdown',()=>{try{parent.AcademyExperience?.closeOptions();}catch{}});
    document.addEventListener('keydown',event=>{
      if(event.key!=='Escape'||document.querySelector('dialog[open]')||document.querySelector('#teacherNotes:not([hidden])'))return;
      try{if(parent.AcademyExperience?.state().focus){event.preventDefault();event.stopImmediatePropagation();parent.AcademyExperience.toggleFocus();}}catch{}
    },true);
    return;
  }
  let focus=false,nativeSeen=false,notice='',labels=false;
  const state=()=>({focus,nativeFullscreen:Boolean(document.fullscreenElement||document.webkitFullscreenElement),labels});
  const slots=[...document.querySelectorAll('[data-experience-controls]')];
  slots.forEach(slot=>{
    slot.classList.add('experience-controls');
    if(slot.dataset.experienceControls==='compact'){
      slot.innerHTML='<button type="button" class="exp-button" data-exp-focus aria-pressed="false">Full screen</button>';
      return;
    }
    slot.innerHTML=`<button type="button" class="exp-button" data-exp-focus aria-pressed="false">Full screen</button><details class="exp-settings"><summary>Options</summary><div class="exp-menu"><strong class="exp-menu-title">Make it your matchday</strong>${document.querySelector('.world')?'<button type="button" data-exp-labels class="exp-button" aria-pressed="false">Show room labels</button>':''}<p>Esc exits full screen. In the journal, use the arrow keys to turn pages.</p><button type="button" class="exp-button" data-exp-done>Done</button></div></details><span class="exp-feedback" role="status" hidden></span>`;
  });
  function broadcast(){
    const current=state();
    document.body.classList.toggle('experience-focus',focus);document.body.classList.toggle('classroom-view',focus);document.body.classList.toggle('show-room-labels',labels);
    document.querySelectorAll('[data-exp-focus]').forEach(b=>{b.textContent=focus?(current.nativeFullscreen?'Exit full screen':'Exit focus view'):'Full screen';b.setAttribute('aria-pressed',String(focus));b.setAttribute('aria-label',b.textContent);});
    document.querySelectorAll('[data-exp-labels]').forEach(b=>{b.textContent=labels?'Hide room labels':'Show room labels';b.setAttribute('aria-pressed',String(labels));});
    document.querySelectorAll('.exp-feedback').forEach(el=>{el.hidden=!notice;el.replaceChildren();if(notice){const text=document.createElement('span');text.textContent=notice;const close=document.createElement('button');close.type='button';close.dataset.expDismiss='';close.textContent='Dismiss';el.append(text,close);}});
    const frame=document.querySelector('#experience');if(frame?.contentWindow)frame.contentWindow.postMessage({type:'arsenal:experience-state',state:current},location.origin);
  }
  function toggleFocus(){
    if(focus){focus=false;notice='';broadcast();const exit=document.exitFullscreen||document.webkitExitFullscreen;if((document.fullscreenElement||document.webkitFullscreenElement)&&exit)Promise.resolve(exit.call(document)).catch(()=>{});return;}
    focus=true;notice='';broadcast();
    const request=document.documentElement.requestFullscreen||document.documentElement.webkitRequestFullscreen;
    if(!request||document.fullscreenEnabled===false){notice='Focus view is on. Use your browser’s full-screen control to hide its frame.';broadcast();return;}
    try{Promise.resolve(request.call(document.documentElement,{navigationUI:'hide'})).then(()=>{nativeSeen=true;broadcast();}).catch(()=>{if(focus){notice='Focus view is on. Your browser blocked full screen; its own full-screen control can hide the frame.';broadcast();}});}catch{notice='Focus view is on. Use your browser’s full-screen control to hide its frame.';broadcast();}
  }
  function closeOptions(){let closed=false;document.querySelectorAll('.exp-settings').forEach(el=>{if(el.open){el.open=false;closed=true;}});return closed;}
  window.AcademyExperience={state,toggleFocus,closeOptions};
  document.addEventListener('click',event=>{
    if(event.target.closest('[data-exp-focus]'))toggleFocus();
    if(event.target.closest('[data-exp-labels]')){labels=!labels;broadcast();}
    if(event.target.closest('[data-exp-dismiss]')){notice='';broadcast();}
    if(event.target.closest('[data-exp-done]'))event.target.closest('details').open=false;
  });
  document.addEventListener('toggle',event=>{if(event.target.matches('.exp-settings')&&event.target.open)document.querySelectorAll('.exp-settings').forEach(other=>{if(other!==event.target)other.open=false;});},true);
  document.addEventListener('click',event=>{if(!event.target.closest('.exp-settings'))document.querySelectorAll('.exp-settings').forEach(el=>el.open=false);});
  function fullscreenChanged(){if(document.fullscreenElement||document.webkitFullscreenElement){nativeSeen=true;focus=true;}else if(nativeSeen){nativeSeen=false;focus=false;notice='';}broadcast();}
  document.addEventListener('fullscreenchange',fullscreenChanged);document.addEventListener('webkitfullscreenchange',fullscreenChanged);
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&closeOptions()){event.preventDefault();event.stopImmediatePropagation();return;}if(event.key==='Escape'&&focus&&!document.querySelector('dialog[open]')){event.preventDefault();event.stopImmediatePropagation();toggleFocus();}},true);
  const frame=document.querySelector('#experience');if(frame)frame.addEventListener('load',broadcast);
  if('ResizeObserver' in window){const observer=new ResizeObserver(entries=>entries.forEach(entry=>document.documentElement.style.setProperty(entry.target.classList.contains('overlaybar')?'--overlay-toolbar-height':'--home-toolbar-height',Math.ceil(entry.target.getBoundingClientRect().height)+'px')));document.querySelectorAll('.top,.overlaybar').forEach(el=>observer.observe(el));}
  broadcast();
})();
