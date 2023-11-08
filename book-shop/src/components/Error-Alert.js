import React from 'react';
require('../styles/Error-Alert.css');

function ErrorAlert(error){
    let errorMsg = '';
    if(typeof(error) === 'object' ){
        let messegesArray =  Object.values(error.errors);
        errorMsg = messegesArray.join('/n')
        // messegesArray.forEach(message => {
        //     errorMsg += message
        // });
    }
    return(
        <div className="error-alert">
            <p>{errorMsg}</p>
        </div>
    )
}

export default ErrorAlert;