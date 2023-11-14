import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ErrorAlert from "../components/Error-Alert";
require("../styles/Edit-Create-Form.css");

function Edit() {
    const navigate = useNavigate();
    const params = useParams();

    const [book, setBook] = useState({});
    const [hasError, setHasError] = useState(false);
    const [errors, setErrors] = useState({
        name: "",
        author: "",
        img: "",
        price: "",
        description: "",
    });


    useEffect(() => {
        fetch(`http://localhost:4200/ReactDef/data/${params.bookId}`)
            .then((res) => res.json())
            .then((data) => {
                if(!localStorage.getItem('userId') || localStorage.getItem('userId') !== data.ownerId.toString()){
                    navigate('/login');
                } else{
                    setBook(data);
                }
            })
    }, [])

    const changeHandler = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;

        if (name === "name" && value === "") {
            setHasError(true);
            setErrors({ ...errors, [name]: "Name is reqired" });
        } else if (name === "author" && value === "") {
            setErrors(true);
            setErrors({ ...errors, [name]: "Author is reqired" });
        } else if (name === "img" && value === "") {
            setHasError(true);
            setErrors({ ...errors, [name]: "IMG is reqired" });
        } else if (name === "price" && value < 1) {
            setHasError(true);
            setErrors({ ...errors, [name]: "Price must be above 0" });
        } else if (name === "description") {
            if (value.length < 10) {
                setHasError(true);
                setErrors({
                    ...errors,
                    [name]: "Description must be at least 10 charecters long",
                });
            } else {
                setErrors({ ...errors, [name]: "" });
            }
        } else {
            setErrors({ ...errors, [name]: "" });
        }

        setBook((values) => ({ ...values, [name]: value }));
    };

    function onEditSubmit(event) {
        event.preventDefault();
        if (
            !book.name || book.name == "" ||
            !book.author || book.author == "" ||
            !book.img || book.img == "" ||
            !book.price || book.price == "" ||
            !book.description || book.description == ""
        ) { return } else {

            const options = {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    book: book,
                    user: localStorage.getItem("userId"),
                }),
            };
            fetch(`http://localhost:4200/ReactDef/data/${book._id}`, options)
                .then((res) => res.json())
                .then((data) => {
                    setBook({});
                    navigate(`/books/${data._id}`);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }

    return (
        <section className="content">
            <h1>Edit your Book Offer</h1>

            {hasError ? <ErrorAlert errors={errors} /> : ""}

            <form onSubmit={onEditSubmit}>
                <div className="input">
                    <label htmlFor="name">Book Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Book name"
                        defaultValue={book.name}
                        onChange={changeHandler}
                        className={errors.name ? "error" : ""}
                    />
                </div>

                <div className="input">
                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        name="author"
                        placeholder="Author"
                        defaultValue={book.author}
                        onChange={changeHandler}
                        className={errors.author ? "error" : ""}
                    />
                </div>

                <div className="input">
                    <label htmlFor="img">Image Url</label>
                    <input
                        type="text"
                        name="img"
                        placeholder="https://..."
                        defaultValue={book.img}
                        onChange={changeHandler}
                        className={errors.img ? "error" : ""}
                    />
                </div>

                <div className="input">
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        defaultValue={book.price}
                        onChange={changeHandler}
                        className={errors.price ? "error" : ""}
                    />
                </div>

                <div className="input">
                    <label htmlFor="description">Description</label>
                    <textarea
                        type="text"
                        name="description"
                        placeholder="Description"
                        defaultValue={book.description}
                        onChange={changeHandler}
                        className={errors.description ? "error" : ""}
                    ></textarea>
                </div>

                <button type="submit">Edit Your Offer</button>
            </form>
        </section>
    );
}

export default Edit;
