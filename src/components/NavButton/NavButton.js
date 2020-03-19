import React, { useState } from 'react';
import classes from './NavButton.module.css';
import Button from '../Button/Button';
import NotificationCard from '../NotificationCard/NotificationCard';


function NavButton(props) {
    const [notification, setNotification] = useState("Hide");
    return (
        <div 
            className={classes.NavButton}     
            onMouseEnter={() => setNotification("Show")}
            onMouseLeave={() => setNotification("Hide")}
        >
            <Button type="Black">
                <i className={props.icon}/>
            </Button>
            <NotificationCard 
                icon={props.icon} 
                showNotification={notification} 
                action={props.action}
            >{props.children}
            </NotificationCard>
        </div>
    );
}

export default NavButton;