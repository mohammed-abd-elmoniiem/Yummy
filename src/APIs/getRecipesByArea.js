import { API_FILTER_AREA } from "../constants";


export async function getRecipesByArea(area){
    const response = await fetch(API_FILTER_AREA+ area);
    return await response.json()
}