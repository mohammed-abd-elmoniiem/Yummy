

import { hideAll } from "./hideAll.js";
import { createIngredient } from "./ingredient.js";

const sectionElement = document.createElement('section');
sectionElement.className = 'ingredients container-lg py-5 d ';
sectionElement.innerHTML = `
<h2 class="text-capitalize"> ingredients </h2>


`
/**
 * 
 * @param {
 * } allIngredients 
 * @returns 
 * 
 * 
 * {
  "idIngredient": "1",
  "strIngredient": "Chicken",
  "strDescription": "The chicken is a type of domesticated fowl, a subspecies of the red junglefowl (Gallus gallus). It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011. There are more chickens in the world than any other bird or domesticated fowl. Humans keep chickens primarily as a source of food (consuming both their meat and eggs) and, less commonly, as pets. Originally raised for cockfighting or for special ceremonies, chickens were not kept for food until the Hellenistic period (4th–2nd centuries BC).\r\n\r\nGenetic studies have pointed to multiple maternal origins in South Asia, Southeast Asia, and East Asia, but with the clade found in the Americas, Europe, the Middle East and Africa originating in the Indian subcontinent. From ancient India, the domesticated chicken spread to Lydia in western Asia Minor, and to Greece by the 5th century BC. Fowl had been known in Egypt since the mid-15th century BC, with the \"bird that gives birth every day\" having come to Egypt from the land between Syria and Shinar, Babylonia, according to the annals of Thutmose III.",
  "strThumb": "https://www.themealdb.com/images/ingredients/chicken.png",
  "strType": null
}
 */

export function ingredients(allIngredients){

    const ingredientsContainerDiv = document.createElement('div');
    ingredientsContainerDiv.className = 'd-flex flex-wrap gap-2 justify-content-center'

    console.log(allIngredients)
 

    allIngredients.forEach(ingredientData => {
       
       ingredientsContainerDiv.append(createIngredientDiv(ingredientData))
        
    });
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
        console.log(eve.target)
        hideAll()

        document.body.append( await createIngredient(ingredientData['strIngredient']) ) 

    })

    return containerDiv
}