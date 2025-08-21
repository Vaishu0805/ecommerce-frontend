import { useState } from 'react'
import './App.css'
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutUs from './AboutUs';
import Computers from './Computers';
import Mobiles from './Mobiles';
import Laptops from './Laptops';
import Pendrives from './Pendrives';
import Home from './Home'
import ProductPage from './ProductPage'
import Cart from './Cart';
import Payment from './Payment';
import Orders from './Orders';



function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <BrowserRouter basename="/ecommerce">
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<AboutUs />} />
          <Route path="home" element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="computers" element={<Computers />} />
          <Route path="mobiles" element={<Mobiles />} />
          <Route path="laptops" element={<Laptops />} />
          <Route path="pendrives" element={<Pendrives />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="productpage" element={<ProductPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="payment" element={<Payment />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App