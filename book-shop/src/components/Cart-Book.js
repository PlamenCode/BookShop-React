import React from 'react';

function CartBook( book ){
    return(
        <div class="cart">
        <div class="cart-container">
            <div className="cart-img">
                <img src={book.img} alt="" />
            </div>

            <h3>{ book.name }</h3>
            <p>by { book.author}</p>
            <p>${ book.price }</p>

            <div class="card-buttons">
                <button class="btn fill" >Remove from Cart</button>
                <button class="btn outline" >Details</button>
            </div>
        </div>
        </div>
    )
}

export default CartBook;