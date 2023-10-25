import React, { useEffect, useState } from "react";
import img from "../assets/backgrond1.jpg";
import { Link } from "react-router-dom";
import RecomendedBook from "../components/Recomended-Book";
require("../styles/Home.css");

function Home() {
    const [books, setbooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4200/ReactDef/data/recent')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setbooks(data)
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, [])


    return (
        <section className="main">
            <div className="container">
                <img src={img} alt="" />
            </div>

            <div className="filter"></div>

            <div className="content">
                <h1>Wellcome</h1>

                <div className="content_info">
                    <h2>Buy and Sell your textbooks for the best price</h2>
                    <p>
                        From applied literature to educatonal resources, we have a lot of
                        textbooks to offer you. We provide only the best books
                    </p>
                    <Link to={"/catalog"} className="button">
                        Catalog
                    </Link>
                </div>
            </div>

            <div className="recomended">
                <h2>Recomended books</h2>

                <div className="books">
                    { books.map(book => <RecomendedBook key={book._id} {...book}/>) }
                    {/* <div className="card">
                        <div className="image">
                            <img src="{{SingleBook.img}}" />
                        </div>
                        <div className="details">
                            <div className="center">
                                <p>Book Description</p>
                                <Link to={"/books/:bookId"} className="button">
                                    Details
                                </Link>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default Home;
