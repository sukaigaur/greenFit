import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import CartIcon from '../CartIcon'
import './styles.css'




const Header = () => {



  return (
    <header id='header_container'>
        <nav className='section-p2'>
            <img src='/images/logo 1.png' alt=''/>
            {/* <ul className='ul_container-1'>
              <Link to='/cart'><li><a href='/'>Home</a></li></Link>
              <li><a href='/Home'>Menu</a></li>
              <li><a href='/'>Contact Us</a></li>
            </ul> */}
            <ul className='ul_container-2'>
              <Link to="/login" ><li><a href='/'>Log in</a></li></Link>
              <li><button className='normal'>Sign Up</button></li>
              {/* <span class="material-symbols-outlined cart_btn">shopping_cart</span> */}
              <Link to='/cart'><CartIcon/></Link>
              
            </ul>

            
        </nav>
    </header>
  )
}

export default Header
