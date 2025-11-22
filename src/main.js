import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.css';
import './style.css';
import { addRecipes } from './components/addRandomRecipes';
// import { searchChar } from './constants';
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
import { getAllAreas } from './APIs/getAllAreas.js';
import { areas } from './components/areas.js';


import './animation/areaAnimation.js'
import { contact } from './components/contact.js';

import { loadingDiv } from './components/loading.js';










function init(){
  // document.querySelector();

    const recipesContainer = document.querySelector('div.recipes-cards');
    recipesContainer.append(loadingDiv)

    addRecipes()


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
  
  hideAll();
  categories();

});
// -----------------------------------------------------------------------------------------------------------


// on display ingredients link +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
document.querySelector('nav li:has(a[href="#ingredients"])').addEventListener('click',async eve=>{
  
  hideAll()
  ingredients()

});
// -----------------------------------------------------------------------------------------------------------


// on display ingredients link +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
document.querySelector('nav li:has(a[href="#areas"])').addEventListener('click',async eve=>{
  
  hideAll()
  areas()
  


});
// -----------------------------------------------------------------------------------------------------------


// on display contact link +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
document.querySelector('nav li:has(a[href="#contact"])').addEventListener('click',async eve=>{
  
  hideAll()
  document.body.append(contact())

});
// -----------------------------------------------------------------------------------------------------------
