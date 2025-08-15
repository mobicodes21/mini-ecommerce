import axios from "axios";

export const getAllCategories = async () => {
  try {
    const response = await axios.get('/db.json');  
    return response.data.categories; 
  } catch (error) {
    console.error("Error fetching categories:", error);
    return []; 
  }
};
