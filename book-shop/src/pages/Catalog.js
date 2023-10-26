import React, { useEffect, useState } from 'react';
import CatalogBook from '../components/Catalog-Book';
require('../styles/Catalog.css');

function Catalog(){
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4200/ReactDef/data')
            .then((res) => res.json())
            .then((data) => {
                setBooks(data);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, []);

    return(
        <div className="catalog">
            <h2>Book Library</h2>

           <div className="catalog-books">
                { books.length < 1 
                    ? <h2>No Published Books Yet</h2>  
                    : books.map (book => <CatalogBook key={book._id} {...book} />)  
                }
            </div>
        </div>
    )
}

export default Catalog;