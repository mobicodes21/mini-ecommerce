import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './App'
import './assets/fonts/fonts.css';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import AboutUs from './pages/AboutUs'
import Banner from "./pages/Banner"
import Cart from "./components/Cart"
import CategoriesSwiper from './pages/CategoriesSwiper'
import ContactUs from './pages/ContactUs'
import Footer from './components/Footer'
import Home from "./pages/Home"
import LoginPage from "./pages/LoginPage"
import Navbar from "./pages/Navbar"
import ProductDetails from "./components/ProductDetails"
import ProductList from './components/ProductList'
import SearchResults from './components/SearchResults'
import SignUpPage from './pages/SignUp'
import MainLayout from './components/MainLayout';

function App() {
  return (
<Router>

     <Routes>
      <Route path='/' element={<MainLayout/>}>
            <Route index element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/categoriesSwiper" element={<CategoriesSwiper/>}/>
      <Route path="/product/:id" element={<ProductDetails/>}/>
      <Route path="/categoriesSwiper/:category" element={<ProductList />} />
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/search' element={<SearchResults/>}/>
      </Route>

      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
      </Routes> 
    </Router>

  )
}

export default App
