import { createRecipeCard } from "./createRecipeCard";
import { getRecipesSearchByName } from "../APIs/getRecipeSearchByName";
export async function addRecipes(){

    const recipesContainer = document.querySelector('div.recipes-cards');
   

   const recipes = await getRecipesSearchByName(' ');

recipesContainer.innerHTML = ' '

    recipes['meals'].forEach(element => {
        
        recipesContainer.append(createRecipeCard(element))

        
    });

    
}