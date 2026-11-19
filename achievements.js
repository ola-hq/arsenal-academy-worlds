'use strict';
(() => {
 const stories=[
  {id:'men',label:'2026 title',year:'2025/26 · PREMIER LEAGUE',title:'Worth the wait.',body:'Arsenal’s men became league champions in 2026, ending a 22-year wait. North London celebrated together with an open-top bus parade.',fact:'A long journey needs preparation, patience and people who keep supporting each other.',image:'art/moments/men-parade-2026.jpg',alt:'The red Arsenal champions bus and supporters during the 31 May 2026 title parade',caption:'NORTH LONDON · 31 MAY 2026 · TITLE PARADE',credit:'Timmy96 · CC0',source:'https://commons.wikimedia.org/wiki/File:Arsenal_Parade_31052026_(37).jpg',stats:[['2026','Title year'],['22','Years since 2004']],question:'What helps a team keep improving?',answers:['Practising and helping each other','Giving up after one difficult day'],correct:0,success:'Exactly. Progress takes time, preparation and teammates who keep showing up.',retry:'Think about what a team can do after a difficult day. Try the other idea.'},
  {id:'invincibles',label:'Unbeaten',year:'2003/04 · THE INVINCIBLES',title:'38 games. Zero defeats.',body:'Arsenal finished an entire Premier League season unbeaten: 26 wins and 12 draws. Players, staff and supporters celebrated the achievement with a parade in 2004.',fact:'A draw is a tied score. Unbeaten means no losses; it does not mean every match was a win.',image:'art/moments/invincibles-parade-2004.jpg',alt:'Arsenal players, staff and families on the 2004 league victory parade bus',caption:'ISLINGTON · 2004 · THE UNBEATEN SEASON',credit:'Dineshcooper · public domain',source:'https://commons.wikimedia.org/wiki/File:Arsenal_open_top_bus_parade_2004.jpg',stats:[['38','Games'],['26','Wins'],['12','Draws'],['0','Losses']],question:'How did they stay unbeaten?',answers:['Every match had to be a win','Wins and draws added up to no defeats'],correct:1,success:'You read the record! 26 wins + 12 draws = 38 games, with zero losses.',retry:'Look at the 12 draws. A tied game is not a defeat. Try again.'},
  {id:'europe',label:'Europe',year:'2007 + 2025 · ARSENAL WOMEN',title:'Champions. Again.',body:'Arsenal Women won Europe in 2007 and returned to the top in 2025. Stina Blackstenius scored the only goal as Arsenal beat Barcelona 1–0 in Lisbon.',fact:'The 2007 competition was called the UEFA Women’s Cup. In 2025 it was the UEFA Women’s Champions League.',image:'art/moments/women-europe-2025.jpg',alt:'Arsenal Women celebrating with the trophy at the 2025 Women’s Champions League final ceremony',caption:'LISBON · 24 MAY 2025 · EUROPEAN CHAMPIONS',credit:'Arsenal FC via Getty Images · UEFA report',source:'https://www.uefa.com/womenschampionsleague/news/029a-1df953e859d5-5ff509a80e7c-1000--arsenal-return-to-european-summit/',stats:[['2007','First European title'],['2025','Champions again'],['1–0','Final score']],question:'Who helps make a winning goal possible?',answers:['The goalscorer alone','Passers, defenders, goalkeeper and the whole team'],correct:1,success:'Yes. One player finishes the chance; many people help create and protect it.',retry:'Think about the passes, saves and support before the goal. Who else helped?'},
  {id:'women',label:'League history',year:'ARSENAL WOMEN · ENGLISH LEAGUE',title:'A history of champions.',body:'Arsenal Women have won England’s top-flight league 15 times. Their most recent league title came in 2018/19. This photo comes from that season’s trophy day.',fact:'A club can have more than one great team and more than one kind of champion.',image:'art/moments/women-league-2019.jpg',alt:'The Women’s Super League trophy with Arsenal players at the 11 May 2019 presentation',caption:'11 MAY 2019 · 2018/19 LEAGUE TROPHY DAY',credit:'Katie Chan · CC BY-SA 4.0',source:'https://commons.wikimedia.org/wiki/File:Arsenal_WFC_v_Manchester_City_WFC,_11_May_2019_(02).jpg',stats:[['15','League titles'],['2019','Latest league title']],question:'When do teams build good habits?',answers:['During practice and everyday teamwork','Only when the trophy arrives'],correct:0,success:'Exactly. The celebration comes later; the habits start with everyday effort.',retry:'The trophy is the celebration. Think about the work that happens before it.'}
 ];
 const dialog=document.getElementById('achievement');
 const card=dialog.querySelector('.achievement-card');
 const $=id=>document.getElementById(id);
 let selected=0;
 function showStory(index){
  selected=(index+stories.length)%stories.length;
  const s=stories[selected];
  card.scrollTop=0;
  card.dataset.moment=s.id;
  $('momentCount').textContent=`HALL OF CHAMPIONS · MOMENT ${selected+1} OF ${stories.length}`;
  $('momentYear').textContent=s.year;
  $('achievementTitle').textContent=s.title;
  $('achievementBody').textContent=s.body;
  $('achievementFact').textContent=s.fact;
  const image=$('momentPhoto');image.hidden=false;image.src=s.image;image.alt=s.alt;
  $('momentCaption').textContent=s.caption;
  $('momentCredit').textContent=s.credit;$('momentCredit').href=s.source;
  $('momentStats').replaceChildren(...s.stats.map(([number,label])=>{const el=document.createElement('div');el.className='moment-stat';const value=document.createElement('strong'),name=document.createElement('span');value.textContent=number;name.textContent=label;el.append(value,name);return el;}));
  $('momentQuestion').textContent=s.question;
  $('momentFeedback').hidden=true;$('momentFeedback').textContent='';
  $('momentAnswers').replaceChildren(...s.answers.map((answer,i)=>{const b=document.createElement('button');b.type='button';b.textContent=answer;b.setAttribute('aria-pressed','false');b.addEventListener('click',()=>{[...$('momentAnswers').children].forEach(el=>{el.setAttribute('aria-pressed',String(el===b));delete el.dataset.correct;});if(i===s.correct)b.dataset.correct='true';$('momentFeedback').hidden=false;$('momentFeedback').textContent=i===s.correct?s.success:s.retry;});return b;}));
  [...$('momentTabs').children].forEach((b,i)=>b.setAttribute('aria-pressed',String(i===selected)));
  $('momentNext').textContent=selected===stories.length-1?'First story':'Next story';
 }
 $('momentTabs').replaceChildren(...stories.map((s,i)=>{const b=document.createElement('button');b.type='button';b.textContent=s.label;b.setAttribute('aria-pressed','false');b.addEventListener('click',()=>{showStory(i);$('achievementTitle').focus({preventScroll:true});});return b;}));
 $('momentNext').addEventListener('click',()=>{showStory(selected+1);$('achievementTitle').focus({preventScroll:true});});
 $('momentPhoto').addEventListener('error',()=>{$('momentPhoto').hidden=true;$('momentCaption').textContent='Photo unavailable. The story and team challenge are ready to explore.';});
 document.querySelectorAll('[data-achievement]').forEach(button=>button.addEventListener('click',()=>{showStory(stories.findIndex(s=>s.id===button.dataset.achievement));openDialog(dialog,button,$('closeAchievement'));}));
 document.querySelectorAll('.world [data-achievement]').forEach(button=>{button.innerHTML='<svg class="hit-outline" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M1 1H99V78L50 99 1 78Z"/></svg>';});
 $('closeAchievement').addEventListener('click',closeDialog);
})();
