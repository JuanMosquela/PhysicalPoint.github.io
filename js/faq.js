export default function faq(){

    const question = document.querySelectorAll('.container .container-question');

    question.forEach(el => {
        el.addEventListener('click', ()=>{
            el.classList.toggle('is-active');        
        })
        
    });
    
}