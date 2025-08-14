import * as React from "react";

import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import SearchBox from "./SearchBox";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const location = useLocation();

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const isActive = (path) => location.pathname === path;

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
            variant="h5"
            component={Link}
            to="/"
            sx={{
              color: "secondary.main",
              fontWeight: "bolder",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "none",
              },
            }}
          >
            پوشا مد
          </Typography>

          {/* Search box */}
          <SearchBox />

          {/* Desktop navigation */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: 2,
              alignItems: "center",
            }}
          >
            <Link to="/" style={{ ...linkStyle, ...(isActive("/") && activeLinkStyle) }}>
              خانه
            </Link>
            <Link to="/contact" style={{ ...linkStyle, ...(isActive("/contact") && activeLinkStyle) }}>
              تماس با ما
            </Link>
            <Link to="/about" style={{ ...linkStyle, ...(isActive("/about") && activeLinkStyle) }}>
              درباره ما
            </Link>
            <Link to="/cart">
              <IconButton
                sx={{
                  color: isActive("/cart") ? "secondary.main" : "primary.main",
                  "&:hover": { color: "secondary.main" },
                }}
              >
                <ShoppingCartIcon />
              </IconButton>
            </Link>
            <Link to="/login">
              <Button
                variant="contained"
                sx={{
                  ...loginButtonStyle,
                  ...(isActive("/login") && {
                    backgroundColor: "secondary.main",
                  }),
                }}
              >
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
            <ListItem button component={Link} to="/" sx={isActive("/") ? activeDrawerLink : linkStyle}>
              <ListItemText primary="خانه" />
            </ListItem>
            <ListItem button component={Link} to="/contact" sx={isActive("/contact") ? activeDrawerLink : linkStyle}>
              <ListItemText primary="تماس با ما" />
            </ListItem>
            <ListItem button component={Link} to="/about" sx={isActive("/about") ? activeDrawerLink : linkStyle}>
              <ListItemText primary="درباره ما" />
            </ListItem>
            <ListItem button component={Link} to="/cart" sx={isActive("/cart") ? activeDrawerLink : linkStyle}>
              <ListItemText primary="سبد خرید" />
            </ListItem>
            <ListItem button component={Link} to="/login" sx={isActive("/login") ? activeDrawerLink : linkStyle}>
              <ListItemText primary="ورود | ثبت نام" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

// Default link style
const linkStyle = {
  textDecoration: "none",
  color: "#2e2e2e",
  fontWeight: 500,
  fontSize: "14px",
};

// Style for active link
const activeLinkStyle = {
  color: "#D4B483", // secondary.main (you can adjust this color)
  fontWeight: "bold",
  textDecoration: 'underline'
};

// Style for active item in drawer
const activeDrawerLink = {
  ...linkStyle,
  color: "#D4B483", // active color for drawer links
};

// Login button
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
