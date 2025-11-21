import { API_SEARCH_BY_ID } from "../constants";

export async function getRecipeById(id){
    console.log(id)
    const respone = await fetch(API_SEARCH_BY_ID+id);
    return await respone.json()
}