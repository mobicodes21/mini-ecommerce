import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import Banner from "./pages/Banner"
import Cart from "./components/Cart"
import Footer from './components/Footer'
import Home from "./pages/Home"
import LoginPage from "./pages/LoginPage"
import Navbar from "./pages/Navbar"
import ProductDetails from "./components/ProductDetails"
import SignUpPage from './pages/SignUp'

function App() {
  return (


<Router>
      <Banner/>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>

      <Route path="/product/:id" element={<ProductDetails/>}/>
      </Routes> 
      <Footer/>
    </Router>

  )
}

export default App
