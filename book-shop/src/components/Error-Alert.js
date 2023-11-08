import React from 'react';
require('../styles/Error-Alert.css');

function ErrorAlert(error){
    console.log(error);
    return(
        <div className="error-alert">
            <p>{error.errors}</p>
        </div>
    )
}

export default ErrorAlert;