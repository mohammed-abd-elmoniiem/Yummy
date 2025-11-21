
import { hideAll } from "./hideAll";
import { createRecipeSection } from "./createRecipe";
/**
 * 
 * <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="recipe position-relative rounded-4 overflow-hidden">
            <div class="image">
              <img
                class="w-100"
                src="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"
                alt="image"
              />
            </div>
            <div
              class="layer position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center"
            >
              <p class="recipe-name">Spicy Arrabiata Penne</p>
            </div>
          </div>
        </div>
 */



export function createRecipeCard(recipe){

  // console.log(recipe)
    
    const containerDiv = document.createElement('div');
    containerDiv.className = "recipe col-12 col-sm-6 col-md-4 col-lg-3 g-3";
   


    const recipeDiv = document.createElement('div');
    recipeDiv.className = ' position-relative rounded-4 overflow-hidden';


    const imgDiv = document.createElement('div');
    imgDiv.className = 'image';

    const img = document.createElement('img');
    img.src = recipe['strMealThumb']+'/medium';
    img.className = 'w-100';
    img.alt = recipe['strMeal'];

    const layerDiv = document.createElement('div');
    layerDiv.className ="layer position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center";
   



    const pMealName = document.createElement('p');
    pMealName.innerHTML = recipe['strMeal']
    pMealName.className ="recipe-name text-center";





    layerDiv.append(pMealName);
    imgDiv.append(img);

    recipeDiv.append(imgDiv);
    recipeDiv.append(layerDiv);

    containerDiv.append(recipeDiv);

    // dispaly the recipe with datails on click on the card
    containerDiv.addEventListener('click',async function(eve){
     
       hideAll();   
      document.body.append( await createRecipeSection(recipe['idMeal']))



    })

    return containerDiv


}