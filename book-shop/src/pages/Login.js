import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

require('../styles/Login.css');

function Login() {
    const [inputs, setInputs] = useState({});
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const loginSubmit = (event) => {
        event.preventDefault();
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(inputs)
        }
        fetch('http://localhost:4200/ReactDef/auth/login', options)
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('auth', data.token);
                setInputs({});
                navigate('/');
            })
            .catch(err => setError(err))
        
    };

    const changeHandler = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    
    return (
        <div className="loginContainer">
            <form  onSubmit={loginSubmit}>
                <h1>Login</h1>
                <div className="input">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="example@gmail.com" onChange={changeHandler} />
                </div>

                <div className="input">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="******" onChange={changeHandler}/>
                </div>

                <button type="submit">Submit</button >
            </form >
        </div >
    )
}

export default Login;