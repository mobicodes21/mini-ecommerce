import axios from "axios";

const API_URL = 'http://localhost:3001';
export const getAllCategories = ()=>{
    return axios.get('http://localhost:3001/categories')
}