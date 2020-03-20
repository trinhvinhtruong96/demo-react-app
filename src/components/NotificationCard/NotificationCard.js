import React from 'react';
import classes from './NotificationCard.module.css';
import Button from '../Button/Button'

function NotificationCard(props) {
    return (
        <div className={[classes.Card,classes[props.showNotification]].join(' ')}>
            <div className={classes.Icon}>
                <i className={props.icon} />
            </div>
            <p className={classes.Paragraph}>
                {props.children}
            </p>
            <div className={classes.Button}>
                <Button type="RawBlue">{props.action}</Button>
            </div>
        </div>
    );
}

export default NotificationCard;