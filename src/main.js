import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.css';
import './style.css';
import { addRecipes } from './components/addRandomRecipes';
import { searchChar } from './constants';
import { getRandomRecipes } from './APIs/getRandomRecipes';
import { createRecipeSection } from './components/createRecipe';
import gsap from 'gsap';
import { toggleHeaderDiplay } from './animation/toggleHeaderdisplay';
import { getRecipeById } from './APIs/getrecipeById';
import { createSearchSection } from './components/searchSection';
import { getRecipesSearchByName } from './APIs/getRecipeSearchByName';
import { getAllCategories } from'./APIs/getAllCategories.js'
import { categories } from './components/categories.js';
import { getAllIngredients } from './APIs/getAllIngredients.js';
import { ingredients } from './components/ingredients.js';
import { hideAll } from './components/hideAll.js';









// add random recipes 

// (async function() {
//     for(let i = 0 ;i< 15 ;i++){
//         const recipes = await getRandomRecipes();
//         addRecipes(recipes['meals'])}
// })()


const data = {
      "idMeal": "53158",
      "strMeal": "Air fryer patatas bravas",
      "strMealAlternate": null,
      "strCategory": "Vegetarian",
      "strArea": "Spanish",
      "strInstructions": "step 1\r\nSoak the potatoes in just-boiled water for 30 mins, then drain and leave to air-dry for 5 mins. Heat the air fryer to 200C. Tip the potatoes into a bowl and drizzle over 1 tbsp of the oil and add 1/2 tsp each of salt and freshly ground black pepper. Mix to coat the potatoes all over, then tip into the air fryer basket and cook for 20-30 mins until crisp and golden.\r\n\r\nstep 2\r\nMeanwhile, heat the remaining oil in a small pan over a medium-low heat and fry the onion for 8-10 mins until softened but not golden. Stir in the garlic and cook for a minute before adding the paprika and cooking for 30 seconds more. Stir in the tomato purée, cook for 1 min, then tip in the chopped tomatoes. Cook for 5-10 mins over a medium heat until thickened slightly.\r\n\r\nstep 3\r\nOnce the potatoes are cooked, tip out onto a platter and pour over the tomato sauce. Sprinkle with the basil leaves, then serve.",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/3m8yae1763257951.jpg",
      "strTags": null,
      "strYoutube": "https://www.youtube.com/watch?v=kzLaw6PG2UY",
      "strIngredient1": "Potatoes",
      "strIngredient2": "Olive Oil",
      "strIngredient3": "Onion",
      "strIngredient4": "Garlic",
      "strIngredient5": "Paprika",
      "strIngredient6": "Tomato Puree",
      "strIngredient7": "Tinned Tomatos",
      "strIngredient8": "Basil Leaves",
      "strIngredient9": "",
      "strIngredient10": "",
      "strIngredient11": "",
      "strIngredient12": "",
      "strIngredient13": "",
      "strIngredient14": "",
      "strIngredient15": "",
      "strIngredient16": "",
      "strIngredient17": "",
      "strIngredient18": "",
      "strIngredient19": "",
      "strIngredient20": "",
      "strMeasure1": "900g",
      "strMeasure2": "3  tablespoons",
      "strMeasure3": "1 chopped",
      "strMeasure4": "1 clove peeled crushed",
      "strMeasure5": "1 tblsp ",
      "strMeasure6": "1 tblsp ",
      "strMeasure7": "225g",
      "strMeasure8": "To serve",
      "strMeasure9": " ",
      "strMeasure10": " ",
      "strMeasure11": " ",
      "strMeasure12": " ",
      "strMeasure13": " ",
      "strMeasure14": " ",
      "strMeasure15": " ",
      "strMeasure16": " ",
      "strMeasure17": " ",
      "strMeasure18": " ",
      "strMeasure19": " ",
      "strMeasure20": " ",
      "strSource": "https://www.bbcgoodfood.com/recipes/air-fryer-patatas-bravas",
      "strImageSource": null,
      "strCreativeCommonsConfirmed": null,
      "dateModified": "2025-11-16 01:49:18"
    }

// document.body.append(createRecipeSection(data));


function init(){
  // document.querySelector();
  gsap.to('header',{
    opacity:1,
    onComplete:()=>{

      // add random recipes 

      (async function() {
          for(let i = 0 ;i< 15 ;i++){
              const recipes = await getRandomRecipes();
              addRecipes(recipes['meals'])}
      })()

    }
  })
}

init();

// links handlers

// on click on home link  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
document.querySelector('nav li:has(a[href="#home"])').addEventListener('click',eve=>{

  hideAll(true);


});
// ------------------------------------------------------------------------------------------------


// on display on search link ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
document.querySelector('nav li:has(a[href="#search"])').addEventListener('click',eve=>{
  hideAll()

  document.body.append( createSearchSection());

});
// -----------------------------------------------------------------------------------------------------


// on display on categories link +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
document.querySelector('nav li:has(a[href="#categories"])').addEventListener('click',async eve=>{
  
  hideAll()

  const result = await getAllCategories()
 
  document.body.append(categories(result))

});
// -----------------------------------------------------------------------------------------------------------


// on display on categories link +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
document.querySelector('nav li:has(a[href="#ingredients"])').addEventListener('click',async eve=>{
  
  hideAll()

  const result = await getAllIngredients()
  

  document.body.append(ingredients(result['meals'].slice(0,15)))

});
// -----------------------------------------------------------------------------------------------------------
