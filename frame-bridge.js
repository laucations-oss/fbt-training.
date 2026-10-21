(function(){
  if(window.parent===window) return;
  document.addEventListener('click',function(e){
    if(e.defaultPrevented || e.button!==0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a=e.target.closest('a[href]');
    if(!a || a.hasAttribute('download') || (a.target && a.target!=='_self'))return;
    var raw=a.getAttribute('href');
    if(!raw || raw.charAt(0)==='#' || /^(mailto:|tel:|javascript:)/i.test(raw))return;
    var u;try{u=new URL(raw,location.href)}catch(err){return}
    if(!/^(?:index|home|about|people|services|projects|news|careers|contact|client-portal|intogram|linkedout)\.html$/i.test(u.pathname.split('/').pop()))return;
    e.preventDefault();e.stopImmediatePropagation();
    window.parent.postMessage({type:'fbt-navigate',page:u.pathname.split('/').pop()+u.hash},'*');
  },true);
  window.addEventListener('DOMContentLoaded',function(){window.parent.postMessage({type:'fbt-title',title:document.title},'*')});
})();