import { API_AREAS } from "../constants";

export async function getAllAreas(){
    const response = await fetch(API_AREAS);
    return await response.json()
}