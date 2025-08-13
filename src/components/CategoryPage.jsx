import React, { useState } from "react";

import CategoriesSwiper from "./CategoriesSwiper"; // Import the category carousel component
import ProductList from "./ProductList"; // Import the product list component

export default function CategoryPage() {
  // State to track the selected category
  const [category, setCategory] = useState("clothing");

  // Handle category selection from the Swiper
  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory); // Update selected category
  };

  return (
    <div>
      {/* Pass category selection handler to the swiper */}
      <CategoriesSwiper onCategorySelect={handleCategorySelect} />
      {/* Pass selected category to the product list */}
      <ProductList category={category} />
    </div>
  );
}
