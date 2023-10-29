import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
require('../styles/Details.css');

function Details(){
    const [book, setBook] = useState({});
    const [isOwner, setIsOwner] = useState(false)
    const [isUser, setIsUser] = useState(false);
    const [error, setError] = useState(false);
    
    const params = useParams();
    const bookId = params.id;

    useEffect(() => {
        if(localStorage.getItem('auth')){
            setIsUser(true);
        }
        fetch(`http://localhost:4200/ReactDef/data/${bookId}`)
            .then((res) => res.json())
            .then((data) => {
                setBook(data);
                if(data.ownerId.toString() === localStorage.getItem('userId').toString()){
                    setIsOwner(true);
                }
            })
            .catch((err) => {
                setError(err.message)
            })
    }, []);

    return(
        <section className="details-content">
            { error ? <h1>{error.message}</h1> : <></>}

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
                { isOwner ? <div>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                    : <></>
                }               
                { !isOwner && isUser ? <div>
                        <button>Remove From Cart</button>
                        <button>Add To Cart</button>
                    </div>
                    : <></>
                }
            </div>
        </section>
    )
}

export default Details;