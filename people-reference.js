const stages={choice:document.querySelector('#choices'),zachary:document.querySelector('#zachary'),sharon:document.querySelector('#sharon'),zachbio:document.querySelector('#zachbio'),sharonbio:document.querySelector('#sharonbio'),senior:document.querySelector('#senior')};function showStage(key){
 if(key==='zacharybio')key='zachbio';if(key==='leaders'){showStage('choice');document.querySelector('#choices').classList.add('expanded');document.querySelector('.choice-heading[data-stage="leaders"]').setAttribute('aria-expanded','true');history.replaceState(null,'','#leaders');return;}
 Object.values(stages).forEach(el=>el.style.display='none');
 stages[key].style.display=key==='choice'?'flex':'block';
 if(key==='choice'){document.querySelector('#choices').classList.remove('expanded');document.querySelector('.choice-heading[data-stage="leaders"]').setAttribute('aria-expanded','false');}
 history.replaceState(null,'','#'+key);
}document.querySelectorAll('[data-stage]').forEach(b=>b.addEventListener('click',e=>{if(b.matches('.artwork-biography'))e.preventDefault();showStage(b.dataset.stage)}));const overlay=document.querySelector('#staff-overlay');document.querySelectorAll('[data-person]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.staff-detail').forEach(el=>el.hidden=true);document.querySelector('#detail-'+b.dataset.person).hidden=false;overlay.classList.add('open');overlay.setAttribute('aria-hidden','false')}));function closeOverlay(){overlay.classList.remove('open');overlay.setAttribute('aria-hidden','true')}document.querySelector('#close-staff').addEventListener('click',closeOverlay);overlay.addEventListener('click',e=>{if(e.target===overlay)closeOverlay()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeOverlay()});document.querySelector('#toggle').addEventListener('click',()=>{document.querySelector('#navigation').classList.toggle('open')});if(location.hash==='#leaders')showStage('leaders');else if(stages[location.hash.slice(1)])showStage(location.hash.slice(1));
// In-site fictional email composer: no mail client, server or network send.
const fakeMail=document.getElementById('fake-mail-overlay');
const closeFakeMail=()=>{fakeMail.hidden=true;document.getElementById('fake-mail-status').textContent=''};
document.querySelectorAll('[data-compose]').forEach(b=>b.addEventListener('click',()=>{document.getElementById('fake-mail-to').value=b.dataset.compose;document.getElementById('fake-mail-subject').value='';document.getElementById('fake-mail-body').value='';fakeMail.hidden=false;document.getElementById('fake-mail-subject').focus()}));
document.getElementById('fake-mail-close').addEventListener('click',closeFakeMail);document.getElementById('fake-mail-discard').addEventListener('click',closeFakeMail);
document.getElementById('fake-mail-send').addEventListener('click',()=>{document.getElementById('fake-mail-status').textContent='Simulation only: your email has not been sent.'});
fakeMail.addEventListener('click',e=>{if(e.target===fakeMail)closeFakeMail()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!fakeMail.hidden)closeFakeMail()});

// Direct link from Latest News to Lesley's existing larger contact card.
if(location.hash==='#senior-lesley'){showStage('senior');const card=document.querySelector('[data-person="1"]');if(card)card.click();}
