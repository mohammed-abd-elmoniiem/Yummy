import { getRecipeById } from "../APIs/getrecipeById";
import { getRecipesByCategory } from "../APIs/getRecipesByCategory";
import { getRecipesSearchByName } from "../APIs/getRecipeSearchByName";
import { createRecipeCard } from "./createRecipeCard";
import { loadingDiv } from "./loading";

const sectionElement = document.createElement('section');
sectionElement.className = 'category container-lg py-5 '


const returnDataDiv = document.createElement('div');
returnDataDiv.className = 'recipes-cards row py-5 px-2'



export async function createCategory(categoryName){

  document.body.append(sectionElement)

    sectionElement.innerHTML = `    <h2 class="" > all recipes of ${categoryName} </h2>  `;
    sectionElement.append(loadingDiv)



      const recipes = await getRecipesByCategory(categoryName);
      returnDataDiv.innerHTML = " "
      recipes['meals'].forEach(async element => {
        

        const recipe = await getRecipeById(element['idMeal'])

        returnDataDiv.append(createRecipeCard(recipe['meals'][0]))

      })

      loadingDiv.remove()

      sectionElement.append(returnDataDiv);





}