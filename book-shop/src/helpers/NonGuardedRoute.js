import React from 'react';
import { Route } from "react-router-dom";
import Home from '../pages/Home';

const NonGuardedRoute = ({ component: Component, auth, ...rest }) => (
    <Route {...rest} render={(props) => (
        auth === false
            ? <Component {...props} />
            : <Home />
    )} />
)

export default NonGuardedRoute;