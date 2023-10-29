import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
require('../styles/Catalog-Book.css')

function CatalogBook( book ){
    const [isInCart, setIsInCart] = useState(false);
    const [isUser, setIsUser] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('userId')){
            setIsUser(true);
            fetch(`http://localhost:4200/ReactDef/cart/check/${localStorage.getItem('userId')}/${book._id}`)
            .then((res) => res.json())
            .then((data) => {
                setIsInCart(data);
            })
            .catch((err) => {
                console.log(err.message);
            })
        };
    }, []);
    
    function toggleCart(){
        fetch(`http://localhost:4200/ReactDef/cart/toggle/${localStorage.getItem('userId')}/${book._id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setIsInCart(data);
            })
            .catch((err) => {
                console.log(err.message);
            })
    };

    
    return(
        <li>
            <div className="catalog-book-wrapper">
                <img src={book.img} alt='no book'/>
                <h3>{book.name}</h3>
                <p>by {book.author}</p>
                <p>${book.price}</p>
            </div>
            <div className="button-wrapper">
                { isUser 
                    ?  <button className="btn fill" onClick={toggleCart}> { isInCart ? 'Remove From Cart' : 'Add To Cart' }</button>
                    : <></>
                }
                <Link to={`/books/${book._id}`} className="btn outline">Details</Link>
            </div>
        </li>
    )
}

export default CatalogBook;