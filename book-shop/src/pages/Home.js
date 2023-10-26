import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RecomendedBook from "../components/Recomended-Book";
require("../styles/Home.css");

function Home() {
    const [books, setbooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4200/ReactDef/data/recent')
            .then((res) => res.json())
            .then((data) => {
                setbooks(data)
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, [])


    return (
        <section className="main">
            <div className="main-container">
            </div>

            <div className="filter"></div>

            <div className="home-content">
                <h1>Wellcome</h1>

                <div className="home-content-info">
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
                    { books.length > 0 
                        ? books.map(book => <RecomendedBook key={book._id} {...book}/>)
                        : <h2>No Books Yet!</h2>
                    }
                </div>
            </div>
        </section>
    );
}

export default Home;
