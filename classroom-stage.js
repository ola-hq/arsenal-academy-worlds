'use strict';
(() => {
  let fraction = 0, lastHTML = '';
  const position = () => window.scrollTo(0,Math.max(0,document.documentElement.scrollHeight-innerHeight)*fraction);
  window.addEventListener('message',event => {
    if (event.origin !== location.origin || event.source !== parent || event.data?.type !== 'arsenal:classroom:draw') return;
    const view = event.data.view;
    if (!view || typeof view.html !== 'string' || !['slides','draft','scout','cinema','captains','matchday'].includes(view.room)) return;
    // Defense in depth: the frame accepts only a visual fragment from its parent.
    if (view.html !== lastHTML) {
      const template = document.createElement('template'); template.innerHTML = view.html;
      template.content.querySelectorAll('script,iframe,object,embed,style,link,#teacherNotes,.journal-controls').forEach(el=>el.remove());
      template.content.querySelectorAll('*').forEach(el=>[...el.attributes].forEach(a=>{if(/^on/i.test(a.name)||a.name==='srcdoc')el.removeAttribute(a.name);}));
      template.content.querySelectorAll('button,a,summary,[tabindex]').forEach(el=>{el.setAttribute('tabindex','-1');el.setAttribute('aria-disabled','true');});
      document.getElementById('main').replaceChildren(template.content); lastHTML = view.html;
    }
    document.body.dataset.room = view.room;
    fraction = view.room === 'slides' ? 0 : Math.max(0,Math.min(1,Number(view.scroll)||0));
    requestAnimationFrame(position);
    parent.postMessage({type:'arsenal:classroom:drawn',hash:view.hash},location.origin);
  });
  new ResizeObserver(position).observe(document.getElementById('main'));
  document.getElementById('main').addEventListener('click',event=>event.preventDefault());
  document.getElementById('main').addEventListener('keydown',event=>{if(['Enter',' '].includes(event.key))event.preventDefault();});
  document.addEventListener('load',position,true);
  parent.postMessage({type:'arsenal:classroom:stage-ready'},location.origin);
})();
