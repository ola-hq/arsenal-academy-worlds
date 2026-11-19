'use strict';
(() => {
  const $ = s => document.querySelector(s);
  const all = s => [...document.querySelectorAll(s)];
  const rooms = ['slides', 'draft', 'scout', 'cinema', 'captains'];
  const names = {draft:'Draft Day',scout:'Scouting Academy',cinema:'Arsenal Cinema',captains:'Captain’s Vault'};
  const chapters = ['Welcome to Arsenal','Our North London home','The Invincibles','The trophy cabinet','The visionary','Arsenal Women','Every player matters','Watch the magic','Your player. Your card.','The live draft','Ways to lead','The Captain’s Vault'];
  let slide = 0, activeRoom = 'slides', selectedFeed = -1, speechGeneration = 0;
  const canSpeak = 'speechSynthesis' in window;
  function stopVoice() { speechGeneration++; if (canSpeak) speechSynthesis.cancel(); $('#speechStatus').textContent = ''; }
  function navigate(room, page = slide) {
    if (!rooms.includes(room)) return;
    const hash = room === 'slides' ? `#slides/${page + 1}` : `#${room}`;
    if (location.hash === hash) route(); else location.hash = hash;
  }
  function route() {
    const [requested, page] = location.hash.slice(1).split('/');
    const room = rooms.includes(requested) ? requested : 'slides';
    if (room === 'slides' && page) slide = Math.max(0, Math.min(story.length - 1, (Number.parseInt(page,10) || 1) - 1));
    if (activeRoom === 'cinema' && room !== 'cinema') clearMonitor();
    stopVoice(); activeRoom = room;
    all('[data-view]').forEach(s => s.hidden = s.id !== room);
    all('[data-nav]').forEach(a => {if(a.dataset.nav===room) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current');});
    document.body.dataset.room = room;
    $('#roomBar').hidden = room === 'slides';
    $('#location').textContent = names[room] || 'The Arsenal Academy Journal';
    $('#returnStory').textContent = `Return to journal · ${slide+1} / 12`;
    if (room === 'slides') renderSlide();
    else { $('#teacherNotes').hidden = true; $('#notesToggle').setAttribute('aria-expanded','false'); $('#location').focus({preventScroll:true}); }
    window.scrollTo(0,0);
  }
  document.addEventListener('click', e => {
    const b=e.target.closest('[data-go]');
    if(b) {e.preventDefault(); navigate(b.dataset.go);}
  });
  window.addEventListener('hashchange', route);
  $('#returnStory').addEventListener('click',()=>navigate('slides'));
  const closeClubhouse = () => {
    stopVoice(); clearMonitor();
    if (window.parent !== window) window.parent.postMessage({type:'arsenal:close'}, location.origin);
    else location.href='index.html';
  };
  $('#clubhouse').addEventListener('click', e=>{e.preventDefault();closeClubhouse();});
  function classroomView(on) {
    document.body.classList.toggle('classroom-view',on);
    $('#fullscreen').textContent=on?'Exit classroom view':'Classroom view';
    $('#fullscreen').setAttribute('aria-pressed',String(on));
    $('#displayStatus').hidden=true;
  }
  $('#fullscreen').addEventListener('click', async () => {
    const on=!document.body.classList.contains('classroom-view');
    classroomView(on);
    try {
      if(!on&&document.fullscreenElement) await document.exitFullscreen();
      else if(on&&!document.fullscreenElement) await document.documentElement.requestFullscreen();
    } catch {
      if(on){$('#displayStatus').textContent='Classroom view is on. Use your browser’s full-screen control for an edge-to-edge display.';$('#displayStatus').hidden=false;}
    }
  });
  document.addEventListener('fullscreenchange',()=>{if(!document.fullscreenElement)classroomView(false);});
  const image = (file, alt, caption='', cls='')=>`<figure class="photo ${cls}"><img src="art/${file}" alt="${alt}">${caption?`<figcaption>${caption}</figcaption>`:''}</figure>`;
  const copy = (kicker, title, body, action='')=>`<div class="story-copy"><span class="kicker">${kicker}</span><h1 id="slideTitle" tabindex="-1">${title}</h1><p>${body}</p>${action}</div>`;
  const button=(text,room)=>`<button class="primary" data-go="${room}">${text}</button>`;
  const prompt=(text,answer)=>`<details class="question"><summary>${text}</summary><p>${answer}</p></details>`;
  const foil = '<svg class="shield-art" viewBox="0 0 160 190" aria-hidden="true"><path d="M12 12L80 3l68 9v84c0 40-32 68-68 89-36-21-68-49-68-89Z" fill="currentColor"/><path d="M26 25l54-8 54 8v70c0 29-22 53-54 73-32-20-54-44-54-73Z" fill="none" stroke="#131c2b" stroke-width="3"/><path d="M80 39l9 27 29 1-23 18 8 28-23-16-23 16 8-28-23-18 29-1Z" fill="#131c2b"/></svg>';
  function renderSlide() {
    const s=story[slide], spread=$('#spread');
    spread.className='spread layout-'+['cover','home','unbeaten','trophies','portrait','women','team','cinema','cards','draw','leaders','vault'][slide];
    let html='';
    switch(slide) {
      case 0:
        html=image('emirates-interior.jpg','The red stands and green pitch of Emirates Stadium','Emirates Stadium · Nazmi Amin-Tai / CC BY-SA 2.0');
        html+=copy('NORTH LONDON, SINCE 1886','THIS IS<br><em>ARSENAL.</em>',s[2],'<div class="cover-deck"><span>A club.<br>A community.</span><span>Your player.<br>Your story.</span></div>');
        html+='<span class="cover-stamp">THE CLASSROOM<br>COLLECTORS’ EDITION</span>'; break;
      case 1:
        html=copy('A PLACE TO BELONG','HOME IS<br><em>NORTH LONDON.</em>',s[2],prompt('What makes a place feel like home?','People who welcome you. Teammates who support you. A place where everyone belongs.'));
        html+=image('emirates-exterior.jpg','Emirates Stadium exterior beneath a blue London sky','Emirates Stadium, 2009 · Ed g2s / CC BY-SA 3.0');
        html+='<div class="location-strip"><span>LONDON, ENGLAND</span><strong>N5</strong><span>OUR NORTH LONDON HOME</span></div>'; break;
      case 2:
        html=copy('THE SEASON NO ONE COULD STOP','THE<br><em>INVINCIBLES.</em>','2003–04. An entire Premier League season without a defeat.',prompt('Can you work out the unbeaten record?','26 wins + 12 draws = 38 games. Zero losses.'));
        html+='<div class="stat-art"><span class="kicker">PREMIER LEAGUE · 2003 / 04</span><strong>38<span>GAMES</span></strong><div class="record"><span><b>26</b> WINS</span><span><b>12</b> DRAWS</span><span><b>0</b> LOSSES</span></div><p>Different strengths.<br>One extraordinary team.</p></div>';break;
      case 3:
        html=image('magazine-trophy.svg','Original gold trophy illustration');
        html+=copy('THE TROPHY CABINET','GREATNESS<br><em>TAKES A TEAM.</em>',s[2],'<div class="trophy-dates"><span>2003/04<b>UNBEATEN</b></span><span>2025/26<b>LEAGUE CHAMPIONS</b></span></div>');break;
      case 4:
        html=copy('ARSÈNE WENGER · THE PROFESSOR','BELIEVE.<br>PREPARE.<br><em>IMPROVE.</em>',s[2],prompt('What would a great coach say to a teammate?','Keep trying. Learn from mistakes. Help each other become better.'));
        html+=image('wenger.jpg','Arsène Wenger speaking to student sports journalists in 2012','Gaius Cornelius / CC BY-SA 4.0');break;
      case 5:
        html=copy('ARSENAL WOMEN','HISTORY<br><em>MAKERS.</em>',s[2],'<div class="title-years"><b>2007</b><span>&</span><b>2025</b></div>');
        html+=image('women-champions.jpg','Arsenal Women celebrating their 2018–19 league championship','FROM THE ARCHIVE · 2019 league celebrations · Katie Chan / CC BY-SA 4.0');break;
      case 6:
        html=copy('THE TEAM SHEET','EVERY PLAYER<br><em>MATTERS.</em>',s[2],'<p class="instruction">Touch a position to discover its superpower.</p><p id="positionLesson" class="position-lesson" role="status">A team needs all four roles.</p>');
        html='<div class="pitch" aria-label="Interactive football positions"><div class="pitch-line"></div>'+['Forwards','Midfielders','Defenders','Goalkeeper'].map((r,i)=>`<button class="position position-${i}" data-position="${i}" aria-pressed="false"><b>${['09','08','04','01'][i]}</b><span>${r}</span></button>`).join('')+'</div>'+html;break;
      case 7:
        html=image('magazine-cinema.svg','Original illustration of a cinema with red seats and a gold screen');
        html+=copy('THE SCREENING ROOM','WATCH<br><em>THE MAGIC.</em>',s[2],button('Enter Cinema','cinema')+'<p class="small">Teacher preview first. Nothing autoplays.</p>');break;
      case 8:
        html=copy('THE COLLECTORS’ ISSUE','YOUR PLAYER.<br><em>YOUR STORY.</em>',s[2],button('Explore the player cards','scout'));
        html+='<div class="card-fan" aria-hidden="true">'+[['SALIBA','FRANCE','THE CALM WALL','02'],['LITTLE','SCOTLAND','THE CAPTAIN','10'],['RICE','ENGLAND','THE ENGINE','41']].map((c,i)=>`<div class="collectible card-${i}"><span>ARSENAL ACADEMY</span><b class="shirt-number">${c[3]}</b><h2>${c[0]}</h2><span>${c[1]}</span><strong>${c[2]}</strong></div>`).join('')+'<p>42 PHYSICAL CARDS · 2 PER STUDENT</p></div>';break;
      case 9:
        html='<div class="draw-art"><span class="kicker">EVERYONE GETS A TURN</span><b>21</b><span>STUDENTS. ONE FAIR ORDER.</span><div class="draw-balls"><span>07</span><span>14</span><span>03</span></div></div>';
        html+=copy('DRAFT DAY · THE LIVE DRAW','YOUR TURN<br><em>IS COMING.</em>',s[2],button('Start the Draft','draft'));break;
      case 10:
        html=copy('THE LEADERSHIP EDITION','HOW WILL<br><em>YOU LEAD?</em>','Great captains help others, stay calm and make their team better.');
        html+='<div class="leadership-cards">'+[['TONY ADAMS','Loyalty & courage','Stand by your teammates and do the right thing.'],['SOL CAMPBELL','Strength & composure','Stay calm under pressure and protect your team.'],['ARSÈNE WENGER','Vision & belief','Help others grow and believe they can improve.']].map(c=>`<details><summary>${foil}<strong>${c[0]}</strong><span>${c[1]}</span><small>Discover a way to lead</small></summary><p>${c[2]}</p></details>`).join('')+'</div>';break;
      case 11:
        html=image('adams-statue.jpg','Tony Adams statue with arms outstretched at Emirates Stadium','Tony Adams statue · Ronnie Macdonald / CC BY 2.0');
        html+=copy('THE FINAL REVEAL','THE CAPTAIN’S<br><em>VAULT.</em>',s[2],'<div class="mini-shields" aria-hidden="true">'+foil.repeat(6)+'</div>'+button('Open the Vault','captains'));break;
    }
    spread.innerHTML=html+`<div class="spread-folio"><span>${chapters[slide].toUpperCase()}</span><span>${String(slide+1).padStart(2,'0')} / 12</span></div>`;
    $('#count').textContent=`${slide+1} / 12`;
    $('#notes').textContent=s[3];
    $('#prev').disabled=slide===0;
    $('#next').textContent=slide===11?'Back to clubhouse':'Next page';
    $('#pageAnnouncement').textContent=`Page ${slide+1} of 12. ${chapters[slide]}.`;
    all('[data-page]').forEach(b=>b.setAttribute('aria-current',Number(b.dataset.page)===slide?'page':'false'));
  }
  $('#prev').addEventListener('click',()=>navigate('slides',Math.max(0,slide-1)));
  $('#next').addEventListener('click',()=>slide===11?closeClubhouse():navigate('slides',slide+1));
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape') {
      if($('#contentsDialog').open) return;
      if(!$('#teacherNotes').hidden){toggleNotes(false);return;}
      if(activeRoom!=='slides'){navigate('slides');return;}
      if(parent!==window) closeClubhouse();
    }
    if(activeRoom!=='slides'||$('#contentsDialog').open||e.altKey||e.metaKey||e.ctrlKey||/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
    if(e.key==='ArrowRight'&&slide<11){e.preventDefault();navigate('slides',slide+1);}
    if(e.key==='ArrowLeft'&&slide>0){e.preventDefault();navigate('slides',slide-1);}
  });
  $('#chapterList').innerHTML=chapters.map((c,i)=>`<button data-page="${i}"><span>${String(i+1).padStart(2,'0')}</span>${c}</button>`).join('');
  $('#contents').addEventListener('click',()=>$('#contentsDialog').showModal());
  $('#closeContents').addEventListener('click',()=>$('#contentsDialog').close());
  $('#chapterList').addEventListener('click',e=>{const b=e.target.closest('[data-page]');if(b){$('#contentsDialog').close();navigate('slides',Number(b.dataset.page));}});
  function toggleNotes(open){$('#teacherNotes').hidden=!open;$('#notesToggle').setAttribute('aria-expanded',String(open));}
  $('#notesToggle').addEventListener('click',()=>toggleNotes($('#teacherNotes').hidden));
  $('#speakSlide').disabled=$('#stopSpeech').disabled=!canSpeak;
  $('#speakSlide').addEventListener('click',()=>{
    if(!canSpeak)return;stopVoice();const generation=speechGeneration;const u=new SpeechSynthesisUtterance(story[slide].slice(1).join('. '));u.lang='en-US';u.rate=.9;
    u.onend=()=>{if(generation===speechGeneration)$('#speechStatus').textContent='Finished reading.';};
    u.onerror=()=>{if(generation===speechGeneration)$('#speechStatus').textContent='Voice unavailable on this device. Read the teacher notes aloud.';};
    speechSynthesis.speak(u);$('#speechStatus').textContent='Reading with this device’s voice…';
  });
  $('#stopSpeech').addEventListener('click',()=>{stopVoice();$('#speechStatus').textContent='Stopped.';});
  const positionLessons=['Forwards find space, create chances and finish attacks.','Midfielders connect the team with passes, movement and hard work.','Defenders protect the goal, win the ball and help build attacks.','Goalkeepers make saves and start attacks with smart passes.'];
  $('#spread').addEventListener('click',e=>{const b=e.target.closest('[data-position]');if(b){all('[data-position]').forEach(p=>p.setAttribute('aria-pressed',String(p===b)));$('#positionLesson').textContent=positionLessons[Number(b.dataset.position)];}});
  // All classroom state lives in memory. No storage, network writes or names.
  function shuffle(items){for(let i=items.length-1;i>0;i--){const range=i+1,limit=2**32-(2**32%range);let n;do{n=crypto.getRandomValues(new Uint32Array(1))[0];}while(n>=limit);const j=n%range;[items[i],items[j]]=[items[j],items[i]];}return items;}
  let draftOrder=[],draftRevealed=0;
  function renderDraft(){
    const done=draftOrder.length&&draftRevealed===draftOrder.length;
    $('#draftPick').textContent=draftRevealed?`PICK ${draftRevealed} OF 21 · STUDENT ${draftOrder[draftRevealed-1]}`:draftOrder.length?'Order ready. Reveal the first pick.':'The draft is waiting!';
    $('#draftHistory').replaceChildren(...draftOrder.slice(0,draftRevealed).map((n,i)=>{const t=document.createElement('span');t.className='draft-token';t.textContent=`${i+1}. #${n}`;return t;}));
    $('#revealDraft').disabled=!draftOrder.length||!!done;$('#shuffleDraft').disabled=!!draftOrder.length;$('#revealDraft').textContent=done?'All 21 picks revealed':'Reveal next pick';
    $('#draftComplete').hidden=!done;
  }
  $('#draftHistory').insertAdjacentHTML('afterend','<p id="draftComplete" role="status" hidden>Draft complete. All 21 students have one place in the order. Check two physical cards per student at the table.</p>');
  $('#shuffleDraft').addEventListener('click',()=>{draftOrder=shuffle(Array.from({length:21},(_,i)=>i+1));draftRevealed=0;renderDraft();});
  $('#revealDraft').addEventListener('click',()=>{if(draftRevealed<draftOrder.length){draftRevealed++;renderDraft();}});
  $('#resetDraft').addEventListener('click',()=>{draftOrder=[];draftRevealed=0;renderDraft();});renderDraft();
  let filter='all',chosen=-1;
  const eng='<svg class="flag" viewBox="0 0 60 40" role="img" aria-label="England flag"><rect width="60" height="40" fill="white"/><path d="M25 0h10v40H25zM0 15h60v10H0z" fill="#ce1124"/></svg>';
  function renderPlayers(){
    $('#players').replaceChildren(...players.flatMap((a,i)=>{
      if(filter!=='all'&&a[1]!==filter)return[];
      const b=document.createElement('button');b.className='player';b.type='button';b.setAttribute('aria-pressed',String(chosen===i));
      b.innerHTML=`<span class="country">${a[2]==='ENG'?eng:a[2]==='SCO'?'SCOTLAND':a[2]}</span><strong>${a[0]}</strong><span>${a[4]}</span><small>${a[5]}</small>`;
      b.addEventListener('click',()=>{chosen=i;$('#playerName').textContent=a[0];$('#playerInfo').textContent=`${a[3]} · ${a[4]} · ${a[5]}`;$('#playerStory').textContent=a[6];$('#playerAward').textContent=a[7];$('#playerPortrait').textContent=a[2]==='ENG'||a[2]==='SCO'?'⚽':a[2];const l=$('#playerVideo');l.href='https://www.youtube.com/@Arsenal/search?query='+encodeURIComponent(a[0]+' highlights');l.hidden=false;renderPlayers();$('#playerName').scrollIntoView({block:'center',behavior:'smooth'});});return b;
    }));
  }
  all('.filter').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;all('.filter').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));renderPlayers();}));renderPlayers();
  const feeds=[
    {title:'The Invincibles',tag:'01 · THE UNBEATEN SEASON',description:'An official illustrated history of 2003–04. This is an article, not a video.',url:'https://arsenal-fc.shorthandstories.com/the-invincibles-a-season-like-no-other/'},
    {title:'Arsenal Women',tag:'02 · THE HISTORY MAKERS',description:'All 62 league goals from 2024/25 on Arsenal’s official site. Open the source and select a teacher-reviewed excerpt.',url:'https://www.arsenal.com/news/enjoy-all-our-wsl-goals-from-202425-aEgAh7n2WU6W'},
    {title:'Arsenal Men: Best Goals',tag:'03 · ARSENAL MEN',description:'Official Arsenal goals compilation from 2024/25, featuring Rice, Saka and Calafiori. Teacher preview required before projection.',url:'https://www.youtube.com/watch?v=KqXuiKrrIac',id:'KqXuiKrrIac'},
    {title:'Arsène Wenger',tag:'04 · THE VISIONARY',description:'Find Wenger stories on Arsenal’s official channel. Choose and screen the exact clip before class.',url:'https://www.youtube.com/@Arsenal/search?query=Arsene%20Wenger'}
  ];
  const reviewed=new Set();
  $('#filmList').innerHTML=feeds.map((f,i)=>`<button class="film" data-monitor="${i}" aria-pressed="false"><span>${f.tag}</span><strong>${f.title}</strong><small>${f.id?'OFFICIAL VIDEO':i===0?'ILLUSTRATED STORY':i===1?'OFFICIAL VIDEO PAGE':'OFFICIAL VIDEO SEARCH'}</small></button>`).join('');
  function clearMonitor(){
    $('#monitorScreen').innerHTML='<img src="art/magazine-cinema.svg" alt="Illustrated cinema with red seats and a gold screen">';
    $('#monitorTitle').textContent='Choose a story';$('#monitorDescription').textContent='Official Arsenal videos open in their own player. Nothing plays or contacts YouTube here.';
    $('#monitorLink').href='https://www.youtube.com/@Arsenal';$('#screen').checked=false;$('#screen').disabled=true;$('#screenStatus').textContent='Select a story to begin teacher screening.';selectedFeed=-1;all('[data-monitor]').forEach(b=>b.setAttribute('aria-pressed','false'));
  }
  function selectFeed(i){
    clearMonitor(); selectedFeed=i;const f=feeds[i];
    $('#monitorTitle').textContent=f.title;$('#monitorDescription').textContent=f.description;$('#monitorLink').href=f.url;
    $('#monitorScreen').innerHTML=`<div class="cinema-title"><span class="kicker">${f.tag}</span><strong>${f.title}</strong><p>${f.id?'Watch in the official YouTube player.':'Open the official source below.'}</p></div>`;
    $('#screen').disabled=!f.id;$('#screen').checked=reviewed.has(i);screenStatus();all('[data-monitor]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.monitor)===i)));
  }
  function screenStatus(){if(!feeds[selectedFeed]?.id){$('#screenStatus').textContent='Review the exact material on its official source. Search results are not a screened clip.';return;}$('#screenStatus').textContent=$('#screen').checked?'Teacher marked this selection reviewed for this session.':'Teacher screening incomplete for this selection.';}
  $('#filmList').addEventListener('click',e=>{const b=e.target.closest('[data-monitor]');if(b)selectFeed(Number(b.dataset.monitor));});
  $('#screen').addEventListener('change',()=>{if(selectedFeed<0)return;$('#screen').checked?reviewed.add(selectedFeed):reviewed.delete(selectedFeed);screenStatus();});
  $('#monitorStop').addEventListener('click',clearMonitor);
  let deck=[],round=0,waiting=false,badgeHistory=[];
  function resetBadges(){deck=shuffle([0,1,2,3,4,5]);round=0;waiting=false;badgeHistory=[];$('#reveal').hidden=true;renderBadge();}
  function renderBadge(){
    const left=deck.length,complete=!left&&!waiting;
    $('#rowTitle').textContent=complete?'CEREMONY COMPLETE!':`CAPTAIN ${round+1} OF 6`;
    $('#remaining').textContent=`${left} ${left===1?'shield':'shields'} remain`;
    $('#prompt').textContent=waiting?'Read the story, then continue.':complete?'All six stories revealed. Two Adams, two Campbell and two Wenger.':`Captain, choose one of ${left} mystery shields.`;
    $('#shields').replaceChildren(...Array.from({length:left},(_,i)=>{const b=document.createElement('button');b.type='button';b.className='mystery';b.disabled=waiting;b.innerHTML=foil+`<span>SHIELD ${i+1}</span>`;b.addEventListener('click',()=>revealBadge(i));return b;}));
    $('#continue').hidden=!waiting;$('#continue').textContent=left?'Next captain':'Finish ceremony';
    $('#history').replaceChildren(...badgeHistory.map((x,i)=>{const p=document.createElement('p');p.textContent=`Captain ${i+1}: ${legends[x][0]} · ${legends[x][1]}`;return p;}));
    if(!badgeHistory.length)$('#history').textContent='No badges revealed.';
  }
  function revealBadge(i){if(waiting||!deck.length)return;const key=deck.splice(i,1)[0],l=legends[key];badgeHistory.push(key);waiting=true;$('#reveal').hidden=false;$('#legendName').textContent=`Captain ${round+1}: ${l[0]}`;$('#legendTitle').textContent=l[1];$('#legendStory').textContent=l[2];$('#legendLesson').textContent=l[3];renderBadge();$('#legendName').scrollIntoView({block:'center',behavior:'smooth'});$('#continue').focus({preventScroll:true});}
  $('#continue').addEventListener('click',()=>{round++;waiting=false;$('#reveal').hidden=true;renderBadge();const next=$('#shields button');if(next)next.focus({preventScroll:true});else $('#rowTitle').scrollIntoView({block:'center'});});
  $('#reset').addEventListener('click',resetBadges);resetBadges();
  window.addEventListener('pagehide',()=>{stopVoice();clearMonitor();});
  route();
  // Warm local editorial images while the cover is on screen. No third-party requests.
  ['emirates-exterior.jpg','wenger.jpg','women-champions.jpg','adams-statue.jpg'].forEach(file=>{const img=new Image();img.src='art/'+file;});
})();
