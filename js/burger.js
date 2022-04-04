export default function latNav(){

    const openClose=document.querySelector('.menu');   
    const nav = document.querySelector('.lat-nav');
    

    openClose.addEventListener('click',(e)=>{
        

        const header = document.querySelector('.header');

        nav.classList.toggle('active');
        header.classList.add('active');
        

        
        

        
    });


    
}