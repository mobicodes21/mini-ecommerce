import { Outlet } from "react-router-dom"; // Outlet for nested routes rendering
import Banner from "../pages/Banner";// Banner component at the top of the page
import Navbar from "../pages/Navbar";// Navigation bar component
import Footer from "./Footer";// Footer component

const MainLayout = () => {
  return (
    <>
    {/* Display the banner at the top */}
      <Banner />
      {/* Render the navigation bar */}
      <Navbar />
      {/* Render the matched child route component */}
      <Outlet />
      {/* Display the footer at the bottom */}
      <Footer />
    </>
  );
};
export default MainLayout;
