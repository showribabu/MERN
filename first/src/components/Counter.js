
// src/components/Counter.js

import React, { useState } from 'react';

//creare a component

const Counter=(probs)=>{


    //initialize count
    const [count,Countinc]=useState(0);

    const inc=()=>{
        Countinc(count+1);
    }

    return (

        <div>
            <p>Count:{count}</p>
            <button onClick={inc}>Increment</button>
        </div>

    );

};

export default Counter;

