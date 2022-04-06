export default function faq(){

    const question = document.querySelectorAll('.container .container-question');
            

    document.addEventListener('click', () => {
        question.forEach(el => {
            el.addEventListener('click', ()=>{
                el.classList.toggle('is-active');        
            })                
        });

        
    })  
}