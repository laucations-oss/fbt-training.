/* FBT Version 23: consistent fade between local HTML pages. */
(function(){
  'use strict';
  var pages = /^(?:index|about|people|services|projects|news|careers|contact|intogram|linkedout)\.html$/i;
  try { history.scrollRestoration = 'manual'; } catch(e) {}
  var arrived = false;
  try { arrived = sessionStorage.getItem('fbt-fading-navigation') === '1'; sessionStorage.removeItem('fbt-fading-navigation'); } catch(e) {}
  if (arrived) {
    document.body.classList.add('fbt-arriving');
    window.scrollTo(0,0);
    window.setTimeout(function(){document.body.classList.remove('fbt-arriving');},340);
  }
  var busy=false;
  document.addEventListener('click',function(e){
    if(e.defaultPrevented || e.button!==0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || busy) return;
    var a=e.target.closest('a[href]');
    if(!a || a.hasAttribute('download') || (a.target && a.target!=='_self')) return;
    var raw=a.getAttribute('href');
    if(!raw || raw[0]==='#' || /^(mailto:|tel:|javascript:)/i.test(raw)) return;
    var url;
    try {url=new URL(raw,location.href);}catch(err){return;}
    if(url.origin!==location.origin || !pages.test(url.pathname.split('/').pop()))return;
    if(url.pathname===location.pathname && url.search===location.search) return;
    e.preventDefault(); busy=true;
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){location.href=url.href;return;}
    document.body.classList.add('fbt-leaving');
    try {sessionStorage.setItem('fbt-fading-navigation','1');} catch(err){}
    window.setTimeout(function(){location.href=url.href;},195);
  });
  window.addEventListener('pageshow',function(e){
    if(e.persisted){busy=false;document.body.classList.remove('fbt-leaving');}
  });
})();
