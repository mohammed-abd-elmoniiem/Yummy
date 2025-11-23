import { getRecipesSearchByName } from "../APIs/getRecipeSearchByName";
import { createRecipeCard } from "./createRecipeCard";

const sectionElement = document.createElement('section');
sectionElement.className = 'search container-lg py-5 d '
sectionElement.innerHTML = `
      <h2 class="" > search for your recipe </h2>

      <div class="inputs row row-cols-md-2 g-4">
        <div class="">
          <input
            class="form-control"
            id="byName"
            type="search"
            placeholder="search by name"
            aria-label="search by name"
          />
        </div>

        <div class="">
          <input
            class="form-control"
            id="byLetter"
            type="search"
            maxlength=1
            placeholder="search by first letter"
            aria-label="search by first letter"
          />
        </div>
      </div>
    
`

const returnDataDiv = document.createElement('div');
returnDataDiv.className = 'recipes-cards row py-5 px-2'
sectionElement.append(returnDataDiv);

// handlers of the inputs

 // handlers of the inputs
  let timerId = null
  const inputByName = sectionElement.querySelector('#byName');
  
  
  inputByName.addEventListener('input',async function(eve){

    if(this.value.length != 0){

         timerId =  setTimeout(async()=>{
      clearTimeout(timerId);

      const recipes = await getRecipesSearchByName(this.value);
      returnDataDiv.innerHTML = " "
      recipes['meals'].forEach(element => {
        console.log(element)
        returnDataDiv.append(createRecipeCard(element))
        
      });



     },800)


    }

 

  })


  const inputByLetter = sectionElement.querySelector('#byLetter');
  
  
  inputByLetter.addEventListener('input',async function(eve){

    if(this.value.length != 0){
      if(this.value.length > 1) this.value = this.value[0]

        const recipes = await getRecipesSearchByName(this.value);
      returnDataDiv.innerHTML = " "
      recipes['meals'].forEach(element => {
        console.log(element)
        returnDataDiv.append(createRecipeCard(element))
        
      });

    }


  })




export function createSearchSection(){



    return sectionElement;



}