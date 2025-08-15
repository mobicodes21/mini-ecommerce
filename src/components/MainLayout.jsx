import Banner from "../components/Banner";
import { Box } from "@mui/material";
import Footer from "./Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom"; // Outlet for nested routes rendering

// Banner component at the top of the page
// Navigation bar component
// Footer component

const MainLayout = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* Display the banner at the top */}
      <Banner />
      {/* Render the navigation bar */}
      <Navbar />
      <Box component="main" flexGrow={1}>
        {/* Render the matched child route component */}
        <Outlet />
      </Box>

      {/* Display the footer at the bottom */}
      <Footer />
    </Box>
  );
};
export default MainLayout;
