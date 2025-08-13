import axios from "axios"

const API_URL = "http://localhost:3001";
export const signup = (userData)=>{
    return axios.post(`${API_URL}/users`, userData)
};

export const login = (email, password)=>{
    return axios.get(`${API_URL}/users?email=${email}&password=${password}`)
}