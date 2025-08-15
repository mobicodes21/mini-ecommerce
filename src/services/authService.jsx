import axios from "axios";

const API_URL = "/db.json";

export const getUsers = () => {
  return axios.get(API_URL).then(res => res.data.users);
};

export const login = (email, password) => {
  return getUsers().then(users => {
    return users.filter(
      user => user.email === email && user.password === password
    );
  });
};
