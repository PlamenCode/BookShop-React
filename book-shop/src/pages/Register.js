import React from 'react';
require('../styles/Register.css');

function Register(){
    return(
        <div class="loginContainer">
            <form action="">
                <h1>Register</h1>
                <div class="input">
                    <label for="email">Email</label>
                    <input type="email" name="email" placeholder="example@gmail.com" />
                </div>

                <div class="input">
                    <label for="password">Password</label>
                    <input type="password" name="password" placeholder="******"/>
                </div>

                <div class="input">
                    <label for="repass">Repeat-Password</label>
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