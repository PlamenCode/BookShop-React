import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Edit from "./pages/Edit";
import Create from "./pages/Create";
import Catalog from "./pages/Catalog";
import Details from "./pages/Details";
import Cart from "./pages/Cart";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const changeState = (state) => {
    setIsLoggedIn(state);
  }


  useEffect(() => {
    if(localStorage.getItem('auth')){
        setIsLoggedIn(true);
    } else{
        setIsLoggedIn(false)
    }
  }, [])
  return (
      <div className="App">
          <Navbar isLoggedIn={isLoggedIn} changeState={changeState} />

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" exact element={<Login changeState={changeState}/>}/>
            <Route path="/register" exact element={<Register changeState={changeState}/>}/>
            <Route path="/edit/:bookId" exact element={<Edit />} />
            <Route path="/create" exact element={<Create />} />
            <Route path="/catalog" exact element={<Catalog />} />
            <Route path="/books/:id" exact element={<Details />} />
            <Route path="/cart" exact element={<Cart />} />
          </Routes>
      </div>
  );
}

export default App;
