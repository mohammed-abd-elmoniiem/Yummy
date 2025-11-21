import gsap from "gsap";

const header = document.querySelector('header')
export function toggleHeaderDiplay(isVisible = false){
    if(isVisible){
        gsap.to(header,{
            opacity:1,
            height:'100%',
            duration:0.1,
            onStart:()=>{
                //  header.style.visibility = 'visible'
                // header.style.overflow= 'hidden'
                header.style.display = 'block'

            }
        });

    }else{
        gsap.to(header,{
            opacity:0,
            height:0,
            duration:0.15,
            onComplete:()=>{
                // header.style.visibility = 'hidden'
                // header.style.overflow= 'hidden'
                header.style.display = 'none'


            }
        });
    }
}