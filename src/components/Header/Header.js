import React from 'react';
import Button from '../Button/Button';
import classes from './Header.module.css';

function Header(props) {
    return (
        <div className={classes.Header}>
            <div className={classes.Image}>&nbsp;</div>
            <div className={classes.Recomendation}>
                <div className={classes.Icon}>
                    <i class="icon-airplane"></i>
                </div>
                <div className={classes.Content} >
                    <span className={classes.text}>For international customer, shop with our partner Buyee</span>
                </div>
                <div className={classes.Button}>
                    <Button type="BlueRadius" >Shop now</Button>
                </div>
            </div>
        </div>
    );
}

export default Header;