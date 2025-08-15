import axios from "axios"

const API_URL = "/db.json";

export const signup = (userData) => {
  return Promise.reject(new Error("عملیات ثبت نام با فایل json استاتیک امکان‌پذیر نیست"));
};

export const login = (email, password) => {
  return axios.get(API_URL).then(res => {
    const users = res.data.users || [];
    return users.filter(user => user.email === email && user.password === password);
  });
};
