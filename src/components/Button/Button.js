import React from 'react';
import classes from './Button.module.css';

function Button(props) {
    let type=[classes.Btn,classes[props.type]];
    return (
        <button className={type.join(' ')}>
            {props.children}
        </button>
    );
}

export default Button;