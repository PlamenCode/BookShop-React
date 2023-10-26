import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
require('../styles/Register.css');

function Register(){
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();


    const registrationSubmit = (event) => {
        event.preventDefault();
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(inputs)
        }
        fetch('http://localhost:4200/ReactDef/auth/register', options)
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('auth', data.token);
                setInputs({});
                navigate('/');
            })
            .catch(err => console.log(err.message)) 
    }

    const changeHandler = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    return(
        <div className="loginContainer">
            <form onSubmit={registrationSubmit}>
                <h1>Register</h1>
                <div className="input">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="example@gmail.com" onChange={changeHandler}/>
                </div>

                <div className="input">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="******" onChange={changeHandler}/>
                </div>

                <div className="input">
                    <label htmlFor="repass">Repeat-Password</label>
                    <input type="password" name="repass" placeholder="******" onChange={changeHandler}/>
                </div>

                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register;