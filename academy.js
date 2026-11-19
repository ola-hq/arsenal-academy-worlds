'use strict';
(() => {
  const $ = s => document.querySelector(s);
  const all = s => [...document.querySelectorAll(s)];
  const rooms = ['slides', 'draft', 'scout', 'cinema', 'captains', 'matchday'];
  const names = {matchday:'Arsenal Matchday',draft:'Draft Day',scout:'Scouting Academy',cinema:'Arsenal Cinema',captains:'Captain’s Vault'};
  const chapters = ["This is Arsenal", "Home is North London", "The Invincibles", "Greatness takes a team", "Believe Prepare Improve", "History makers", "Every player matters", "Watch the magic", "Your player Your story", "Your turn is coming", "How will you lead", "The Captains Vault"];
  let slide = 0, activeRoom = 'slides', selectedFeed = -1, speechGeneration = 0;
  document.body.classList.toggle('is-embedded',window.parent!==window);
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
    if(parent!==window)parent.postMessage({type:'arsenal:room',room},location.origin);
    document.querySelector('[data-nav=slides]').href='#slides/'+(slide+1);
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
  window.addEventListener('pagehide',()=>{stopVoice();});
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
        html=copy('THE SEASON NO ONE COULD STOP','THE<br><em>INVINCIBLES.</em>','2003–04. An entire Premier League season without a defeat.',prompt('26 wins + 12 draws. How many defeats?','26 + 12 = all 38 games. No games left for a loss: zero defeats. A draw is a tied score.'));
        html+='<div class="stat-art"><span class="kicker">PREMIER LEAGUE · 2003 / 04</span><strong>38<span>GAMES</span></strong><div class="record"><span><b>26</b> WINS</span><span><b>12</b> DRAWS</span><span><b>0</b> LOSSES</span></div><p>Different strengths.<br>One extraordinary team.</p></div>';break;
      case 3:
        html=image('trophy-gallery.jpg','Illustrated gold football trophy in the academy gallery');
        html+=copy('THE TROPHY CABINET','GREATNESS<br><em>TAKES A TEAM.</em>',s[2],'<div class="trophy-dates"><span>2003/04<b>UNBEATEN</b></span><span>2025/26<b>LEAGUE CHAMPIONS</b></span></div>');break;
      case 4:
        html=copy('ARSÈNE WENGER · THE PROFESSOR','BELIEVE.<br>PREPARE.<br><em>IMPROVE.</em>',s[2],prompt('You’re the coach. What is your next move?','A teammate misses a chance. Encourage them, choose one skill to practise, and try again together.'));
        html+=image('wenger.jpg','Arsène Wenger speaking to student sports journalists in 2012','Gaius Cornelius / CC BY-SA 4.0');break;
      case 5:
        html=copy('ARSENAL WOMEN','HISTORY<br><em>MAKERS.</em>',s[2],'<div class="title-years"><b>2007</b><span>&</span><b>2025</b></div>');
        html+='<button class="women-film photo" data-go="cinema" data-pick-film="women-trailer" aria-label="Open Arsenal Women film in Cinema"><img src="art/moments/women-europe-2025.jpg" alt="Arsenal Women celebrating with the 2025 European trophy"><span class="photo-play"><b aria-hidden="true">▶</b> Meet the history makers<small>Watch Arsenal Women · 1:49</small></span><span class="photo-credit">2025 European champions · Arsenal FC via Getty Images · Photo, not a film still</span></button>';break;
      case 6:
        html=copy('THE TEAM SHEET','EVERY PLAYER<br><em>MATTERS.</em>',s[2],'<p class="instruction">Touch a role to discover how it helps the team.</p><p id="positionLesson" class="position-lesson" role="status">Starting, waiting or helping from the sideline: everyone belongs.</p>');
        html='<div class="pitch" aria-label="Interactive football team roles"><div class="pitch-line"></div>'+['Forward','Midfielder','Defender','Goalkeeper','Manager','Substitute'].map((r,i)=>`<button class="position position-${i}" data-position="${i}" aria-pressed="false"><b>${['09','08','04','01','M','S'][i]}</b><span>${r}</span></button>`).join('')+'</div>'+html;break;
      case 7:
        html=image('cinema-room.jpg','A football stadium screening in the academy cinema');
        html+=copy('THE SCREENING ROOM','WATCH<br><em>THE MAGIC.</em>',s[2],button('Enter Cinema','cinema')+'<button class="quiet story-matchday" data-go="matchday">Explore this season</button><p class="small">Merino’s story. Team highlights. Stadium voices.</p>');break;
      case 8:
        html=copy('THE COLLECTORS’ ISSUE','YOUR PLAYER.<br><em>YOUR STORY.</em>',s[2],button('Explore the player cards','scout'));
        html+='<div class="card-fan" aria-hidden="true">'+[['SALIBA','FRANCE','THE CALM WALL','02'],['LITTLE','SCOTLAND','THE CAPTAIN','10'],['RICE','ENGLAND','THE ENGINE','41']].map((c,i)=>`<div class="collectible card-${i}"><span>ARSENAL ACADEMY</span><b class="shirt-number">${c[3]}</b><h2>${c[0]}</h2><span>${c[1]}</span><strong>${c[2]}</strong></div>`).join('')+'<p>42 PHYSICAL CARDS · 2 PER STUDENT</p></div>';break;
      case 9:
        html='<div class="draw-art"><span class="kicker">EVERYONE GETS A TURN</span><b>21</b><span>STUDENTS. ONE FAIR ORDER.</span><div class="draw-balls"><span>07</span><span>14</span><span>03</span></div></div>';
        html+=copy('DRAFT DAY · THE LIVE DRAW','YOUR TURN<br><em>IS COMING.</em>',s[2],button('Start the Draft','draft'));break;
      case 10:
        html=copy('THE LEADERSHIP EDITION','HOW WILL<br><em>YOU LEAD?</em>','Great captains help others, stay calm and make their team better.');
        html+='<div class="leadership-cards">'+[['TONY ADAMS','Loyalty & courage','Arsenal captain at 21. Four league titles as captain. Lead today: invite someone in and take responsibility.'],['SOL CAMPBELL','Strength & composure','A defender in the unbeaten 2003/04 team. Lead today: take a breath, communicate and help solve a problem.'],['ARSÈNE WENGER','Vision & belief','Manager of the Invincibles. 22 years helping Arsenal develop. Lead today: share a plan and help someone practise.']].map(c=>`<details><summary>${foil}<strong>${c[0]}</strong><span>${c[1]}</span><small>Discover a way to lead</small></summary><p>${c[2]}</p></details>`).join('')+'</div>';break;
      case 11:
        html=image('adams-statue.jpg','Tony Adams statue with arms outstretched at Emirates Stadium','Tony Adams statue · Ronnie Macdonald / CC BY 2.0');
        html+=copy('THE FINAL REVEAL','THE CAPTAIN’S<br><em>VAULT.</em>',s[2],'<div class="mini-shields" aria-hidden="true">'+foil.repeat(6)+'</div>'+button('Open the Vault','captains'));break;
    }
    spread.innerHTML=html+`<div class="spread-folio"><span>${chapters[slide].toUpperCase()}</span><span>${String(slide+1).padStart(2,'0')} / 12</span></div>`;
    document.querySelector('[data-nav=slides]').href='#slides/'+(slide+1);
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
    u.onend=()=>{if(generation===speechGeneration){$('#speechStatus').textContent='Finished reading.';}};
    u.onerror=()=>{if(generation===speechGeneration){$('#speechStatus').textContent='Voice unavailable on this device. Read the teacher notes aloud.';}};
    speechSynthesis.speak(u);$('#speechStatus').textContent='Reading with this device’s voice…';
  });
  $('#stopSpeech').addEventListener('click',()=>{stopVoice();$('#speechStatus').textContent='Stopped.';});
  const positionLessons=['Forwards find space, create chances and finish attacks.','Midfielders connect the team with passes, movement and hard work.','Defenders protect the goal, win the ball and help build attacks.','Goalkeepers make saves and start attacks with smart passes.','Managers plan, encourage and help everyone improve. You can lead and belong without playing on the pitch.','Substitutes watch, encourage and stay ready. Merino came on at 69 minutes against Leicester in February 2025, then scored at 81 and 87. A different role. A huge contribution.'];
  $('#spread').addEventListener('click',e=>{const b=e.target.closest('[data-position]');if(b){all('[data-position]').forEach(p=>p.setAttribute('aria-pressed',String(p===b)));$('#positionLesson').textContent=positionLessons[Number(b.dataset.position)];}});
  // All classroom state lives in memory. No storage, network writes or names.
  function shuffle(items){for(let i=items.length-1;i>0;i--){const range=i+1,limit=2**32-(2**32%range);let n;do{n=crypto.getRandomValues(new Uint32Array(1))[0];}while(n>=limit);const j=n%range;[items[i],items[j]]=[items[j],items[i]];}return items;}
  let draftOrder=[],draftRevealed=0;
  function renderDraft(){
    const done=draftOrder.length&&draftRevealed===draftOrder.length;
    $('#draftProgress').textContent=`${draftRevealed} / 21 REVEALED`;
    $('#draftPick').innerHTML=draftRevealed?`<span class="pick-label">PICK ${draftRevealed} OF 21</span><strong class="pick-number">${draftOrder[draftRevealed-1]}</strong><span class="pick-student">STUDENT NUMBER</span>`:draftOrder.length?'<span class="pick-label">THE ORDER IS READY</span><strong class="pick-ready">Who’s first?</strong><span class="pick-student">REVEAL YOUR FIRST PICK</span>':'<span class="pick-label">EVERYONE GETS A TURN</span><strong class="pick-ready">Ready for<br>your moment?</strong><span class="pick-student">SHUFFLE TO BEGIN</span>';
    $('#draftHistory').replaceChildren(...draftOrder.slice(0,draftRevealed).map((n,i)=>{const t=document.createElement('span');t.className='draft-token';t.textContent=`${i+1}. #${n}`;return t;}));
    $('#revealDraft').disabled=!draftOrder.length||!!done;$('#shuffleDraft').disabled=!!draftOrder.length;$('#revealDraft').textContent=done?'All 21 picks revealed':'Reveal next pick';
    $('#draftComplete').hidden=!done;
  }
  $('#draftHistory').insertAdjacentHTML('afterend','<p id="draftComplete" role="status" hidden>Draft complete. All 21 students have one place in the order. Check two physical cards per student at the table.</p>');
  $('#shuffleDraft').addEventListener('click',()=>{draftOrder=shuffle(Array.from({length:21},(_,i)=>i+1));draftRevealed=0;renderDraft();});
  $('#revealDraft').addEventListener('click',()=>{if(draftRevealed<draftOrder.length){draftRevealed++;renderDraft();}});
  $('#resetDraft').addEventListener('click',()=>{draftOrder=[];draftRevealed=0;renderDraft();});renderDraft();
  let filter='all',chosen=0;
  const countries={France:'fr',Spain:'es',Brazil:'br',Netherlands:'nl',Italy:'it',Norway:'no',England:'gb-eng',Germany:'de',Sweden:'se',Belgium:'be',Scotland:'gb-sct',Australia:'au'};
  const escapeText=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function countryMark(country){return `<span class="country"><img src="art/flags/${countries[country]}.svg" alt="" width="40" height="30"><span>${escapeText(country)}</span></span>`;}
  function selectPlayer(i,moveToProfile=false){
    chosen=i;const a=players[i],media=playerMedia[i];
    $('#playerName').textContent=a[0];$('#playerInfo').innerHTML=countryMark(a[3])+`<span class="passport-position">${escapeText(a[4])}</span>`;
    $('#playerPower').textContent=a[5];$('#playerStory').textContent=a[6];$('#playerAward').textContent=a[7];
    $('#playerPortrait').innerHTML=`<img src="${media.src}" alt="${escapeText(a[0])}" width="480" height="600"><figcaption>PLAYER PORTRAIT · DIGITAL ACADEMY PROFILE</figcaption>`;
    const credit=$('#playerPhotoCredit');credit.href=`credits.html#photo-${media.slug}`;credit.textContent='Photo credit & source';
    const l=$('#playerVideo');l.href='https://www.youtube.com/@Arsenal/search?query='+encodeURIComponent(a[0]+' highlights');l.hidden=false;
    all('[data-player]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.player)===chosen)));
    $('#scoutSelection').textContent=`Viewing ${a[0]} · ${a[3]}. This explores a player; it does not reserve a physical card.`;
    if(moveToProfile&&matchMedia('(max-width:900px)').matches){$('#playerName').focus({preventScroll:true});$('#playerPassport').scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'});}
  }
  function renderPlayers(){
    const visible=players.map((a,i)=>i).filter(i=>filter==='all'||players[i][1]===filter);
    if(!visible.includes(chosen))chosen=visible[0];
    $('#players').replaceChildren(...visible.map(i=>{
      const a=players[i],media=playerMedia[i],b=document.createElement('button');b.className='player';b.type='button';b.dataset.player=i;
      b.setAttribute('aria-pressed',String(chosen===i));b.setAttribute('aria-label',`${a[0]}, ${a[3]}, ${a[4]}. View player profile`);
      b.innerHTML=`<span class="player-photo"><img src="${media.src}" alt="" width="240" height="300" loading="lazy"><span class="viewing-tag">VIEWING</span></span><span class="player-card-copy">${countryMark(a[3])}<strong>${escapeText(a[0])}</strong><span>${escapeText(a[4])}</span><small>${escapeText(a[5])}</small></span>`;
      return b;
    }));
    $('#playerCount').textContent=`${visible.length} ${visible.length===1?'player':'players'} to explore`;
    selectPlayer(chosen);
  }
  $('#players').addEventListener('click',e=>{const b=e.target.closest('[data-player]');if(b)selectPlayer(Number(b.dataset.player),true);});
  all('.filter').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;all('.filter').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));renderPlayers();}));
  $('#backToPlayers').addEventListener('click',()=>{$('#players').scrollIntoView({block:'start'});$(`[data-player="${chosen}"]`).focus({preventScroll:true});});
  $('#scout').addEventListener('error',e=>{
    const img=e.target;if(img.tagName!=='IMG')return;
    const frame=img.closest('.player-photo,.player-portrait');img.hidden=true;
    if(frame&&!frame.querySelector('.portrait-fallback')){
      const fallback=document.createElement('span');fallback.className='portrait-fallback';
      const index=frame.closest('[data-player]')?Number(frame.closest('[data-player]').dataset.player):chosen;
      fallback.textContent=players[index][0].split(' ').map(part=>part[0]).slice(0,2).join('');
      const note=document.createElement('small');note.textContent='Photo unavailable';fallback.append(note);frame.append(fallback);
    }
  },true);
  renderPlayers();
  const feeds=cinemaFilms;
  let filmCategory='shorts';
  function renderFilms(){
    const available=feeds.map((f,i)=>({f,i})).filter(({f})=>filmCategory==='all'||f.categories.includes(filmCategory));
    $('#filmList').innerHTML=available.map(({f,i})=>`<button class="film" data-film-art="${f.art}" data-monitor="${i}" aria-pressed="${i===selectedFeed}" aria-label="${escapeText(f.title)}, ${escapeText(f.duration)}. Select film"><img src="${f.image}" alt="" loading="lazy"><span>${escapeText(f.subtitle)}</span><strong>${escapeText(f.title)}</strong><small>${escapeText(f.duration)} · ${escapeText(f.publisher)}</small></button>`).join('');
    $('#filmCount').textContent=`${available.length} ${available.length===1?'film':'films'}`;
    all('[data-film-category]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filmCategory===filmCategory)));
  }
  all('[data-film-category]').forEach(b=>b.addEventListener('click',()=>{filmCategory=b.dataset.filmCategory;clearMonitor();renderFilms();}));
  renderFilms();
  function clearMonitor(){
    $('#monitorScreen').innerHTML='<img src="art/cinema-room.jpg" alt="A warmly lit football cinema with red velvet chairs">';
    $('#monitorTitle').textContent='Choose a story';$('#monitorDescription').textContent='Choose a film, take your seat and spot the teamwork. Nothing autoplays here.';$('#filmAccess').hidden=true;$('#filmAccess').textContent='';$('#watchMission').hidden=true;$('#watchMission details').open=false;
    $('#monitorLink').hidden=true;$('#monitorLink').href='https://www.youtube.com/@Arsenal';selectedFeed=-1;all('[data-monitor]').forEach(b=>b.setAttribute('aria-pressed','false'));
  }
  function selectFeed(i){
    clearMonitor(); selectedFeed=i;const f=feeds[i];
    $('#monitorTitle').textContent=f.title;$('#monitorDescription').textContent=f.description;$('#monitorLink').href=f.url;$('#monitorLink').textContent='Watch film · '+f.duration;$('#monitorLink').hidden=false;
    $('#monitorScreen').innerHTML=`<img src="${f.image}" alt="${escapeText(f.imageAlt)}"><span class="film-art-note">${escapeText(f.artNote)}</span><div class="cinema-title"><span class="kicker">${escapeText(f.duration)} · ${escapeText(f.publisher)}</span><strong>${f.title}</strong><p>${escapeText(f.subtitle)}</p></div>`;
    $('#filmAccess').hidden=false;$('#filmAccess').textContent=f.note;$('#watchPrompt').textContent=f.watch;$('#watchMission').hidden=false;all('[data-monitor]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.monitor)===i)));
  }
  $('#filmList').addEventListener('click',e=>{const b=e.target.closest('[data-monitor]');if(b){selectFeed(Number(b.dataset.monitor));if(matchMedia('(max-width:650px)').matches){$('#monitorTitle').focus({preventScroll:true});$('.cinema-console').scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'});}}});
  $('#monitorStop').addEventListener('click',clearMonitor);
  $('#backToFilms').addEventListener('click',()=>{const selected=$(`#filmList [data-monitor="${selectedFeed}"]`);if(selected)selected.focus({preventScroll:true});$('#filmList').scrollIntoView({block:'start'});});
  document.addEventListener('click',event=>{const trigger=event.target.closest('[data-pick-film]');if(!trigger)return;const i=feeds.findIndex(f=>f.id===trigger.dataset.pickFilm);if(i<0)return;filmCategory=feeds[i].categories[0];selectFeed(i);renderFilms();});
  let deck=[],round=0,waiting=false,badgeHistory=[];
  function resetBadges(){deck=shuffle([0,1,2,3,4,5]);round=0;waiting=false;badgeHistory=[];$('#reveal').hidden=true;renderBadge();}
  function renderBadge(){
    const left=deck.length,complete=!left&&!waiting;
    $('#captains').dataset.stage=waiting?'reveal':complete?'complete':'ready';
    $('#ceremonyComplete').hidden=!complete;
    $('#ceremonyHistory').open=complete;
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
  ['emirates-exterior.jpg','wenger.jpg','women-champions.jpg','adams-statue.jpg','trophy-gallery.jpg','cinema-room.jpg','collectors-desk.jpg'].forEach(file=>{const img=new Image();img.src='art/'+file;});
})();
