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
  let focus=false,nativeSeen=false,wantedSound=false,mode='stadium',volume=15,notice='',labels=false,playGeneration=0;
  const pauses=new Set();
  const audio=document.createElement('audio');audio.id='academyAmbience';audio.loop=true;audio.preload='none';audio.volume=volume/100;audio.setAttribute('aria-hidden','true');document.body.append(audio);
  const modeName=()=>mode==='calm'?'Calm music':'Stadium ambience';
  const state=()=>({focus,nativeFullscreen:Boolean(document.fullscreenElement||document.webkitFullscreenElement),soundWanted:wantedSound,soundPlaying:wantedSound&&!audio.paused,mode,volume,pausedFor:[...pauses],labels});
  const slots=[...document.querySelectorAll('[data-experience-controls]')];
  slots.forEach((slot,index)=>{
    slot.classList.add('experience-controls');
    if(slot.dataset.experienceControls==='compact'){
      slot.innerHTML='<button type="button" class="exp-button" data-exp-focus aria-pressed="false">Full screen</button><button type="button" class="exp-button" data-exp-sound aria-pressed="false">Sound off</button>';
      return;
    }
    slot.innerHTML=`<button type="button" class="exp-button" data-exp-focus aria-pressed="false">Full screen</button><button type="button" class="exp-button" data-exp-sound aria-pressed="false">Sound off</button><details class="exp-settings"><summary>Options</summary><div class="exp-menu"><strong class="exp-menu-title">Make it your matchday</strong><label>Background sound<select data-exp-mode aria-label="Background sound"><option value="stadium">Stadium ambience</option><option value="calm">Calm music</option></select></label><label class="exp-volume-label">Volume <output data-exp-level>15%</output><input data-exp-volume type="range" min="0" max="50" step="5" value="15" aria-label="Background volume"></label>${document.querySelector('.world')?'<button type="button" data-exp-labels class="exp-button" aria-pressed="false">Show room labels</button>':''}<p>Sound starts only when you turn it on. It pauses for Cinema and read-aloud.</p><p>Esc exits full screen. In the journal, use the arrow keys to turn pages.</p><button type="button" class="exp-button" data-exp-done>Done</button></div></details><span class="exp-feedback" role="status" hidden></span>`;
  });
  function broadcast(){
    const current=state();
    document.body.classList.toggle('experience-focus',focus);document.body.classList.toggle('classroom-view',focus);document.body.classList.toggle('show-room-labels',labels);
    document.querySelectorAll('[data-exp-focus]').forEach(b=>{b.textContent=focus?(current.nativeFullscreen?'Exit full screen':'Exit focus view'):'Full screen';b.setAttribute('aria-pressed',String(focus));b.setAttribute('aria-label',b.textContent);});
    document.querySelectorAll('[data-exp-sound]').forEach(b=>{b.textContent=!wantedSound?'Sound off':volume===0?'Muted':audio.paused?'Sound paused':mode==='calm'?'Music on':'Stadium on';b.setAttribute('aria-pressed',String(wantedSound));b.title= wantedSound?'Turn background sound off':'Turn background sound on';});
    document.querySelectorAll('[data-exp-mode]').forEach(el=>el.value=mode);
    document.querySelectorAll('[data-exp-volume]').forEach(el=>el.value=volume);
    document.querySelectorAll('[data-exp-level]').forEach(el=>el.textContent=volume+'%');
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
  async function updateSound(){
    const generation=++playGeneration;
    if(!wantedSound||pauses.size||document.hidden){audio.pause();broadcast();return;}
    const source=new URL('art/audio/'+mode+'.wav',location.href).href;
    if(audio.src!==source)audio.src=source;
    audio.volume=volume/100;
    try{await audio.play();if(generation!==playGeneration)return;notice='';}catch{if(generation!==playGeneration)return;wantedSound=false;notice=modeName()+' could not start. Try Sound on again.';}
    broadcast();
  }
  function setPause(reason,on){if(on)pauses.add(reason);else pauses.delete(reason);updateSound();}
  function closeOptions(){let closed=false;document.querySelectorAll('.exp-settings').forEach(el=>{if(el.open){el.open=false;closed=true;}});return closed;}
  window.AcademyExperience={state,toggleFocus,pause:setPause,closeOptions};
  document.addEventListener('click',event=>{
    if(event.target.closest('[data-exp-focus]'))toggleFocus();
    if(event.target.closest('[data-exp-sound]')){wantedSound=!wantedSound;notice='';updateSound();}
    if(event.target.closest('[data-exp-labels]')){labels=!labels;broadcast();}
    if(event.target.closest('[data-exp-dismiss]')){notice='';broadcast();}
    if(event.target.closest('[data-exp-done]'))event.target.closest('details').open=false;
  });
  document.addEventListener('input',event=>{if(event.target.matches('[data-exp-volume]')){volume=Number(event.target.value);audio.volume=volume/100;broadcast();}});
  document.addEventListener('change',event=>{if(event.target.matches('[data-exp-mode]')){mode=event.target.value;updateSound();broadcast();}});
  document.addEventListener('toggle',event=>{if(event.target.matches('.exp-settings')&&event.target.open)document.querySelectorAll('.exp-settings').forEach(other=>{if(other!==event.target)other.open=false;});},true);
  document.addEventListener('click',event=>{if(!event.target.closest('.exp-settings'))document.querySelectorAll('.exp-settings').forEach(el=>el.open=false);});
  function fullscreenChanged(){if(document.fullscreenElement||document.webkitFullscreenElement){nativeSeen=true;focus=true;}else if(nativeSeen){nativeSeen=false;focus=false;notice='';}broadcast();}
  document.addEventListener('fullscreenchange',fullscreenChanged);document.addEventListener('webkitfullscreenchange',fullscreenChanged);
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&closeOptions()){event.preventDefault();event.stopImmediatePropagation();return;}if(event.key==='Escape'&&focus&&!document.querySelector('dialog[open]')){event.preventDefault();event.stopImmediatePropagation();toggleFocus();}},true);
  document.addEventListener('visibilitychange',updateSound);window.addEventListener('pagehide',()=>{playGeneration++;audio.pause();});
  ['play','pause','error'].forEach(name=>audio.addEventListener(name,broadcast));
  const frame=document.querySelector('#experience');if(frame)frame.addEventListener('load',broadcast);
  if('ResizeObserver' in window){const observer=new ResizeObserver(entries=>entries.forEach(entry=>document.documentElement.style.setProperty(entry.target.classList.contains('overlaybar')?'--overlay-toolbar-height':'--home-toolbar-height',Math.ceil(entry.target.getBoundingClientRect().height)+'px')));document.querySelectorAll('.top,.overlaybar').forEach(el=>observer.observe(el));}
  broadcast();
})();
