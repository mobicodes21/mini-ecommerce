import { Box, IconButton, TextField } from "@mui/material";
import React, { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

function SearchBox() {
  // State to track the current input value of the search box
  const [searchTerm, setSearchTerm] = useState("");
  // Hook for programmatic navigation
  const navigate = useNavigate();
  // Handler for form submission
  const submitHandler = (e) => {
    e.preventDefault(); // Prevent page reload on submit
    // Navigate to search results page with the encoded query string
    navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    setSearchTerm(""); // Clear the search input after submission
  };

  return (
    <Box
      component="form"
      onSubmit={submitHandler}
      sx={{
        display: { xs: "none", sm: "flex" },
        alignItems: "center",
        width: "35%",
      }}
    >
      <TextField
        size="small"
        variant="outlined"
        placeholder="جست‌وجو محصول..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ flexGrow: 1 }}
      />
      <IconButton type="submit" color="primary">
        <SearchIcon />
      </IconButton>
    </Box>
  );
}

export default SearchBox;
