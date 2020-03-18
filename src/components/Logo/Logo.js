import React from 'react';

import classes from './Logo.module.css'

function Logo(props) {
    return (
        <p className={classes.Logo} style={{height: props.height}}>
            ZOZOTOWN
        </p>
    );
}

export default Logo;