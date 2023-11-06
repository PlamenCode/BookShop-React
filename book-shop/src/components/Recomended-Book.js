import React from 'react';
import { Link } from 'react-router-dom';
require('../styles/Recomended-Book.css');

function RecomendedBook(
    book
){
    return (
        <div className="card">
            <div className="image">
                <img src={book.img} alt='no'/>
            </div>
            <div className="details">
                <div className="center">
                    <p>{book.description}</p>
                    <Link to={`/books/${book._id}`} className="button">
                        Details
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RecomendedBook;