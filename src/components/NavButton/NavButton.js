import React from 'react';
import classes from './NavButton.module.css';
import Button from '../Button/Button';
import NotificationCard from '../NotificationCard/NotificationCard';


function NavButton(props) {
    return (
        <div className={classes.NavButton}>
            <Button type="Black"><i className="icon-message-square" /></Button>
            <NotificationCard />
        </div>
    );
}

export default NavButton;