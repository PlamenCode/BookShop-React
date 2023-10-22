import React, { useState } from 'react';

function Home(){
    let [ number, setnumber ] = useState(0);

    const increase = () => {
        setnumber((prevValue) => prevValue + 1);
    }
    const reset = () => {
        setnumber(() => 0);
    }
    const decrease = () => {
        setnumber((prevValue) => prevValue -1);
    }
    return(
        <div className="home">
            <h1>{number}</h1>
            <button onClick={ increase }>Increase</button>
            <button onClick={ reset }>Reset</button>
            <button onClick={ decrease }>Decrease</button>

        </div>
    )
}

export default Home