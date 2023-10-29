import React from 'react';

function CartBook( book ){
    return(
        <div class="card">
        <div class="container">
            <img src={book.img} alt="" />
            <h3>{ book.name }</h3>
            <p>by { book.author}</p>
            <p>{ book.price }</p>
            <div class="buttons">
                <button class="btn fill" >Remove from Cart</button>
                <button class="btn outline" >Details</button>
            </div>
        </div>
        </div>
    )
}

export default CartBook;