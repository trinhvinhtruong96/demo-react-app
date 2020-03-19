import React from 'react';
import classes from './Catagory.module.css';
import CatagoryField from '../CatagoryFiled/CatagoryField';

function Catagory(props) {
    return (
        <div className={classes.Catagory}>
            <CatagoryField />
        </div>
    );
}

export default Catagory;