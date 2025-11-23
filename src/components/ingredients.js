

import { hideAll } from "./hideAll.js";
import { createIngredient } from "./ingredient.js";

import { getAllIngredients } from "../APIs/getAllIngredients.js";
import { loadingDiv } from "./loading.js";

const sectionElement = document.createElement('section');
sectionElement.className = 'ingredients container-lg py-5 d ';



export async function ingredients(){
    
    sectionElement.innerHTML = `<h2 class="text-capitalize"> ingredients </h2>`
    document.body.append(sectionElement);
    sectionElement.append(loadingDiv)

   

    


    const result =  await getAllIngredients();
    const allIngredients = result['meals'].splice(0,20);


    const ingredientsContainerDiv = document.createElement('div');
    ingredientsContainerDiv.className = 'd-flex flex-wrap gap-2 justify-content-center'
 

    allIngredients.forEach(ingredientData => {
       
       ingredientsContainerDiv.append(createIngredientDiv(ingredientData))
        
    });
    loadingDiv.remove()
    sectionElement.append(ingredientsContainerDiv)




    return sectionElement;

}


function createIngredientDiv(ingredientData){

     const containerDiv = document.createElement('div');
    containerDiv.className = " d-flex flex-wrap";
   


    const ingredientDiv = document.createElement('div');
    ingredientDiv.className = 'ingredient rounded-4 overflow-hidden p-2 d-flex flex-column align-items-center ' ;


    const imgDiv = document.createElement('div');
    imgDiv.className = 'image ';

    const img = document.createElement('img');
    img.src = ingredientData['strThumb'];
    img.className = 'w-100';
    img.alt =ingredientData['strIngredient'];

    const layerDiv = document.createElement('div');
    layerDiv.className ="layer d-flex justify-content-center align-items-center w-75";
   



    const pCategoryName = document.createElement('p');
    pCategoryName.innerHTML = ingredientData['strIngredient']
    pCategoryName.className =" text-center";





    layerDiv.append(pCategoryName);
    imgDiv.append(img);

    ingredientDiv.append(imgDiv);
    ingredientDiv.append(layerDiv);

    containerDiv.append(ingredientDiv);
    


    // handler of click on category
    containerDiv.addEventListener('click',async function(eve){
        hideAll()

        document.body.append( await createIngredient(ingredientData['strIngredient']) ) 

    })

    return containerDiv
}