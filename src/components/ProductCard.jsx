import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";
// Component to display a single product card with clickable link
export default function ProductCard({ product }) {
  return (
    // Link wraps the entire card to navigate to the product detail page
    <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
      <Card sx={{ width: 200, boxShadow: 3, cursor: "pointer" }}>
        <CardContent>
          {/* Product name/title */}
          <Typography variant="h6" gutterBottom>
            {product.name}
          </Typography>
          {/* Short description of the product */}
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          {/* Product price */}
          <Typography variant="body1">${product.price}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
