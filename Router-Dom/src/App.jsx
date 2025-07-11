import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Routes, Route} from 'react-router-dom'
import viteLogo from '/vite.svg'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import NotFoundPage from './pages/NotFoundPage';
import './App.css'
import Header from './components/Header';
import CompanyAbout from './pages/CompanyAbout';
import ProductDetails from './pages/ProductDetails';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />

        <Route path='/about' element={<About/>} >
          <Route path='company' element={<CompanyAbout/>} />
        </Route>

        <Route path='/products' element={<Products/>} />
        <Route path='/product-details/:id' element={<ProductDetails/>}/>

        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    
    </>
  )
}

export default App
