const overlay=document.getElementById('overlay');const input=document.getElementById('message');const opener=document.getElementById('open-message');function openMessage(){overlay.hidden=false;document.body.style.overflow='hidden';input.focus()}function closeMessage(){overlay.hidden=true;document.body.style.overflow='';opener.focus()}opener.addEventListener('click',openMessage);document.getElementById('close').addEventListener('click',closeMessage);overlay.addEventListener('click',e=>{if(e.target===overlay)closeMessage()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!overlay.hidden)closeMessage()});document.getElementById('message-form').addEventListener('submit',e=>{e.preventDefault();document.getElementById('status').textContent='Demo only — no message has been sent.'});document.getElementById('toggle').addEventListener('click',()=>{let nav=document.getElementById('navigation');let opened=nav.classList.toggle('open');document.getElementById('toggle').setAttribute('aria-expanded',String(opened))});
const planLightbox=document.getElementById('plan-lightbox');const planOpener=document.getElementById('enlarge-plan');const planCloser=document.getElementById('close-plan');function closePlan(){if(!planLightbox)return;planLightbox.hidden=true;document.body.style.overflow='';planOpener?.focus()}if(planOpener&&planLightbox){planOpener.addEventListener('click',()=>{planLightbox.hidden=false;document.body.style.overflow='hidden';planCloser.focus()});planCloser.addEventListener('click',closePlan);planLightbox.addEventListener('click',e=>{if(e.target===planLightbox)closePlan()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!planLightbox.hidden)closePlan()})}

// Keep the circle touching the existing red rule, including on window resize.
function alignSheenaCircle(){
  const feature=document.querySelector('#meet-sheena');
  const line=feature?.querySelector('.red-rule');
  const circle=feature?.querySelector('.sheena-circle');
  if(!feature||!line||!circle||window.innerWidth<=1000)return;
  const base=feature.getBoundingClientRect();
  const rule=line.getBoundingClientRect();
  const diameter=circle.getBoundingClientRect().width;
  feature.style.setProperty('--sheena-circle-left',`${rule.right-base.left}px`);
  feature.style.setProperty('--sheena-circle-top',`${rule.top+rule.height/2-base.top-diameter/2}px`);
}
window.addEventListener('resize',alignSheenaCircle);
window.addEventListener('load',alignSheenaCircle);
alignSheenaCircle();
