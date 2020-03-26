import React from 'react';
import classes from './ButtonBuying.module.css';

function ButtonBuying(props) {
    return (
        <div className={classes.ButtonBuying}>
            <div className={classes.IconBox}>
                <i class="icon-airplane" className={classes.Icon} />
            </div>
            <div className={classes.TextBox}>
                <p className={classes.Text}>SHOP NOW</p>
            </div>
        </div>
    );
}

export default ButtonBuying;