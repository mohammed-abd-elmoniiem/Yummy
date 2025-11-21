

/**
 * 
 * <div class="d-flex justify-content-center align-items-start "><div class="image "><h2>Air fryer patatas bravas</h2><img class="w-100 rounded-3" src="https://www.themealdb.com/images/media/meals/3m8yae1763257951.jpg"><div class="more-info d-flex flex-wrap gap-3 align-items-center justify-content-start mt-3"><h2 class="">tags</h2><p class="area">Spanish</p><p class="category">Vegetarian</p><a target="_blank" href="https://www.bbcgoodfood.com/recipes/air-fryer-patatas-bravas">source</a><a target="_blank" href="https://www.youtube.com/watch?v=kzLaw6PG2UY">youtube</a></div></div></div><div><div class="recipe-description "><div class="instructions"><h2>instructions</h2><p class="instructions-p">step 1
Soak the potatoes in just-boiled water for 30 mins, then drain and leave to air-dry for 5 mins. Heat the air fryer to 200C. Tip the potatoes into a bowl and drizzle over 1 tbsp of the oil and add 1/2 tsp each of salt and freshly ground black pepper. Mix to coat the potatoes all over, then tip into the air fryer basket and cook for 20-30 mins until crisp and golden.

step 2
Meanwhile, heat the remaining oil in a small pan over a medium-low heat and fry the onion for 8-10 mins until softened but not golden. Stir in the garlic and cook for a minute before adding the paprika and cooking for 30 seconds more. Stir in the tomato purée, cook for 1 min, then tip in the chopped tomatoes. Cook for 5-10 mins over a medium heat until thickened slightly.

step 3
Once the potatoes are cooked, tip out onto a platter and pour over the tomato sauce. Sprinkle with the basil leaves, then serve.</p></div><div class="ingredients d-flex flex-column"><h2>ingredients</h2><ul class="ingredients d-flex gap-3 flex-wrap flex-column"><li> 900g Potatoes</li><li> 3  tablespoons Olive Oil</li><li> 1 chopped Onion</li><li> 1 clove peeled crushed Garlic</li><li> 1 tblsp  Paprika</li><li> 1 tblsp  Tomato Puree</li><li> 225g Tinned Tomatos</li><li> To serve Basil Leaves</li></ul></div></div></div>
 */

import { getRecipeById } from "../APIs/getrecipeById";


    // create elements first
const sectionRecipe = document.createElement('section');
sectionRecipe.className = 'recipe-detials row row-cols-1  row-cols-md-2 container-lg mx-auto py-5';


// first cell in the grid elements

const containerImageGrid = document.createElement('div');
containerImageGrid.className = 'd-flex justify-content-center align-items-start ';

const containerImageDiv = document.createElement('div');
containerImageDiv.className = 'image ';

const containerImageH2 = document.createElement('h2');

const image = document.createElement('img');
image.className = 'w-100 rounded-3';


// second cell elements in the grid

const containerDescriptionGrid = document.createElement('div');

const recipeDescriptionDiv = document.createElement('div');
recipeDescriptionDiv.className = 'recipe-description ';

const instructionsDiv = document.createElement('div');
instructionsDiv.className = "instructions";

const instructionsH2 = document.createElement('h2');
instructionsH2.innerHTML = 'instructions'

const instructionsP = document.createElement('p');
instructionsP.className = 'instructions-p'


const ingredientsDiv = document.createElement('div');
ingredientsDiv.className = "ingredients d-flex flex-column";

const ingredientsH2 = document.createElement('h2');
ingredientsH2.innerHTML = 'ingredients'

const ingredientsUl = document.createElement('ul');
ingredientsUl.className = 'ingredients d-flex gap-3 flex-wrap '

const moreInfoDiv = document.createElement('div');
moreInfoDiv.className = 'more-info d-flex flex-wrap gap-3 align-items-center justify-content-start mt-3';

const moreInfoH2 = document.createElement('h2');
moreInfoH2.className = ''
moreInfoH2.innerHTML = 'tags'

const areaP = document.createElement('p');
areaP.className = 'area'

const categoryP = document.createElement('p');
categoryP.className = 'category'

const sourceA = document.createElement('a');
sourceA.target= '_blank';

const youtubeA = document.createElement('a');
youtubeA.target= '_blank';



// create section tree

sectionRecipe.append(containerImageGrid);
sectionRecipe.append(containerDescriptionGrid);


// tree of first cell 

containerImageGrid.append(containerImageDiv);
containerImageDiv.append(containerImageH2)
containerImageDiv.append(image);
containerImageDiv.append(moreInfoDiv);


// second cell tree

containerDescriptionGrid.append(recipeDescriptionDiv);

recipeDescriptionDiv.append(instructionsDiv);
recipeDescriptionDiv.append(ingredientsDiv);


// instruction tree
instructionsDiv.append(instructionsH2);
instructionsDiv.append(instructionsP);

// ingredients tree
ingredientsDiv.append(ingredientsH2);
ingredientsDiv.append(ingredientsUl)

// more-info tree
moreInfoDiv.append(moreInfoH2)
moreInfoDiv.append(areaP);
moreInfoDiv.append(categoryP);
moreInfoDiv.append(sourceA);
moreInfoDiv.append(youtubeA);




export async function createRecipeSection(idMeal){

    // console.log(idMeal)

    
    const{meals:[ data] }= await getRecipeById(idMeal);
    console.log(data)

    


    containerImageH2.innerHTML = data['strMeal']
    
    image.src = data['strMealThumb'];

    instructionsP.innerHTML = data['strInstructions']

     ingredientsUl.innerHTML = ''
    for(let i = 1;data[`strIngredient${i}`] !="" && data[`strIngredient${i}`] !=" " && data[`strIngredient${i}`] !=null ;i++){
        const li = document.createElement('li');
        li.innerHTML = ` ${data[`strMeasure${i}`]} ${data[`strIngredient${i}`]}`

        ingredientsUl.append(li)

    }

    areaP.innerHTML = data['strArea'];

    categoryP.innerHTML = data['strCategory'];

    youtubeA.href = data['strYoutube'];

    youtubeA.innerHTML = 'youtube';

    sourceA.href = data['strSource'];

    sourceA.innerHTML ='source';

    return sectionRecipe

}
