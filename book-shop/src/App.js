import "./App.css";
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from "./pages/Home";

function App() {
    return <div className="App">
        <BrowserRouter>
            <Navbar/>

            <Routes>
                <Route path="/" exact Component={ Home } />
            </Routes>
        </BrowserRouter>
    </div>;
}

export default App;
