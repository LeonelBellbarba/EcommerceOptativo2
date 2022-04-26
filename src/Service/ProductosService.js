import axios from "../Config/axios"

export async function getAllProducts(buscar){
    // return fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + buscar).then(res=>res.json())
    return axios.get("/sites/MLA/search?q=" + buscar)
}

export async function getById(id){
    
    return axios.get("/items/" + id)
}