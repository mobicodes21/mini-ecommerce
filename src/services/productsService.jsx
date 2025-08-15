import axios from "axios";

const API_URL = '/db.json';

export const getSpecialOffers = () => {
  return axios.get(API_URL).then(res => {
    return res.data.products.filter(product => product.discount >= 1);
  });
};
