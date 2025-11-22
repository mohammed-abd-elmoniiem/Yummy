
import { getAllCategories } from "../APIs/getAllCategories.js";

import { createCategory} from "./category.js";
import { hideAll } from "./hideAll.js";
import { loadingDiv } from "./loading.js";


const sectionElement = document.createElement('section');
sectionElement.className = 'categories container-lg py-5 d ';


export async function categories(){
    
    sectionElement.innerHTML = `<h2 class="text-capitalize"> all Categories </h2> `
    sectionElement.append(loadingDiv)

  



    const categoriesContainerDiv = document.createElement('div');
    categoriesContainerDiv.className = 'row row-cols-mg-2 py-5 g-2'
      
    document.body.append(sectionElement)
    const allCategories= await getAllCategories()

    sectionElement.innerHTML = `<h2 class="text-capitalize"> all Categories </h2> `

    
 

    allCategories['categories'].forEach(category => {
       
        categoriesContainerDiv.append(createCategoryDiv(category))
        
    });
    sectionElement.append(categoriesContainerDiv)


}


function createCategoryDiv(category){

     const containerDiv = document.createElement('div');
    containerDiv.className = "recipe col-12 col-sm-6 col-md-4 col-lg-3 g-3";

    
   


    const categoryDiv = document.createElement('div');
    categoryDiv.className = ' position-relative rounded-4 overflow-hidden p-2';


    const imgDiv = document.createElement('div');
    imgDiv.className = 'image rounded-2';

    const img = document.createElement('img');
    img.src = category['strCategoryThumb'];
    img.className = 'w-100';
    img.alt = category['strCategory'];

    const layerDiv = document.createElement('div');
    layerDiv.className ="layer position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center m-2 rounded-2";
   



    const pCategoryName = document.createElement('p');
    pCategoryName.innerHTML = category['strCategory']
    pCategoryName.className =" text-center";





    layerDiv.append(pCategoryName);
    imgDiv.append(img);

    categoryDiv.append(imgDiv);
    categoryDiv.append(layerDiv);

    containerDiv.append(categoryDiv);
    


    // handler of click on category
    containerDiv.addEventListener('click',async function(eve){
        // console.log(eve.target)
        hideAll()

        document.body.append(await createCategory( await category['strCategory'])) 

    })

    return containerDiv
}