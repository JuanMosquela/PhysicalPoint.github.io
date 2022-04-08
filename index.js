import latNav from './js/burger.js';
import header from './js/header.js';
import faq from './js/faq.js';
import scrollToTop from './js/scroll.js';

document.addEventListener('DOMContentLoaded', (e) => {
    latNav('.menu', '.lat-nav' );
    header();
    faq();
    scrollToTop('.scroll-btn');
})


// // SECCION SLIDER-HERO


var swiper = new Swiper(".hero-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay:7500,
        disableOnInteraction:false,
    },    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }, 
    
    
});

//SECCION SLIDER-BLOG

var swiper = new Swiper(".blog-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay:7500,
        disableOnInteraction:false,
    },
    pagination: {
        el:".swiper-pagination",
        clickable:true,
    },
    breakpoints: {
        0: {
            slidesPerView:1,
        },
        868: {
            slidesPerView:2,
        },
        1200: {
            slidesPerView:3,
        },
    }
});





