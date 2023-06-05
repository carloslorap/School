window.addEventListener('scroll',()=>{
 document.querySelector('nav').classList.toggle('window-scroll',window.scrollY >100);
})

///efecto del faqs///////////
const faqs=document.querySelectorAll('.faq');
faqs.forEach(faq => {faq.addEventListener('click',()=>{
    faq.classList.toggle('open');

    const icon=faq.querySelector('.faq_icon i');
    if (icon.className ==='uil uil-plus') {
        icon.className ='uil uil-minus';
    }else{
        icon.className ='uil uil-plus';
    }
})})

///////////////faqs (enb)/////////////

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });




  /////functions para el menu desplegable ////

  const menu =document.querySelector('.nav_menu');
  const menuBtn =document.querySelector('#open-menu-btn');
  const closeBtn =document.querySelector('#close-menu-btn');

  menuBtn.addEventListener('click', ()=>{
    menu.style.display='flex';
    closeBtn.style.display='inline-block';
    menuBtn.style.display='none';
  })

  ///cremas una function para q cierre el menu
  let closenav =()=>{
    menu.style.display='none';
    closeBtn.style.display='none';
    menuBtn.style.display='inline-block';
  }


 /// y aqui le damos esa orden cuando de click al boton de cerrar
  closeBtn.addEventListener('click',closenav)