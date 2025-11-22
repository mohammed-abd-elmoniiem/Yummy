
import { createArea } from "./area.js";
import { hideAll } from "./hideAll.js";
import { getAllAreas } from "../APIs/getAllAreas.js";

const sectionElement = document.createElement('section');
sectionElement.className = 'areas container-lg py-5 d ';


export async function areas(){
   sectionElement.innerHTML = `<h2 class="text-capitalize"> Areas </h2>`


    const areasContainerDiv = document.createElement('div');
    areasContainerDiv.innerHTML = ""
    areasContainerDiv.className = 'd-flex flex-wrap gap-2 justify-content-center'


    document.body.append(sectionElement)


    const result = await getAllAreas();
    const allAreas = result['meals'];
    

    allAreas.forEach(areaData => {
       
       areasContainerDiv.append(createAreaDiv(areaData))
        
    });
    sectionElement.append(areasContainerDiv)




    return sectionElement;

}


function createAreaDiv(areaData){

     const containerDiv = document.createElement('div');
    containerDiv.className = "conatainer-area d-flex flex-wrap flex-grow-1";
   


    const areaDiv = document.createElement('div');
    areaDiv.className = 'area rounded-2 overflow-hidden px-2 py-1 d-flex flex-grow-1 justify-content-center  align-items-center gap-2 ' ;


   const iTag = document.createElement('i')
   iTag.className =  'fa fa-location'
   



    const pAreaName = document.createElement('p');
    pAreaName.innerHTML = areaData['strArea']
    pAreaName.className =" text-center m-0";




     areaDiv.append(iTag);
    areaDiv.append(pAreaName);
   



    containerDiv.append(areaDiv);
    


    // handler of click on category
    containerDiv.addEventListener('click',async function(eve){
        console.log(eve.target)
        hideAll()

        document.body.append( await createArea(areaData['strArea']) ) 

    })

    return containerDiv
}