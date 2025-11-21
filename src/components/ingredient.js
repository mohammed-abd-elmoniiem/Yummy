import { getRecipeById } from "../APIs/getrecipeById";
import { getRecipesByIngredient } from "../APIs/getRecipesByIngredient";

import { createRecipeCard } from "./createRecipeCard";

const sectionElement = document.createElement('section');
sectionElement.className = 'ingredient container-lg py-5 '


const returnDataDiv = document.createElement('div');
returnDataDiv.className = 'recipes-cards row py-5 px-2'



export async function createIngredient(ingredientName){

    sectionElement.innerHTML = `<h2 class="" > all recipes of ${ingredientName} </h2> `

       
      const recipes = await getRecipesByIngredient(ingredientName);
      returnDataDiv.innerHTML = " "
      recipes['meals'].forEach(async element => {
        

        const recipe = await getRecipeById(element['idMeal'])

        returnDataDiv.append(createRecipeCard(recipe['meals'][0]))

      })

      sectionElement.append(returnDataDiv);

    return sectionElement;



}