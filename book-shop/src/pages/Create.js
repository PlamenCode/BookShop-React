import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorAlert from '../components/Error-Alert';
require('../styles/Edit-Create-Form.css');


function Create(){
    const navigate = useNavigate();
    const [ inputs, setInputs ] = useState({});

    const [hasError, setHasError] = useState(false);
    const[errors, setErrors] = useState({
        name: '',
        author: '',
        img: '',
        price: '',
        description: ''
    })


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
        const value = event.target.value.trim();

        if(name === 'name' && value === ''){
            setHasError(true)
            setErrors({...errors, [name]: 'Name is reqired'})
        } else if(name === 'author' && value === ''){
            setErrors(true)
            setErrors({...errors, [name]: 'Author is reqired'})
        } else if(name === 'img' && value === ''){
            setHasError(true)
            setErrors({...errors, [name]: 'IMG is reqired'})
        } else if(name === 'price' && value < 1 ){
            setHasError(true)
            setErrors({...errors, [name]: 'Price must be above 0'})
        } else if(name === 'description'){
            if(value.length < 10){
                setHasError(true)
                setErrors({...errors, [name]: 'Description must be at least 10 charecters long'})
            } else{
                setErrors({...errors, [name]: ''});
            }
        } else{
            setErrors({...errors, [name]: ''});
        }
        setInputs(values => ({...values, [name]: value}));
    }


        return(
            <section className="content">
                <h1>Create your Book Offer</h1>
                {hasError ? <ErrorAlert errors={errors}/> : ''}
    
                <form onSubmit={onCreateSubmit}>
                    <div className="input">
                        <label htmlFor="name">Book Name</label>
                        <input type="text" name="name" placeholder="Book name" 
                        onChange={changeHandler} className={errors.name ? 'error' : ''}/>
                    </div>
    
            
                    <div className="input">
                        <label htmlFor="author">Author</label>
                        <input type="text" name="author" placeholder="Author" 
                        onChange={changeHandler} className={errors.author ? 'error' : ''}/>
                    </div>
    
                    <div className="input">
                        <label htmlFor="img">Image Url</label>
                        <input type="text" name="img" placeholder="https://..." 
                        onChange={changeHandler} className={errors.img ? 'error' : ''}/>
                    </div>
    
                    <div className="input">
                        <label htmlFor="price">Price</label>
                        <input type="number" name="price" placeholder="Price" 
                        onChange={changeHandler} className={errors.price ? 'error' : ''}/>
                    </div>
    
                    <div className="input">
                        <label htmlFor="description">Description</label>
                        <textarea type="text" name="description" placeholder="Description" 
                        onChange={changeHandler} className={errors.description ? 'error' : ''} ></textarea>
                    </div>
            
            
                    <button type="submit" disabled={ hasError }>Post Your Offer</button>
                </form>
            </section>
    )
}

export default Create;