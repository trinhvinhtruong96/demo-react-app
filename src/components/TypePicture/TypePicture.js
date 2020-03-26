import React from 'react';
import classes from './TypePicture.module.css';

function TypePicture(props) {
    return (
        <div className={classes.TypePicture}>
            <div className={classes.ImageBox}>
                <img src={props.img} alt="type-pic" className={classes.Image} />
            </div>
            <div className={classes.TextBox}>
                <p className={classes.Text}>{props.text}</p>
            </div>
        </div>
    );
}

export default TypePicture;