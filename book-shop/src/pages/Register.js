import React from 'react';
require('../styles/Register.css');

function Register(){
    return(
        <div className="loginContainer">
            <form action="">
                <h1>Register</h1>
                <div className="input">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="example@gmail.com" />
                </div>

                <div className="input">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="******"/>
                </div>

                <div className="input">
                    <label htmlFor="repass">Repeat-Password</label>
                    <input type="password" name="repass" placeholder="******"/>
                </div>

                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register;