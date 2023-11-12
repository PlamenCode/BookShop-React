import React from 'react';
import { Route} from "react-router-dom";
import Home from '../pages/Home';

const GuardedRoute = ({ component: Component, auth, ...rest }) => (
    <Route {...rest} render={(props) => (
        auth === true
            ? <Component {...props} />
            : <Home />
    )} />
)

export default GuardedRoute;