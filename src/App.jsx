import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import Cart from "./components/Cart"
import Home from "./pages/Home"

function App() {
  return (
    <Router>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/cart" element={<\Cart/>}/>
      </Routes> 
    </Router>
  )
}

export default App
