import React from 'react';
require('../styles/Edit-Create-Form.css');


function Create(){
        return(
            <section class="content">
                <h1>Create your Book Offer</h1>
    
                <form action="">
                    <div class="input">
                        <label htmlFor="name">Book Name</label>
                        <input type="text" name="name" placeholder="Book name" />
                    </div>
    
            
                    <div class="input">
                        <label htmlFor="author">Author</label>
                        <input type="text" name="author" placeholder="Author" />
                    </div>
    
                    <div class="input">
                        <label htmlFor="img">Image Url</label>
                        <input type="text" name="img" placeholder="https://..." />
                    </div>
    
                    <div class="input">
                        <label htmlFor="price">Price</label>
                        <input type="number" name="price" placeholder="Price" />
                    </div>
    
                    <div class="input">
                        <label htmlFor="description">Description</label>
                        <textarea type="text" name="description" placeholder="Description"></textarea>
                    </div>
            
            
                    <button type="submit">Post Your Offer</button>
                </form>
            </section>
    )
}

export default Create;