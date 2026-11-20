'use strict';
// Opt-in, same-window session only. The ordinary Academy remains independent.
(() => {
  if (parent === window || new URLSearchParams(location.search).get('presenter') !== 'control') return;
  const origin = location.origin;
  let queued = false;
  function publish() {
    queued = false;
    const room = document.body.dataset.room;
    const view = document.querySelector(`[data-view][id="${room}"]`);
    if (!view) return;
    const copy = view.cloneNode(true);
    // Only classroom visuals leave this frame. Teacher notes/voice controls never do.
    copy.querySelectorAll('#teacherNotes,.journal-controls,script,dialog').forEach(el => el.remove());
    copy.removeAttribute('hidden');
    const range = document.documentElement.scrollHeight - innerHeight;
    parent.postMessage({type:'arsenal:presenter:view', room, hash:location.hash,
      html:copy.outerHTML, scroll:range > 0 ? scrollY / range : 0}, origin);
  }
  // The guide may be a background tab while the classroom window opens.
  // rAF pauses there; a short coalescing timer still sends the initial visual.
  function schedule() { if (!queued) { queued = true; setTimeout(publish,40); } }
  window.addEventListener('message', event => {
    if (event.origin !== origin || event.source !== parent || event.data?.type !== 'arsenal:presenter:route') return;
    const hash = event.data.hash;
    if (typeof hash !== 'string' || !/^#(?:slides\/(?:[1-9]|1[0-2])|draft|scout|cinema|captains|matchday)$/.test(hash)) return;
    if (location.hash !== hash) location.hash = hash;
    else schedule();
  });
  new MutationObserver(schedule).observe(document.getElementById('main'), {subtree:true,childList:true,characterData:true,attributes:true});
  window.addEventListener('hashchange', schedule);
  window.addEventListener('scroll', schedule, {passive:true});
  document.addEventListener('toggle', schedule, true);
  window.addEventListener('load', schedule);
  schedule();
})();
