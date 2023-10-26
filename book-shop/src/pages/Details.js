import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
require('../styles/Details.css');

function Details(){
    const params = useParams()
    const bookId = params.id;
    const [book, setBook] = useState({});
    let hasError = false

    useEffect(() => {
        fetch(`http://localhost:4200/ReactDef/data/${bookId}`)
            .then((res) => res.json())
            .then((data) => {
                setBook(data);
            })
            .catch((err) => {
                hasError = err;
            })
    }, []);

    return(
        <section className="details-content">
            { hasError ? <h1>{hasError.message}</h1> : <></>}

            <div className="details-container">
                <img src={book.img} alt="no img" />
            </div>

            <div className="details-container">
                <h1>{book.name}</h1>
                <p>Author: {book.author}</p>
                <p className='bold'>Price: {book.price}$</p>
                <p><span className='bold'>Description:</span> {book.description}</p>
            </div>
        

            <div className="details-buttons">
                <button>Edit</button>
                <button>Delete</button>

                <button>Remove From Cart</button>
                <button>Add To Cart</button>
            </div>
        </section>
    )
}

export default Details;