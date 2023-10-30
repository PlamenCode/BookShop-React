import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
require('../styles/Edit-Create-Form.css');

function Edit(){
    const { state } = useLocation();
    const [ inputs, setInputs ] = useState(state);
    const navigate = useNavigate();

    const changeHandler = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    };

    function onEditSubmit(event){
        event.preventDefault();
        const options = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ book: inputs, user: localStorage.getItem('userId') })
        };
        fetch(`http://localhost:4200/ReactDef/data/${state._id}`, options)
        .then(res => res.json())
        .then(data => {
            setInputs({});
            navigate(`/books/${data._id}`);
        })
        .catch(err => {
            console.log(err);
        })
    };
    return(
        <section className="content">
            <h1>Edit your Book Offer</h1>

            <form onSubmit={onEditSubmit}>
                <div className="input">
                    <label htmlFor="name">Book Name</label>
                    <input type="text" name="name" placeholder="Book name"
                     defaultValue={state.name} 
                     onChange={changeHandler}/>
                </div>

        
                <div className="input">
                    <label htmlFor="author">Author</label>
                    <input type="text" name="author" placeholder="Author" 
                    defaultValue={state.author}
                    onChange={changeHandler}/>
                </div>

                <div className="input">
                    <label htmlFor="img">Image Url</label>
                    <input type="text" name="img" placeholder="https://..." 
                    defaultValue={state.img}
                    onChange={changeHandler}/>
                </div>

                <div className="input">
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" placeholder="Price" 
                    defaultValue={state.price}
                    onChange={changeHandler}/>
                </div>

                <div className="input">
                    <label htmlFor="description">Description</label>
                    <textarea type="text" name="description" placeholder="Description"
                    defaultValue={state.description}
                    onChange={changeHandler}></textarea>
                </div>
        
        
                <button type="submit">Edit Your Offer</button>
            </form>
        </section>
    )
}

export default Edit;