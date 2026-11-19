'use strict';
(() => {
  const $ = selector => document.querySelector(selector);
  const s = seasonSnapshot;
  const checked = new Date(s.checked+'T12:00:00Z').toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'});
  $('#snapshotStamp').textContent = `Checked ${checked} · dated snapshot`;
  const suffix = s.position%100>=11&&s.position%100<=13 ? 'th' : ({1:'st',2:'nd',3:'rd'}[s.position%10]||'th');
  $('#seasonPosition').textContent = `${s.position}${suffix}`;
  $('#seasonPoints').textContent = s.points;
  $('#seasonPlayed').textContent = s.played;
  $('#seasonRecord').textContent = `${s.wins} ${s.wins===1?'win':'wins'} · ${s.draws} ${s.draws===1?'draw':'draws'} · ${s.losses} ${s.losses===1?'loss':'losses'}`;
  $('#seasonTable').href = s.source;
  $('#seasonResult').textContent = s.lastResult;
  $('#seasonLastDate').textContent = s.lastDate;
  $('#seasonNext').textContent = `Next league opponent in this snapshot: ${s.nextOpponent}.`;
  if(Date.now()-new Date(s.checked+'T00:00:00Z').getTime()>7*86400000){
    $('#snapshotStamp').textContent += ' · check the latest table before class';
  }
  $('#pointsExplanationTitle').textContent = `How did Arsenal reach ${s.points} points?`;
  $('#pointsExplanation').textContent = `${s.wins} wins × three points + ${s.draws} draws × one point = ${s.points}. Losses earn zero points.`;
  const questions = [
    {question:`${s.wins} wins. Three points for a win. How many points from wins?`,answers:[`${s.wins*2} points`,`${s.wins*3} points`,`${s.wins*3+3} points`],correct:1,explanation:`${s.wins} × three = ${s.wins*3}. You read the scoreboard like a football analyst.`},
    {question:'Who can lead without playing on the pitch?',answers:['Only the goalscorer','Only the goalkeeper','A manager'],correct:2,explanation:'A manager plans, encourages and helps everyone improve. Leadership includes everyone.'},
    {question:'A teammate makes a mistake. What helps the team?',answers:['Encourage them and try again','Blame them','Stop helping'],correct:0,explanation:'Encouragement helps people learn. That is a captain’s kind of teamwork.'}
  ];
  let discovered = new Set();
  function reset(){
    discovered = new Set();
    $('#challengeProgress').textContent = '0 / 3 discovered';
    $('#challengeComplete').hidden = true;
    $('#matchdayQuestions').replaceChildren(...questions.map((q,i)=>{
      const card = document.createElement('article');card.className='matchday-question';
      const title=document.createElement('h4');title.textContent=q.question;card.append(title);
      const group=document.createElement('div');group.className='quiz-answers';group.setAttribute('role','group');group.setAttribute('aria-label',q.question);
      const feedback=document.createElement('p');feedback.className='quiz-feedback';feedback.setAttribute('role','status');feedback.textContent='Choose together.';
      q.answers.forEach((answer,j)=>{
        const button=document.createElement('button');button.type='button';button.textContent=answer;button.setAttribute('aria-pressed','false');
        button.addEventListener('click',()=>{
          if(discovered.has(i))return;
          [...group.children].forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
          if(j!==q.correct){feedback.textContent='Good thinking starts with trying. Talk it through and choose again.';return;}
          discovered.add(i);card.classList.add('is-discovered');feedback.textContent=q.explanation;
          [...group.children].forEach(b=>b.disabled=true);
          $('#challengeProgress').textContent=`${discovered.size} / 3 discovered`;
          $('#challengeComplete').hidden=discovered.size!==questions.length;
        });
        group.append(button);
      });
      card.append(group,feedback);return card;
    }));
  }
  $('#jumpToChallenge').addEventListener('click',()=>{$('#challengeTitle').focus({preventScroll:true});$('.class-challenge').scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'});});
  $('#resetChallenge').addEventListener('click',reset);
  reset();
})();
