import { Box, Button, Typography } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

// Custom hook to parse URL query parameters
function UseQuery() {
  return new URLSearchParams(useLocation().search);
}
function SearchResults() {
  // Get the "query" parameter from the URL
  const query = UseQuery();
  const searchTerm = query.get("query") || "";
  // State to store all products fetched from backend
  const [products, setProducts] = useState([]);
  // State to store filtered products based on searchTer
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();
  // Fetch all products on component mount
useEffect(() => {
  fetch("https://689f49313fed484cf879ac3c.mockapi.io/store")
    .then((res) => res.json())
    .then((data) => {
      if (Array.isArray(data) && data.length > 0) {
        setProducts(data[0].products || []);
      } else {
        setProducts([]);
      }
    })
    .catch((err) => {
      console.error("خطا در دریافت داده:", err);
      setProducts([]);
    });
}, []);

  // Filter products whenever searchTerm or products list changes
  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);
  // Handler for clicking the search term button — re-navigate with the current query
  const handleClick = () => {
    navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
  };
  return (
    <Box sx={{ p: 2 }}>
      {/* Display current search term with a clickable button */}
      {searchTerm && (
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" component="span">
            جستجوی شما:
          </Typography>
          <Button variant="outlined" size="small" onClick={handleClick}>
            {searchTerm}
          </Button>
        </Box>
      )}
      {/* Display filtered products or "not found" message */}
      {filteredProducts.length > 0 ? (
        <Box component="ul" sx={{ listStyle: "none" }}>
          {filteredProducts.map((product) => (
            <Box component="li" key={product.id}>
              <Link to={`/product/${product.id}`}>{product.title}</Link>
            </Box>
          ))}
        </Box>
      ) : (
        <Typography>هیچ محصولی پیدا نشد</Typography>
      )}
    </Box>
  );
}

export default SearchResults;
