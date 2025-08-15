import axios from "axios";

const API_URL = '/db.json';

export const getCategory = (category) => {
  return axios.get(API_URL).then(res => {
    return res.data.products.filter(product => product.category === category);
  });
};
