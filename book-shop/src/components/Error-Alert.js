import React from 'react';
require('../styles/Error-Alert.css');

function ErrorAlert(error){
    let errorMsg = '';
    if(typeof(error) === 'object' ){
        errorMsg=  Object.values(error.errors);
    }
    return(
        <div className="error-alert">
            {errorMsg.map(message => <p>{message}</p>)}
        </div>
    )
}

export default ErrorAlert;