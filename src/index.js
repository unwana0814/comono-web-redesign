const menu = document.querySelector("#menu");
const openIcon = document.querySelector("#open");

openIcon.addEventListener("click", ()=> {
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden')
        // & openIcon.classList.add('hidden');
    }else{
        menu.classList.add('hidden')
    }
})

$(window).on('load', function(){
    $('.spin-wrapper').fadeOut();
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoplay:{
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });




