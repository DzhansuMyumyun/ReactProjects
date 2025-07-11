import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div className='header-nav-container'>
        <ul>
            <li><Link className='link' to="/">Home</Link></li>
            <li><Link className='link' to="/about">About</Link></li>
            <li><Link className='link' to="/products">Products</Link></li>
            <li><Link className='link' to="/contact">Contact</Link></li>
        </ul>
        
    </div>
  )
}

export default Header