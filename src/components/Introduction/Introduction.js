import React from 'react';
import classes from './Introduction.module.css';

function Introduction(props) {
    return (
        <div className={classes.FieldsBox}>
            <p className={classes.Title}>{props.title}</p>
            <div className={classes.Introduction}>
                {props.introduction}
            </div>
        </div>
    );
}

export default Introduction;