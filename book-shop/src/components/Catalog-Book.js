import React from 'react';
import { Link } from 'react-router-dom';
require('../styles/Catalog-Book.css')

function CatalogBook( book ){
    return(
        <li>
            <div className="catalog-book-wrapper">
                <img src={book.img} alt='no book'/>
                <h3>{book.name}</h3>
                <p>by {book.author}</p>
                <p>${book.price}</p>
            </div>
            <div className="button-wrapper">
                <button className="btn fill">Add To Cart</button>
                <button className="btn fill">Remove from Cart</button>
                <Link to={`/books/${book._id}`} className="btn outline">Details</Link>
            </div>
        </li>
    )
}

export default CatalogBook;