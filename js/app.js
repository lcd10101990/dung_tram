const W=window.WEDDING;
const $=(s)=>document.querySelector(s);
const $$=(s)=>document.querySelectorAll(s);
function fill(sel, value){$$(sel).forEach(e=>e.innerHTML=value)}
fill('[data-groom]',W.groom); fill('[data-bride]',W.bride); fill('[data-short-names]',W.shortNames);
fill('[data-date]',W.dateText); fill('[data-groom-parent]',W.groomParent); fill('[data-bride-parent]',W.brideParent);
fill('[data-groom-address]',W.groomAddress); fill('[data-bride-address]',W.brideAddress);
fill('[data-lunar]',W.lunar); fill('[data-ceremony-time]',W.ceremonyTime);
fill('[data-groom-party-address]',W.groomPartyAddress); fill('[data-bride-party-address]',W.bridePartyAddress);
$('#heroImg').src=W.images.cover; $('#groomImg').src=W.images.groom; $('#brideImg').src=W.images.brideCard;
['story1','story2','story3','story4'].forEach((id,i)=>$('#'+id).src=W.images.story[i]);
$('#qrImg').src=W.images.qr; $('#brideMap').href=W.maps.bride; $('#groomMap').href=W.maps.groom;

const grid=$('#galleryGrid');
W.images.gallery.forEach((src,i)=>{
  const fig=document.createElement('figure'); fig.className='reveal';
  const img=document.createElement('img'); img.src=src; img.alt=`Ảnh cưới ${i+1}`; fig.appendChild(img); grid.appendChild(fig);
});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.1});
$$('.reveal').forEach(e=>observer.observe(e));

setTimeout(()=>$('#preloader').remove(),700);

const drawer=$('#drawer');
$('#menuToggle').addEventListener('click',()=>drawer.classList.toggle('open'));
$$('.drawer a').forEach(a=>a.addEventListener('click',()=>drawer.classList.remove('open')));

let audio=null, playing=false;
$('#musicToggle').addEventListener('click',()=>{
  if(!audio) audio=new Audio('music/wedding.mp3'),audio.loop=true;
  if(!playing){audio.play().then(()=>{playing=true;$('#musicToggle').textContent='Ⅱ'}).catch(()=>alert('Thêm file music/wedding.mp3 rồi bấm lại.'))}
  else{audio.pause();playing=false;$('#musicToggle').textContent='♪'}
});

// ===== GỬI LỜI CHÚC ONLINE =====
const wishForm=$('#wishForm');
const wishStatus=$('#wishStatus');
const wishSubmit=$('#wishSubmit');
if(wishForm){
  if(W.wishEndpoint) wishForm.action=W.wishEndpoint;
  else {
    wishStatus.textContent='Chưa cấu hình nhận lời chúc online.';
    wishStatus.classList.add('error');
  }

  wishForm.addEventListener('submit',e=>{
    if(!W.wishEndpoint){
      e.preventDefault();
      alert('Chưa cấu hình hệ thống nhận lời chúc. Hãy xem HUONG-DAN-GUI-LOI-CHUC.md.');
      return;
    }
    const name=wishForm.name.value.trim();
    const msg=wishForm.message.value.trim();
    if(!name || !msg){e.preventDefault();return;}
    wishSubmit.disabled=true;
    wishSubmit.textContent='ĐANG GỬI...';
    wishStatus.textContent='Đang gửi lời chúc của bạn...';
    setTimeout(()=>{
      wishStatus.textContent=`💌 Cảm ơn ${name}! Lời chúc đã được gửi đến Dũng & Trâm.`;
      wishStatus.classList.add('success');
      wishForm.reset();
      wishSubmit.disabled=false;
      wishSubmit.textContent='GỬI LỜI CHÚC';
    },900);
  });
}
