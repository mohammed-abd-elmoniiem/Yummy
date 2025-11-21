import { getRecipeById } from "../APIs/getrecipeById";
import { getRecipesByCategory } from "../APIs/getRecipesByCategory";
import { getRecipesSearchByName } from "../APIs/getRecipeSearchByName";
import { createRecipeCard } from "./createRecipeCard";

const sectionElement = document.createElement('section');
sectionElement.className = 'search container-lg py-5 '


const returnDataDiv = document.createElement('div');
returnDataDiv.className = 'recipes-cards row py-5 px-2'



export async function createCategory(categoryName){

    sectionElement.innerHTML = `
      <h2 class="" > all recipes of ${categoryName} </h2>

       
`



      const recipes = await getRecipesByCategory(categoryName);
      returnDataDiv.innerHTML = " "
      recipes['meals'].forEach(async element => {
        

        const recipe = await getRecipeById(element['idMeal'])

        returnDataDiv.append(createRecipeCard(recipe['meals'][0]))

      })

      sectionElement.append(returnDataDiv);

    return sectionElement;



}