import axios from "axios";

export const getAllCategories = async () => {
  try {
    const response = await axios.get('https://689f49313fed484cf879ac3c.mockapi.io/store');
    return response.data[0].categories; 
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};
