(function(){
  var hd=document.querySelector('header');
  var on='border-border bg-[var(--header-bg)] backdrop-blur-xl'.split(' ');
  var off='border-transparent bg-transparent'.split(' ');
  function s(){var sc=window.scrollY>12;on.forEach(function(c){hd.classList.toggle(c,sc)});off.forEach(function(c){hd.classList.toggle(c,!sc)});}
  s();window.addEventListener('scroll',s,{passive:true});
  var b=document.querySelector('button[aria-controls="mobile-nav"]'),m=document.getElementById('mobile-nav');
  var menu=b.innerHTML;
  var x='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>';
  function set(o){m.classList.toggle('hidden',!o);m.classList.toggle('block',o);b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Close menu':'Open menu');b.innerHTML=o?x:menu;document.body.style.overflow=o?'hidden':'';}
  b.addEventListener('click',function(){set(m.classList.contains('hidden'))});
  m.addEventListener('click',function(e){if(e.target.closest('a'))set(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});
})();
