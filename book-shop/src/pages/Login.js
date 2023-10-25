import React, { } from 'react';
require('../styles/Login.css');

function Login() {
    return (
        <div className="loginContainer">
            <form  action="">
                <h1>Login</h1>
                <div className="input">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="example@gmail.com" />
                </div>

                <div className="input">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="******" />
                </div>

                <button type="submit">Submit</button >
            </form >
        </div >
    )
}

export default Login;