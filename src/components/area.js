import { getRecipeById } from "../APIs/getrecipeById";
import { getRecipesByArea } from "../APIs/getRecipesByArea";
import { getRecipesByIngredient } from "../APIs/getRecipesByIngredient";

import { createRecipeCard } from "./createRecipeCard";
import { loadingDiv } from "./loading";

const sectionElement = document.createElement('section');
sectionElement.className = 'area container-lg py-5 '


const returnDataDiv = document.createElement('div');
returnDataDiv.className = 'recipes-cards row py-5 px-2'



export async function createArea(areaName){
  document.body.append( sectionElement);

    sectionElement.innerHTML = `<h2 class="" > all recipes of ${areaName} </h2> `

    sectionElement.append(loadingDiv)

       
      const recipes = await getRecipesByArea(areaName);
      returnDataDiv.innerHTML = " "
      recipes['meals'].forEach(async element => {
        

        const recipe = await getRecipeById(element['idMeal']);
        loadingDiv.remove()

        returnDataDiv.append(createRecipeCard(recipe['meals'][0]))

      })

      sectionElement.append(returnDataDiv);

   


}