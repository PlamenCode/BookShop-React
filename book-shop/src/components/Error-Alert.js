import React from 'react';
require('../styles/Error-Alert.css');

function ErrorAlert(error){
    let errorMsg = '';

    if(typeof(error.errors) === 'object' ){
        errorMsg = Object.values(error.errors).filter(x => x != '');
    } else {
        errorMsg = Object.values(error);
    }

    return(
        <div className="error-alert">
            {errorMsg.map(message => <p key={message.length}>{message}</p>)}
        </div>
    )
}

export default ErrorAlert;