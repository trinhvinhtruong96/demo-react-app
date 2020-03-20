import React from 'react';
import classes from './CatagoryField.module.css';
import Button from '../Button/Button';

function CatagoryField(props) {
    const fieldItem = props.fieldItem.map((cur) => {
        return (
            <div className={classes.FieldItem} key={cur.id}>
                <Button type="Raw">{cur.name}</Button>
            </div>
        )
    })
    return (
        <div className={classes.CatagoryField}>
            <h1 className={classes.Header}>{props.header}</h1>
            {fieldItem}
        </div>
    );
}

export default CatagoryField;