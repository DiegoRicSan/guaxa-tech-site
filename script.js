(()=>{
  const config=window.GUAXA_CONFIG||{};
  const telegramUrl=String(config.telegramUrl||'').trim();
  const validTelegram=/^https:\/\/(?:t\.me|telegram\.me)\/[A-Za-z0-9_+\-/]+(?:\?[A-Za-z0-9_=&%-]+)?$/i.test(telegramUrl);
  const notice=document.getElementById('notice');
  let noticeTimer;
  document.querySelectorAll('.js-telegram').forEach(link=>{
    if(validTelegram){link.href=telegramUrl;link.target='_blank';link.rel='noopener noreferrer';}
    else{link.addEventListener('click',event=>{
      event.preventDefault();
      notice.textContent='O link do grupo ainda está sendo configurado. Volte em breve!';
      notice.hidden=false;
      clearTimeout(noticeTimer);
      noticeTimer=setTimeout(()=>notice.hidden=true,4200);
    });}
  });
  document.getElementById('year').textContent=new Date().getFullYear();
})();
