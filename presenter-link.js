'use strict';
(() => {
  if (!/^https?:$/.test(location.protocol)) return;
  const origin = location.origin;
  const sections = [...document.querySelectorAll('.cue')];
  const main = document.querySelector('main');
  const column = document.createElement('div');
  column.className = 'script-column';
  column.append(...main.childNodes);
  main.append(column);
  const bar = document.createElement('section');
  bar.className = 'presenter-connect';
  bar.setAttribute('aria-label','Linked classroom screen');
  bar.innerHTML = '<div><strong>One click. Two screens.</strong><p>Keep this guide on your laptop. Open the classroom window, move it to the ViewSonic once, then select Full screen there. Both windows must use the same browser on this computer. If it opens as a tab, drag that tab into a separate window first.</p></div><div><button id="openClassroom">Open classroom screen</button><p id="connectionStatus" role="status">Not linked · this guide works on its own.</p></div>';
  document.querySelector('header').after(bar);
  const panel = document.createElement('aside');
  panel.className = 'presenter-panel'; panel.hidden = true;
  panel.setAttribute('aria-label','Classroom controls on this laptop');
  panel.innerHTML = '<div class="presenter-panel-heading"><strong>Classroom controls</strong><span>Click inside this preview</span></div><div class="presenter-rooms" aria-label="Control the classroom room"><button data-present-room="#slides/1">Journal</button><button data-present-room="#cinema">Cinema</button><button data-present-room="#captains">Vault</button><button data-present-room="#draft">Draft Day</button><button data-present-room="#scout">Scouting</button><button data-present-room="#matchday">Matchday</button></div><div class="presenter-preview"><iframe id="presenterPreview" title="Interactive classroom controls" allow="fullscreen"></iframe></div><p>Next stop advances your notes and classroom screen together. You can also use the preview to reveal a shield, run the draft or select a player.</p><p class="presenter-session-note">Keep this guide open during the draw. Reopening the classroom window preserves the draw; reloading this guide resets it. Films open separately on their official websites.</p>';
  main.prepend(panel);
  const preview = panel.querySelector('iframe');
  const status = document.getElementById('connectionStatus');
  const openButton = document.getElementById('openClassroom');
  const jump = document.getElementById('jump');
  document.querySelector('.intro p').textContent = 'Read SAY and ASK aloud; CLICK and PAUSE guide you. Use Open classroom screen to link the visuals on this computer, or use this script on its own. Matchday and player discoveries remain optional.';
  let audience = null, latest = null, started = false, syncingCue = false, lastAck = 0;
  const name = 'arsenal-classroom-' + crypto.randomUUID();
  const activeCue = () => sections.find(s => !s.hidden)?.id || 'setup';
  function routeFor(id) {
    if (/^page(?:[1-9]|1[0-2])$/.test(id)) return '#slides/' + id.slice(4);
    return {setup:'#slides/1',matchday:'#matchday',draft:'#draft','after-cards':'#scout'}[id] || '#slides/1';
  }
  function sendRoute(hash) {
    preview.contentWindow?.postMessage({type:'arsenal:presenter:route',hash},origin);
  }
  function sendView() {
    if (audience && !audience.closed && latest) audience.postMessage({type:'arsenal:presenter:render',view:latest},origin);
  }
  new ResizeObserver(entries => document.documentElement.style.setProperty('--guide-toolbar',Math.ceil(entries[0].target.getBoundingClientRect().height + 12)+'px')).observe(document.querySelector('nav'));
  function start() {
    if (started) return;
    started = true; panel.hidden = false; document.body.classList.add('presenter-linked');
    document.getElementById('next').textContent = 'Next stop & screen';
    document.getElementById('prev').textContent = 'Previous stop & screen';
    preview.src = '../legacy.html?v=editorial-15&presenter=control' + routeFor(activeCue());
  }
  openButton.addEventListener('click',() => {
    // Open from the click itself so ordinary popup blocking can be handled visibly.
    if (audience && !audience.closed) { audience.focus(); sendView(); return; }
    audience = window.open('../classroom.html?v=editorial-15',name,'popup,width=1280,height=800');
    if (!audience) { status.textContent = 'The browser blocked the classroom window. Allow pop-ups for this site, then try Open classroom screen again.'; return; }
    lastAck = 0; status.textContent = 'Opening classroom screen…'; start();
  });
  panel.querySelectorAll('[data-present-room]').forEach(button => button.addEventListener('click',() => sendRoute(button.dataset.presentRoom)));
  // The existing guide owns cue order, text size, print and keyboard controls.
  // Its selection is observed rather than replacing those controls.
  new MutationObserver(() => {
    if (!started || syncingCue) return;
    const route = routeFor(activeCue());
    if (route !== latest?.hash) sendRoute(route);
  }).observe(column, {subtree:true,attributes:true,attributeFilter:['hidden']});
  function followPreview(view) {
    if (view.hash === routeFor(activeCue())) return;
    let cue = view.room === 'slides' ? 'page' + view.hash.split('/')[1] :
      {cinema:'page8',captains:'page12',draft:'draft',matchday:'matchday',scout:activeCue()==='draft'||activeCue()==='after-cards'?'after-cards':'page9'}[view.room];
    if (!cue || cue === activeCue()) return;
    syncingCue = true;
    jump.value = cue; jump.dispatchEvent(new Event('change'));
    // Mutation observers run after the event; keep this guard until they finish.
    queueMicrotask(() => { syncingCue = false; });
  }
  window.addEventListener('message',event => {
    if (event.origin !== origin) return;
    const data = event.data;
    if (event.source === preview.contentWindow && data?.type === 'arsenal:close') {
      jump.value = 'setup'; jump.dispatchEvent(new Event('change'));
    } else if (event.source === preview.contentWindow && data?.type === 'arsenal:presenter:view') {
      latest = {room:data.room,hash:data.hash,html:data.html,scroll:data.scroll};
      followPreview(latest); sendView();
    } else if (audience && event.source === audience) {
      if (data?.type === 'arsenal:classroom:ready') sendView();
      if (data?.type === 'arsenal:classroom:ack') {
        lastAck = Date.now(); status.textContent = 'Connected · ' + (data.label || 'classroom screen');
        openButton.textContent = 'Show classroom window';
      }
    }
  });
  setInterval(() => {
    if (!started) return;
    if (!audience || audience.closed) {
      status.textContent = 'Classroom window closed. Open it again to resume from this point.';
      openButton.textContent = 'Reopen classroom screen'; return;
    }
    audience.postMessage({type:'arsenal:presenter:pulse'},origin);
    if (lastAck && Date.now()-lastAck > 6000) status.textContent = 'Waiting for the classroom screen. If it was reloaded, it will reconnect here.';
  },1500);
  window.addEventListener('pagehide',() => {
    if (audience && !audience.closed) audience.postMessage({type:'arsenal:presenter:disconnected'},origin);
  });
})();
