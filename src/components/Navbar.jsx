import * as React from "react";

import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchBox from "./SearchBox";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  // Toggle drawer open/close
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "background.default",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          padding: "1.5rem 1rem",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo / Title */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              color: "secondary.main",
              fontWeight: "bold",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "none",
              },
            }}
          >
            مای‌شاپ
          </Typography>

          {/* Search box – visible on medium screens and up */}
          <SearchBox />

          {/* Desktop navigation links – hidden on xs */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: 2,
              alignItems: "center",
            }}
          >
            <Link to="/" style={linkStyle}>
              خانه
            </Link>
            <Link to="/contact" style={linkStyle}>
              تماس با ما
            </Link>
            <Link to="/about" style={linkStyle}>
              درباره ما
            </Link>
            <Link to="/cart">
              <IconButton
                sx={{
                  color: "primary.main",
                  "&:hover": { color: "secondary.main" },
                }}
              >
                <ShoppingCartIcon />
              </IconButton>
            </Link>
            <Link to="/login">
              <Button variant="contained" sx={loginButtonStyle}>
                ورود | ثبت نام
              </Button>
            </Link>
          </Box>

          {/* Hamburger menu for mobile */}
          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <IconButton
              onClick={toggleDrawer(true)}
              sx={{ color: "secondary.main" }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer menu for mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem button component={Link} to="/" sx={linkStyle}>
              <ListItemText primary="خانه" />
            </ListItem>
            <ListItem button component={Link} to="/contact" sx={linkStyle}>
              <ListItemText primary="تماس با ما" />
            </ListItem>
            <ListItem button component={Link} to="/about" sx={linkStyle}>
              <ListItemText primary="درباره ما" />
            </ListItem>
            <ListItem button component={Link} to="/cart" sx={linkStyle}>
              <ListItemText primary="سبد خرید" />
            </ListItem>
            <ListItem button component={Link} to="/login" sx={linkStyle}>
              <ListItemText primary="ورود | ثبت نام" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

// Styles defined separately for clarity and reuse
const linkStyle = {
  textDecoration: "none",
  color: "#2e2e2e",
  fontWeight: 500,
  fontSize: "14px",
};

const loginButtonStyle = {
  fontWeight: 500,
  fontSize: "14px",
  backgroundColor: "primary.main",
  color: "white",
  "&:hover": {
    backgroundColor: "secondary.main",
  },
  borderRadius: "6px",
  textTransform: "none",
};
