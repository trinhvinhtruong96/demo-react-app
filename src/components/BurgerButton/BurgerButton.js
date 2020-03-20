import React, { useState } from 'react';
import classes from './BurgerButton.module.css';
import Button from '../Button/Button';
import Catagory from '../Catagory/Catagory';

function BurgerButton(props) {
    const [catagory, setCatagory] = useState("Hide");
    return (
        <div 
            className={classes.BurgerButton}     
            onMouseEnter={() => setCatagory("Show")}
            onMouseLeave={() => setCatagory("Hide")}
        >
            <Button type="Black">
                <i className={props.icon}/>
            </Button>
            <Catagory showCatagory={catagory} />
        </div>
    );
}

export default BurgerButton;