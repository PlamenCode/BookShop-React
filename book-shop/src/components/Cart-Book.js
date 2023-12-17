import React from 'react';
import { useNavigate } from 'react-router-dom';
import noImg from '../assets/noImg.jpg';

function CartBook( book ){
    const navigate = useNavigate();

    function navigateDetails(){
        navigate(`/books/${book._id}`);
    }

    function removeFromCart() {
        const options = {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        }
        fetch(`http://localhost:4200/ReactDef/cart/${localStorage.getItem("userId")}/${book._id}`, options)
          .then((res) => res.json())
          .then((data) => {
            if(data == true){
                window.location.reload();
            };
        })
          .catch((err) => {
            console.log(err.message);
          });
    }

    return(
        <div className="cart">
        <div className="cart-container">
            <div className="cart-img">
                <img src={book.img} alt={noImg} />
            </div>

            <h3>{ book.name }</h3>
            <p>by { book.author}</p>
            <p>${ book.price }</p>

            <div className="card-buttons">
                <button className="btn fill" onClick={removeFromCart}>Remove from Cart</button>
                <button className="btn outline" onClick={navigateDetails} >Details</button>
            </div>
        </div>
        </div>
    )
}

export default CartBook;