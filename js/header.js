export default function header(){

    window.addEventListener('scroll', (e) =>{
        const nav = document.querySelector('.lat-nav');
        const header = document.querySelector('.header');        
        header.classList.toggle('active', window.scrollY > 0); 

        if(nav.classList.contains('active')){
        header.classList.add('active')
        }        
    
    })
}