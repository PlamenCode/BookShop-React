import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
require('../styles/Edit-Create-Form.css');


function Create(){
    const [ inputs, setInputs ] = useState({});
    const navigate = useNavigate();

    const onCreateSubmit = (event) => {
        event.preventDefault();
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ book: inputs, user: localStorage.getItem('userId') })
        }
        fetch('http://localhost:4200/ReactDef/data', options)
            .then(res => res.json())
            .then(data => {
                setInputs({});
                navigate(`/books/${data._id}`);
            })
            .catch(err => {
                console.log(err);
            })
    };

    const changeHandler = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

        return(
            <section className="content">
                <h1>Create your Book Offer</h1>
    
                <form onSubmit={onCreateSubmit}>
                    <div className="input">
                        <label htmlFor="name">Book Name</label>
                        <input type="text" name="name" placeholder="Book name" onChange={changeHandler} />
                    </div>
    
            
                    <div className="input">
                        <label htmlFor="author">Author</label>
                        <input type="text" name="author" placeholder="Author" onChange={changeHandler} />
                    </div>
    
                    <div className="input">
                        <label htmlFor="img">Image Url</label>
                        <input type="text" name="img" placeholder="https://..." onChange={changeHandler} />
                    </div>
    
                    <div className="input">
                        <label htmlFor="price">Price</label>
                        <input type="number" name="price" placeholder="Price" onChange={changeHandler} />
                    </div>
    
                    <div className="input">
                        <label htmlFor="description">Description</label>
                        <textarea type="text" name="description" placeholder="Description" onChange={changeHandler} ></textarea>
                    </div>
            
            
                    <button type="submit">Post Your Offer</button>
                </form>
            </section>
    )
}

export default Create;