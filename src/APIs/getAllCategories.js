import { API_CATEGORIES } from "../constants";


export async function getAllCategories(){
    const response = await fetch(API_CATEGORIES);
    return await response.json()
}