import axios from "axios";

const BASE_URL = "https://689f49313fed484cf879ac3c.mockapi.io/store";

export const signup = (userData) => {
  return axios.post(`${BASE_URL}/users`, userData);
};

export const login = (email, password) => {
  return axios.get(`${BASE_URL}/users`).then(res => {
    const users = res.data || [];
    const matchedUsers = users.filter(user => user.email === email && user.password === password);
    if (matchedUsers.length > 0) {
      return matchedUsers[0];
    } else {
      throw new Error("ایمیل یا رمز عبور اشتباه است");
    }
  });
};
