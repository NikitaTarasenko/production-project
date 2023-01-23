import React, { useState } from 'react';
import classes from './Counter.module.scss';
import '../index.scss';

export const Counter = () => {
    const [count, setC] = useState(0)
 
    return (
        <div className={classes.body}>
            <h1>{count}</h1>
            <button onClick={()=> setC(count + 1)}>in</button>
        </div>
    );
};

 