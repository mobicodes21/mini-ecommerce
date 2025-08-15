import axios from "axios";

const API_URL = "https://689f49313fed484cf879ac3c.mockapi.io/store";

export const getCategory = async (category) => {
  try {
    const res = await axios.get(API_URL);
    const data = res.data[0];

    if (data && Array.isArray(data.products)) {
      return data.products.filter(
        (product) => product.category === category
      );
    } else {
      throw new Error("داده‌ها به شکل مورد انتظار نیستند");
    }
  } catch (error) {
    console.error("خطا در دریافت محصولات:", error);
    throw error;
  }
};
