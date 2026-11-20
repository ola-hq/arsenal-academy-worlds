'use strict';
(() => {
  const origin = location.origin, presenter = window.opener;
  const frame = document.getElementById('classroomStage');
  const status = document.getElementById('classroomStatus'), notice = document.getElementById('classroomNotice');
  const button = document.getElementById('classroomFullscreen');
  let latest = null, stageReady = false, rendered = false, lastContact = 0, label = 'classroom screen';
  const labels = {draft:'Draft Day',scout:'Scouting Academy',cinema:'Arsenal Cinema',captains:'Captain’s Vault',matchday:'Matchday'};
  function ready() { if (presenter && !presenter.closed) presenter.postMessage({type:'arsenal:classroom:ready'},origin); }
  function draw() { if (stageReady && latest) frame.contentWindow.postMessage({type:'arsenal:classroom:draw',view:latest},origin); }
  function acknowledge() { if (presenter && !presenter.closed) presenter.postMessage({type:'arsenal:classroom:ack',label},origin); }
  window.addEventListener('message',event => {
    if (event.origin !== origin) return;
    const data = event.data;
    if (event.source === frame.contentWindow) {
      if (data?.type === 'arsenal:classroom:stage-ready') { stageReady = true; draw(); ready(); }
      if (data?.type === 'arsenal:classroom:drawn') { rendered = true; acknowledge(); }
      return;
    }
    if (!presenter || event.source !== presenter) return;
    if (data?.type === 'arsenal:presenter:disconnected') { lastContact = 0; notice.hidden = false; notice.textContent = 'Presenter guide disconnected. Keep this screen open and reconnect from the guide.'; return; }
    if (!['arsenal:presenter:render','arsenal:presenter:pulse'].includes(data?.type)) return;
    lastContact = Date.now();
    if (data.type === 'arsenal:presenter:render') {
      latest = data.view;
      label = latest.room === 'slides' ? 'Journal page ' + latest.hash.split('/')[1] + ' / 12' : labels[latest.room] || 'classroom screen';
      draw();
    }
    if (latest) { status.textContent = 'Linked · ' + label + ' · controlled from your laptop'; notice.hidden = true; }
    if (rendered) acknowledge();
  });
  setInterval(() => {
    if (!latest) ready();
    if (latest && (!presenter || presenter.closed || !lastContact || Date.now()-lastContact>7000)) {
      notice.hidden = false; notice.textContent = 'Presenter guide disconnected. The last visual is held here. Return to the guide to reconnect.';
    }
  },1500);
  function fullscreenChanged() {
    const full = !!(document.fullscreenElement || document.webkitFullscreenElement);
    document.body.classList.toggle('native-fullscreen',full);
    document.body.classList.remove('focus-view'); button.textContent = full ? 'Exit full screen' : 'Full screen';
  }
  button.addEventListener('click',async () => {
    if (document.fullscreenElement || document.webkitFullscreenElement) { await (document.exitFullscreen || document.webkitExitFullscreen).call(document); return; }
    if (document.body.classList.contains('focus-view')) { document.body.classList.remove('focus-view'); button.textContent='Full screen'; return; }
    try { const request=document.documentElement.requestFullscreen || document.documentElement.webkitRequestFullscreen; if (!request) throw new Error(); await request.call(document.documentElement,{navigationUI:'hide'}); }
    catch { document.body.classList.add('focus-view'); button.textContent='Exit focus view'; status.textContent='Focus view · use your browser’s full-screen control to hide its frame'; }
  });
  document.addEventListener('fullscreenchange',fullscreenChanged); document.addEventListener('webkitfullscreenchange',fullscreenChanged);
  new ResizeObserver(entries=>document.documentElement.style.setProperty('--classroom-toolbar',Math.ceil(entries[0].target.getBoundingClientRect().height)+'px')).observe(document.querySelector('header'));
  ready();
})();
