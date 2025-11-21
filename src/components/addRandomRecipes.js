import { createRecipeCard } from "./createRecipeCard";
export function addRecipes(recipes){

    const recipesContainer = document.querySelector('div.recipes-cards');
   
    recipes.forEach(element => {
        // console.log('hghghgh=>',element)

        recipesContainer.append(createRecipeCard(element))

        
    });

    
}