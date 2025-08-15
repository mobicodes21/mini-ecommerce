import axios from "axios";

const API_URL = "https://689f49313fed484cf879ac3c.mockapi.io/store";

export const getSpecialOffers = () => {
  return axios.get(API_URL).then(res => {
    const products = res.data[0].products;
    return products.filter(product => product.discount >= 1);
  });
};
