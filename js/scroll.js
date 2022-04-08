export default function scrollToTop(btn){
    const scrollBtn = document.querySelector(btn);    

    window.addEventListener('scroll', () => {

        const scrollY = document.documentElement.scrollTop;        

        if(scrollY > 600){
            scrollBtn.classList.remove('hidden')        
           
        }
        else{
            scrollBtn.classList.add('hidden')            
        }              
    });

    scrollBtn.addEventListener('click', (e) => {
        window.scrollTo({
            behavior:"smooth",
            top:0,
        });
    })


    
}