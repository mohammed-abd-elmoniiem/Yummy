import { API_FILTER_CATEGORY } from "../constants";


export async function getRecipesByCategory(category){
    const response = await fetch(API_FILTER_CATEGORY+category);
    return await response.json()
}