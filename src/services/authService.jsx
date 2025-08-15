import axios from "axios";

const BASE_URL = "https://689f49313fed484cf879ac3c.mockapi.io";

export const signup = (userData) => {
  const { username, email, password } = userData; 
  return axios.post("https://689f49313fed484cf879ac3c.mockapi.io/users", {
    username,
    email,
    password,
  });
};


export const login = (email, password) => {
  return axios.get(`${BASE_URL}/users`).then(res => {
    const users = res.data || [];
    const matchedUser = users.find(user => user.email === email && user.password === password);
    if (matchedUser) {
      return matchedUser;
    } else {
      throw new Error("ایمیل یا رمز عبور اشتباه است");
    }
  });
};
