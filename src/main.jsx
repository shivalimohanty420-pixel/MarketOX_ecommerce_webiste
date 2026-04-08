import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import { Routes } from 'react-router-dom'
import Product from './pages/Product.jsx'
import Footer from './components/Footer.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import SearchResult from './components/SearchResult.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Signin from './pages/Signin.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './components/Dashboard.jsx'
import Carts from './components/Carts.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Product />} />
        <Route path='/productdetail/:id' element={<ProductDetail />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Signin/>} />
        <Route path='/carts' element={<Carts/>}/>
        <Route path='/register' element={<Register/>} />
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>

  </StrictMode>,
)
