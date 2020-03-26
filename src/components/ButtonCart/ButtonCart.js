import React from 'react';
import classes from './ButtonCart.module.css';

function ButtonCart(props) {
    return (
        <div className={classes.ButtonCart}>
            <div className={classes.IconBox}>
                <i className="icon-cart"></i>
            </div>
            <div className={classes.TextBox}>
                <p>カートへ入れる</p>
            </div>
        </div>
    );
}

export default ButtonCart;