import axios from "axios";

const API_URL = 'http://localhost:3001';


export const getCategory = (category)=>{
    return axios.get(`${API_URL}/products?category=${category}`)
}