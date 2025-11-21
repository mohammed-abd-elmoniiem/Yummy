
import { randomMeal } from "../constants"
export async function getRandomRecipes(){
    
        const respone = await fetch(randomMeal);
        const result = await respone.json()
       
    

    

    return result;
}