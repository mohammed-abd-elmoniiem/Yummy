import { getRecipeById } from "../APIs/getrecipeById";
import { getRecipesByIngredient } from "../APIs/getRecipesByIngredient";

import { createRecipeCard } from "./createRecipeCard";
import { loadingDiv } from "./loading";

const sectionElement = document.createElement('section');
sectionElement.className = 'ingredient container-lg py-5 '


const returnDataDiv = document.createElement('div');
returnDataDiv.className = 'recipes-cards row py-5 px-2'



export async function createIngredient(ingredientName){
  document.body.append(sectionElement)

    sectionElement.innerHTML = `<h2 class="" > all recipes of ${ingredientName} </h2> `
    sectionElement.append(loadingDiv)

       
    const recipes = await getRecipesByIngredient(ingredientName);
    returnDataDiv.innerHTML = " "
    recipes['meals'].forEach(async element => {
      

      const recipe = await getRecipeById(element['idMeal'])

      returnDataDiv.append(createRecipeCard(recipe['meals'][0]))

    })

    loadingDiv.remove()

    sectionElement.append(returnDataDiv);

    



}