import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
require('../styles/Details.css');

function Details(){
    const [book, setBook] = useState({});
    const [isOwner, setIsOwner] = useState(false)
    const [isUser, setIsUser] = useState(false);
    const [isInCart, setIsInCart] = useState(false);
    
    const params = useParams();
    const bookId = params.id;
    const navigate = useNavigate();
    
    useEffect(() => {
        if(localStorage.getItem('auth')){
            setIsUser(true);
            setIsInCart(false);
        }
        fetch(`http://localhost:4200/ReactDef/data/${bookId}`)
            .then((res) => res.json())
            .then((data) => {
                setBook(data);
                if(localStorage.getItem('userId') && data.ownerId.toString() === localStorage.getItem('userId').toString()){
                    setIsOwner(true);
                }
            })
        if( localStorage.getItem('auth') ){
            fetch(`http://localhost:4200/ReactDef/cart/check/${localStorage.getItem('userId')}/${bookId}`)
                .then((res) => res.json())
                .then((data) => {
                    setIsInCart(data);
                })
                .catch((err) => {
                    console.log(err.message);
                })
        }
    }, [bookId]);

    function editClick(){
        navigate(`/edit/${bookId}`, { state: book });
    };

    function onDeleteClick(){
        if(isOwner){
            const options = {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ user: localStorage.getItem('userId') })
            }
            fetch(`http://localhost:4200/ReactDef/data/${bookId}`, options)
            .then(res => res.json())
            .then(data => {
                navigate(`/catalog`);
            })
            .catch(err => {
                console.log(err);
            })
        }
    };

    function toggleCart(){
        fetch(`http://localhost:4200/ReactDef/cart/toggle/${localStorage.getItem('userId')}/${book._id}`)
            .then((res) => res.json())
            .then((data) => {
                setIsInCart(data);
            })
            .catch((err) => {
                console.log(err.message);
            })
    };
    
    return(
        <section className="details-content">

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
                        <button onClick={editClick}>Edit</button>
                        <button onClick={onDeleteClick}>Delete</button>
                    </div>
                    : <></>
                }               
                { !isOwner && isUser ? <div>
                    
                    <button onClick={toggleCart}> { isInCart ? 'Remove From Cart' : 'Add To Cart' }</button>
                    </div>
                    : <></>
                }
            </div>
        </section>
    )
}

export default Details;