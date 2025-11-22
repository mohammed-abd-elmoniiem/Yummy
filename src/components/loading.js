import gsap from "gsap";



export const loadingDiv = document.createElement('div');
loadingDiv.className = 'loading-container'

for(let i =0;i<5;i++){

    const Div = document.createElement('div');
    Div.className = 'loading-circle'
    loadingDiv.append(Div)

}

gsap.to(loadingDiv.querySelectorAll('div.loading-circle'),{
    duration:0.4,
    y:15,
    repeat:-1,
    stagger:{
        each:0.1,
        from:'center',
        yoyo:false
    },
    yoyo:true,
    

    

})