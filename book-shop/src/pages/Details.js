import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
require('../styles/Details.css');

function Details(){
    const [book, setBook] = useState({});
    const params = useParams()

    console.log(params);
    useEffect(()=> {
        console.log(params);
    })
    return(
        <section className="content">

            {/* <h1>{{errorMsg}}</h1> 

            <div className="container">
                <img src="{{bookDetails.img}}" alt="no img" />
            </div>

            <div className="container">

                <h1>DETAILS about "{bookDetails.name}"</h1>
                <p>Author: {bookDetails.author}</p>
                <p>Price: {bookDetails.price}$</p>
                <p>Description: {bookDetails.description}</p>
            </div>
         */}
            <div className="buttons">
                <button>Edit</button>
                <button>Delete</button>
            </div>

            <div className="buttons">
                <button>Remove From Cart</button>
                <button>Add To Cart</button>
            </div>
        </section>
    )
}

export default Details;