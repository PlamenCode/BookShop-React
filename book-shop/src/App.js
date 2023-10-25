import "./App.css";
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Edit from "./pages/Edit";
import Create from "./pages/Create";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if(localStorage.auth){
            setIsLoggedIn(true);
        } else{
            setIsLoggedIn(false);
        }
    }, [])
    return <div className="App">
        <BrowserRouter>
            <Navbar isLoggedIn={ isLoggedIn } />

            <Routes>
                <Route path="/" exact Component={ Home } />
                <Route path="/login" exact Component={ Login } />
                <Route path="/register" exact Component={ Register } />
                <Route path="/edit/:bookId" exact Component={ Edit } />
                <Route path="/create" exact Component={ Create } />

            </Routes>
        </BrowserRouter>
    </div>;
}

export default App;
