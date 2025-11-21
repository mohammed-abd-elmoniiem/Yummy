import { API_SEARCH_BY_NAME } from "../constants"

export async function getRecipesSearchByName(name){

    const respone = await fetch(API_SEARCH_BY_NAME+name);
    return await respone.json();
}