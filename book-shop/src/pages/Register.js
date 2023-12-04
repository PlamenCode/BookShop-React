import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorAlert from '../components/Error-Alert';
require('../styles/Register.css');

function Register() {
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        repass: ''
    });
    const [hasError, setHasError] = useState(false);
    const [errors, setErrors] = useState({
        email: false,
        password: false,
        repass: false
    })
    const navigate = useNavigate();


    const registrationSubmit = (event) => {
        event.preventDefault();
        try {
            if (inputs.email === '' || inputs.password === '' || inputs.repass === '') {
                setErrors({ email: true, password: true, repass: true });
                throw ('All fields are required');
            };
            if(inputs.password !== inputs.repass){
                setErrors({ email: false, password: true, repass: true });
                throw ("Passwords don't match.");
            }
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(inputs)
            }
            fetch('http://localhost:4200/ReactDef/auth/register', options)
                .then(res => res.json())
                .then(data => {
                    if (data.message) {
                        throw data;
                    }
                    localStorage.setItem('auth', data.token);
                    localStorage.setItem('userId', data.userId);
                    setInputs({});
                    navigate('/');
                })
                .catch(err => {
                    if(err.email){
                        setErrors({ email: true, password: false, repass: false });
                    }
                    setHasError(err.message);
                })
        } catch (error) {
            setHasError(error);
        }
    }

    const changeHandler = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    return (
        <div className="loginContainer">
            {hasError ? <ErrorAlert errors={ hasError } /> : ''}
            <form onSubmit={registrationSubmit}>
                <h1>Register</h1>
                <div className="input">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="example@gmail.com" 
                    onChange={changeHandler} className={hasError && errors['email'] ? 'error' : ''} />
                </div>

                <div className="input">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="******" 
                    onChange={changeHandler} className={hasError && errors['password'] ? 'error' : ''} />
                </div>

                <div className="input">
                    <label htmlFor="repass">Repeat-Password</label>
                    <input type="password" name="repass" placeholder="******" 
                    onChange={changeHandler} className={hasError && errors['repass'] ? 'error' : ''} />
                </div>

                <div>
                    <button id='submit-btn' type="submit">Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register;