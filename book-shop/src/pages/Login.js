import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorAlert from '../components/Error-Alert';

require('../styles/Login.css');

function Login({ changeState }) {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });
    const [hasError, setHasError] = useState(false);
    const navigate = useNavigate();

    const onLoginSubmit = (event) => {
        event.preventDefault();
        try {
            if(inputs.email === '' || inputs.password === ''){
                throw('All fields are required');
            }
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(inputs)
            }
            fetch('http://localhost:4200/ReactDef/auth/login', options)
                .then(res => res.json())
                .then(data => {
                    if (data.message) {
                        throw data;
                    }
                    localStorage.setItem('auth', data.token);
                    localStorage.setItem('userId', data.userId);
                    changeState(true);
                    setInputs({});
                    navigate('/');
                })
                .catch(err =>{
                    setHasError(err.message)
                })
            } catch (error) {
                setHasError(error)
            }

    };

    const changeHandler = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    };

    return (
        <div className="loginContainer">
            <form onSubmit={onLoginSubmit}>
                {hasError ? <ErrorAlert errors={ hasError } /> : ''}
                <h1>Login</h1>
                <div className="input">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="example@gmail.com"
                        onChange={changeHandler} className={hasError ? 'error' : ''} />
                </div>

                <div className="input">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="******"
                        onChange={changeHandler} className={hasError ? 'error' : ''} />
                </div>

                <button className='submit-btn' type="submit">Submit</button >
            </form >
        </div >
    )
}

export default Login;