import React, {  } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

function Navbar({
    isLoggedIn 
}) {
    console.log(isLoggedIn);
  return (
    <div className='navbar'>
        <div className="navbar-left">
            <p>BookShop</p>
        </div>
        <div className="navbar-right">
            <Link to={'/'}>Home</Link>
            <Link to={'/catalog'}>Catalog</Link>

            {isLoggedIn.isLoggedIn && (
                <>
                <Link to={'/create'}>Create Offer</Link>
                <Link to={'/cart'}>Cart</Link>
                <Link to={'/logout'}>logout</Link>
                </>
            )}

            {!isLoggedIn.isLoggedIn && (
                <>
                <Link to={'/login'}>Login</Link>
                <Link to={'/register'}>Register</Link>
                </>
            )}
        </div>
    </div>
  )
}

export default Navbar
