import { API_FILTER_INGREDIENT } from "../constants";

export async function getRecipesByIngredient(ingredient){
    const response = await fetch(API_FILTER_INGREDIENT+ingredient);
    return await response.json();
}