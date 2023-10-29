import React, { useState, useEffect } from 'react';
import CartBook from '../components/Cart-Book';
require('../styles/Cart.css');

function Cart(){
    const [books, setBooks] = useState([]);

    useEffect(() => {
        if(!localStorage.getItem('auth')){
            throw new Error('Please Log In');
        }
        fetch(`http://localhost:4200/ReactDef/cart/${localStorage.getItem('userId')}`)
            .then((res) => res.json())
            .then((data) => {
                setBooks(data);
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, []);
    return(
        <div class="cart-cover">
            <h3>Your Cart</h3>
            { books.length < 1 
                ? <h1>No Books In Your Cart Yet</h1>
                : books.map(book => <CartBook key={book._id} {...book}/>)
            }
        </div>
    )
};

export default Cart;