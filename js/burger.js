export default function latNav(panelBtn,panel){   

    document.addEventListener('click',(e)=>{        

        if(e.target.matches(panelBtn) || (e.target.matches(`${panelBtn} *`)) ){
            document.querySelector(panel).classList.toggle('active');
            document.querySelector(panelBtn).classList.toggle('active');
            document.querySelector('.header').classList.add('active');
        }

        
        

        
        

        
    });


    
}