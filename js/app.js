const W=window.WEDDING;
const $=(s)=>document.querySelector(s);
const $$=(s)=>document.querySelectorAll(s);

function fill(sel, value){
  $$(sel).forEach(e => e.textContent = value ?? '');
}
function fillHTML(sel, value){
  $$(sel).forEach(e => e.innerHTML = value ?? '');
}
function setAttr(sel, attr, value){
  const e=$(sel);
  if(e && value) e.setAttribute(attr, value);
}

fill('[data-groom]',W.groom);
fill('[data-bride]',W.bride);
fill('[data-short-names]',W.shortNames);
fill('[data-date]',W.dateText);
fill('[data-groom-parent]',W.groomParent);
fill('[data-bride-parent]',W.brideParent);
fillHTML('[data-groom-address]',W.groomAddress);
fillHTML('[data-bride-address]',W.brideAddress);
fill('[data-lunar0]',W.lunar0);
fill('[data-lunar]',W.lunar);
fill('[data-ceremony-time]',W.ceremonyTime);
fillHTML('[data-groom-party-address]',W.groomPartyAddress);
fillHTML('[data-bride-party-address]',W.bridePartyAddress);

fill('[data-bride-party-date]', `${W.bridePartyWeekday}<br>${W.bridePartyDate}`);
fill('[data-groom-party-date]', `${W.groomPartyWeekday}<br>${W.groomPartyDate}`);
// Restore intended line breaks for the two date blocks.
$$('[data-bride-party-date],[data-groom-party-date]').forEach(e=>{
  const parts=e.textContent.split('\n');
  e.innerHTML = `${parts[0]}<br><strong>${parts[1] || ''}</strong>`;
});

setAttr('#heroImg','src',W.images.cover);
setAttr('#groomImg','src',W.images.groom);
setAttr('#brideImg','src',W.images.brideCard);
['story1','story2','story3','story4'].forEach((id,i)=>setAttr('#'+id,'src',W.images.story?.[i]));
setAttr('#qrImg','src',W.images.qr);
setAttr('#brideMap','href',W.maps.bride);
setAttr('#groomMap','href',W.maps.groom);

const grid=$('#galleryGrid');
W.images.gallery.forEach((src,i)=>{
  const fig=document.createElement('figure'); fig.className='reveal';
  const img=document.createElement('img'); img.src=src; img.alt=`Ảnh cưới ${i+1}`; fig.appendChild(img); grid.appendChild(fig);
});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.1});
$$('.reveal').forEach(e=>observer.observe(e));

const drawer=$('#drawer');
$('#menuToggle').addEventListener('click',()=>drawer.classList.toggle('open'));
$$('.drawer a').forEach(a=>a.addEventListener('click',()=>drawer.classList.remove('open')));

const wishForm=$('#wishForm');
const wishStatus=$('#wishStatus');
const wishSubmit=$('#wishSubmit');

function setWishStatus(message, type=''){
  if(!wishStatus) return;
  wishStatus.textContent=message;
  wishStatus.classList.remove('success','error');
  if(type) wishStatus.classList.add(type);
}

if(wishForm){
  wishForm.addEventListener('submit', async (e)=>{
    e.preventDefault();

    if(!W.wishEndpoint){
      setWishStatus('Hệ thống nhận lời chúc chưa được cấu hình.','error');
      return;
    }

    const name=wishForm.elements.name.value.trim();
    const msg=wishForm.elements.message.value.trim();
    const website=wishForm.elements.website.value.trim();

    if(!name || !msg){
      setWishStatus('Vui lòng nhập tên và lời chúc.','error');
      return;
    }
    if(website) return; // honeypot

    wishSubmit.disabled=true;
    wishSubmit.textContent='ĐANG GỬI...';
    setWishStatus('Đang gửi lời chúc của bạn...');

    try{
      const body=new URLSearchParams();
      body.set('name',name);
      body.set('message',msg);
      body.set('website','');

      const response=await fetch(W.wishEndpoint,{
        method:'POST',
        body,
        mode:'no-cors',
        redirect:'follow'
      });

      setWishStatus(`💌 Cảm ơn ${name}! Lời chúc đã được gửi đến Dũng & Trâm.`,'success');
      wishForm.reset();
    }catch(err){
      console.error('Wish submit error:',err);
      setWishStatus('Không gửi được lúc này. Vui lòng thử lại sau.','error');
    }finally{
      wishSubmit.disabled=false;
      wishSubmit.textContent='GỬI LỜI CHÚC';
    }
  });
}
