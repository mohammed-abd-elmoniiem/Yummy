import { API_INGREDIENTS } from "../constants";

export async function getAllIngredients(){
    const response = await fetch(API_INGREDIENTS);
    return await response.json()
}