
import gsap from "gsap";

const toggleIcon = document.querySelector('nav div.nav-header i.fa.toggle');
const navBodyWidth =document.querySelector('nav div.nav-body').getBoundingClientRect().width
console.log(toggleIcon,navBodyWidth)


// set initial state
gsap.to('nav',{
    duration:0,
    left:-navBodyWidth
});

gsap.to('nav div.nav-body ul.links li',{
    opacity:0,
    y:100,
    duration:0,
    

})


toggleIcon.addEventListener('click',function(eve){
    
    
    
    gsap.to('nav',{
        duration:0.3,
        left:toggleIcon.classList.contains('fa-bars')? 0:-navBodyWidth,
        ease:'power3',
        onComplete:e=>{
          toggleIcon.classList.toggle('fa-close');
          toggleIcon.classList.toggle('fa-bars'); 

        }
        

    })

     if(toggleIcon.classList.contains('fa-close')){
        gsap.to('nav div.nav-body ul.links li',{
        opacity:0,
        y:100,
        duration:0.1,
        delay:0.4
        

        })

    }else{
        gsap.to('nav div.nav-body ul.links li',{
        opacity:1,
        y:0,
        duration:0.2,
        delay:0.2,
        stagger:0.1

        })

    }

  

    // gsap.to('nav div.nav-body',{
    //     duration:2,
    //     left:toggleIcon.classList.contains('fa-bars')?-navBodyWidth :0,
    // });


    
})


// close nav when clicking on any thaing

window.addEventListener('click',eve=>{

    if(toggleIcon.classList.contains('fa-close') & eve.target != toggleIcon){

        gsap.to('nav div.nav-body ul.links li',{
        opacity:0,
        y:100,
        duration:0,
        delay:0.4
        

        })
         toggleIcon.classList.toggle('fa-close');
         toggleIcon.classList.toggle('fa-bars');

        gsap.to('nav',{
        duration:0.5,
        left:-navBodyWidth,
        ease:'power3',
      
            })

    }


   
//     gsap.to('nav',{
//     duration:0,
//     left:-navBodyWidth
// });

})

document.querySelector('nav div.nav-header').addEventListener('click',function(eve){
    if(eve.target == this & toggleIcon.classList.contains('fa-bars')){

            gsap.to('nav',{
        duration:0.3,
        left:0,
        ease:'power3',
        onComplete:e=>{
          toggleIcon.classList.toggle('fa-close');
          toggleIcon.classList.toggle('fa-bars'); 

          gsap.to('nav div.nav-body ul.links li',{
            opacity:1,
            y:0,
            duration:0.2,
            delay:0.2,
            stagger:0.1

            })

        }
        

    })

   

  

    }
})
