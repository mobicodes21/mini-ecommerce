import axios from "axios"

const API_URL = 'http://localhost:3001';

export const getSpecialOffers = ()=>{
    return axios.get(`${API_URL}/products?discount_gte=1`);
}