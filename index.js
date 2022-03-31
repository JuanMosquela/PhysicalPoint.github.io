const $openClose=document.getElementById('open-close');
const $nav=document.getElementById('lat-nav');
const $themeToggler= document.querySelector('.theme');
const $question = document.querySelectorAll('.container .container-question');
const $arrow = document.getElementById('arrow');


//HEADER

window.addEventListener('scroll', () =>{
    const header = document.querySelector('.header');
    header.classList.toggle('active', window.scrollY > 0)

})


//BAR-NAV

$openClose.addEventListener('click',()=>{
    $nav.classList.toggle('active');
});

// SECCION SLIDER-HERO


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

//FAQ

$question.forEach(el => {
    el.addEventListener('click', ()=>{
        el.classList.toggle('is-active');        
    })
    
});


