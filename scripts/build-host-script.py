from pathlib import Path
import json,html,shutil
from docx import Document
from docx.shared import Inches,Pt,RGBColor
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
import argparse
parser=argparse.ArgumentParser();parser.add_argument('--output-dir',type=Path,required=True);args=parser.parse_args()
repo=Path(__file__).resolve().parents[1];out=args.output_dir.resolve();out.mkdir(parents=True,exist_ok=True)
d=json.loads((repo/'docs/host-script.json').read_text())
doc=Document(); sec=doc.sections[0]; sec.page_width=Inches(8.5);sec.page_height=Inches(11)
sec.top_margin=sec.bottom_margin=Inches(.65);sec.left_margin=sec.right_margin=Inches(.75)
for name in ['Normal','Title','Heading 1','Heading 2']:
 st=doc.styles[name];st.font.name='Arial';st.font.color.rgb=RGBColor(0,0,0)
doc.styles['Normal'].font.size=Pt(12)
doc.styles['Normal'].paragraph_format.space_after=Pt(7)
doc.styles['Normal'].paragraph_format.line_spacing=1.12
doc.styles['Title'].font.size=Pt(25);doc.styles['Heading 1'].font.size=Pt(21)
doc.styles['Heading 1'].paragraph_format.space_after=Pt(10)
doc.core_properties.title=d['title'];doc.core_properties.author='';doc.core_properties.last_modified_by='';doc.core_properties.subject='Teacher read-aloud script matched to the Arsenal Academy journal and activities'
for i,s in enumerate(d['sections']):
 if i:doc.add_page_break()
 doc.add_paragraph(d['title'] if i==0 else s['label'], 'Title' if i==0 else 'Heading 1')
 p=doc.add_paragraph(s['visual']+' | '+s['time']);p.paragraph_format.space_after=Pt(12)
 for r in p.runs:r.bold=True;r.font.size=Pt(10)
 if i==0:
  p=doc.add_paragraph(d['use']);p.runs[0].italic=True;p.runs[0].font.size=Pt(10.5)
  p=doc.add_paragraph(d['timing']);p.runs[0].font.size=Pt(10.5)
 for kind,text in s['blocks']:
  p=doc.add_paragraph();p.paragraph_format.widow_control=True
  a=p.add_run(kind+'  ');a.bold=True;a.font.size=Pt(10)
  r=p.add_run(text)
  if kind in ['CLICK','DO','NOTE','PAUSE']:r.font.size=Pt(10.5);r.italic=True
  else:r.font.size=Pt(12)
  if kind=='CHANT':r.bold=True
 footer=sec.footer.paragraphs[0] if i==0 else None
 if footer is not None:
  footer.alignment=2; r=footer.add_run('Arsenal Academy host script  |  ');r.font.size=Pt(9)
  fld=OxmlElement('w:fldSimple');fld.set(qn('w:instr'),'PAGE');footer._p.append(fld)
for node in list(doc.styles['Title'].element.iter(qn('w:pBdr'))): node.getparent().remove(node)
file=out/'arsenal-academy-host-script.docx';doc.save(file);shutil.copy2(file,repo/'docs/host-script.docx')
E=html.escape
options=''.join(f'<option value="{E(s["id"])}">{E(s["label"])}</option>' for s in d['sections'])
sections=''
for i,s in enumerate(d['sections']):
 blocks=''.join(f'<p class="block {"spoken" if k in ["SAY","ASK","CHANT","REPEAT","REPLY","IF NEEDED"] else "direction"}"><b class="tag">{E(k)}</b>{E(t)}</p>' for k,t in s['blocks'])
 sections+=f'<section id="{E(s["id"])}" class="cue" {"" if i==0 else "hidden"}><p class="eyebrow">{E(s["visual"])} · {E(s["time"])}</p><h1 tabindex="-1">{E(s["label"])}</h1>{blocks}</section>'
page='''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Arsenal Academy host script</title><style>
:root{font-family:Arial,sans-serif;color:#152033;background:#f2f4f7;--reading:1.35rem}*{box-sizing:border-box}body{margin:0}header{background:#101522;color:white;padding:1.15rem max(1rem,calc((100% - 880px)/2));border-top:5px solid #c91f36}header strong{font-size:1.3rem}header p{line-height:1.5;margin:.5rem 0 0;color:#e2e7ed}a{color:inherit}nav{position:sticky;top:0;z-index:2;background:#fff;border-bottom:1px solid #cdd3dc;padding:.7rem 1rem;display:flex;justify-content:center;gap:.5rem;flex-wrap:wrap}button,select{font:inherit;min-height:44px;padding:.55rem .8rem;border:1px solid #9aa6b6;border-radius:6px;background:#fff;color:#152033;cursor:pointer}button:focus-visible,select:focus-visible,a:focus-visible{outline:3px solid #2274bd;outline-offset:3px}button:disabled{opacity:.45;cursor:default}#next{background:#b31b30;color:white;border-color:#b31b30}select{max-width:100%;min-width:200px}main{max-width:880px;margin:auto;padding:1.3rem 1.1rem 3rem}.intro{line-height:1.6;font-size:1rem}.cue{background:white;padding:clamp(1rem,4vw,2.2rem);border-radius:10px;border:1px solid #d5dbe4;margin-top:1.2rem}.eyebrow{font-size:.9rem;line-height:1.5;color:#4b596c;font-weight:bold}h1{font-size:clamp(1.8rem,5vw,2.4rem);margin:.7rem 0 1.5rem;line-height:1.12}.block{font-size:var(--reading);line-height:1.65;margin:1.25rem 0}.tag{display:block;font-size:.75rem;letter-spacing:.1em;color:#8d1528;line-height:1.5;margin-bottom:.25rem}.direction{font-size:1rem;color:#4b596c;line-height:1.6}.direction .tag{color:#4b596c}#progress{font-size:.9rem;font-weight:bold}footer{max-width:880px;padding:0 1.2rem 2rem;margin:auto;font-size:.9rem;line-height:1.6}.links{display:flex;gap:1rem;flex-wrap:wrap}body.words-only .direction{display:none}@media(max-width:500px){nav{justify-content:stretch}select{width:100%;order:-1}button{flex:1}.block{line-height:1.6}}@media print{header,nav,.intro,footer{display:none!important}body,main{background:white;margin:0;padding:0;max-width:none}.cue{display:block!important;border:0;padding:0;border-radius:0;margin:0;break-after:page}.cue:last-child{break-after:auto}.block{font-size:12pt;line-height:1.35;margin:9pt 0}.direction{font-size:10pt}.tag{font-size:8pt}h1{font-size:22pt}}
</style></head><body><header><strong>Arsenal Academy host script</strong><p>Read the spoken lines. Follow the click cues. Keep the visuals on the classroom display.</p></header><nav aria-label="Script controls"><button id="prev">Previous stop</button><select id="jump" aria-label="Choose a journal page or activity">OPTIONS</select><button id="next">Next stop</button><button id="larger" aria-label="Make spoken text larger">Larger text</button><button id="words" aria-pressed="false">Spoken lines only</button><button id="print">Print</button></nav><main><div class="intro"><p>USE</p><p>TIMING</p><div class="links"><a href="https://ola-hq.github.io/arsenal-academy-worlds/" target="_blank" rel="noopener noreferrer">Open the live Academy</a><a href="https://www.youtube.com/watch?v=KF9XJtA5e3k" target="_blank" rel="noopener noreferrer">Merino trailer · 1:01</a><a href="host-script.docx">Editable Word copy</a></div></div><p id="progress" role="status"></p>SECTIONS</main><footer>Script cues move this guide only; advance the Academy separately. No automatic scrolling, sound or stored classroom data. Optional films open on their official external services.</footer><script>
const cues=[...document.querySelectorAll('.cue')],jump=document.getElementById('jump');let index=0,size=1.35;
function show(i){index=Math.max(0,Math.min(cues.length-1,i));cues.forEach((s,n)=>s.hidden=n!==index);jump.value=cues[index].id;document.querySelector('.intro').hidden=index>0;document.getElementById('prev').disabled=index===0;document.getElementById('next').disabled=index===cues.length-1;document.getElementById('progress').textContent=cues[index].id.startsWith('page')?'Journal page '+cues[index].id.slice(4)+' of 12':cues[index].id==='setup'?'Before you start':'Optional Matchday stop';history.replaceState(null,'','#'+cues[index].id);cues[index].querySelector('h1').focus({preventScroll:true});window.scrollTo(0,0)}
document.getElementById('prev').onclick=()=>show(index-1);document.getElementById('next').onclick=()=>show(index+1);jump.onchange=()=>show(cues.findIndex(s=>s.id===jump.value));document.getElementById('larger').onclick=()=>{size=size>=1.95?1.35:size+.2;document.documentElement.style.setProperty('--reading',size+'rem')};document.getElementById('words').onclick=e=>{let on=document.body.classList.toggle('words-only');e.currentTarget.setAttribute('aria-pressed',String(on));e.currentTarget.textContent=on?'Show click cues':'Spoken lines only'};document.getElementById('print').onclick=()=>window.print();document.addEventListener('keydown',e=>{if(/INPUT|SELECT|TEXTAREA/.test(e.target.tagName)||e.altKey||e.ctrlKey||e.metaKey)return;if(e.key==='ArrowRight'){e.preventDefault();show(index+1)}if(e.key==='ArrowLeft'){e.preventDefault();show(index-1)}});show(Math.max(0,cues.findIndex(s=>s.id===location.hash.slice(1))));
</script></body></html>'''.replace('OPTIONS',options).replace('SECTIONS',sections).replace('<p>USE</p>','<p>'+E(d['use'])+'</p>').replace('<p>TIMING</p>','<p>'+E(d['timing'])+'</p>')
(repo/'docs/host-script.html').write_text(page)
(out/'arsenal-academy-host-script.html').write_text(page.replace('href="host-script.docx"','href="arsenal-academy-host-script.docx"'))
print('Built 14 script stops with journal page numbering and editable DOCX.')
