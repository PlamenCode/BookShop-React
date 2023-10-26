import React, {  } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css'

function Navbar({
    isLoggedIn,
    changeState
}) {

    const navigate = useNavigate();

    function onLogoutClick(){
        changeState(false);
        localStorage.removeItem('auth');
        localStorage.removeItem('userId');
        navigate('/');
    };

  return (
    <div className='navbar'>
        <div className="navbar-left">
        <Link to={'/'}>BookShop</Link>
        </div>
        <div className="navbar-right">
            <Link to={'/catalog'}>Catalog</Link>

            {isLoggedIn && (
                <>
                <Link to={'/create'}>Create Offer</Link>
                <Link to={'/cart'}>Cart</Link>
                <a onClick={onLogoutClick}>Logout</a>
                </>
            )}

            {!isLoggedIn && (
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
