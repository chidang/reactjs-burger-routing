import React from 'react';

import classes from './Order.module.css';

const order = ( props ) => {
  
    return (
        <div className={classes.Order}>
            <p>Ingredients: 11</p>
            <p>Price: <strong>USD 200</strong></p>
        </div>
    );
};

export default order;