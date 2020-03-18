import React from 'react';
import classes from './NotificationCard.module.css';
import Button from '../Button/Button'

function NotificationCard(props) {
    return (
        <div className={classes.Card}>
            <div className={classes.Icon}>
                <i className={classes[props.icon]} />
            </div>
            <p className={classes.Paragraph}>
                Chúng tôi sẽ thông báo cho bạn về các mặt hàng yêu thích của bạn và thông tin giảm giá cửa hàng
            </p>
            <div className={classes.Button}>
                <Button type="Black"><i className="icon-message-square" /></Button>
            </div>
        </div>
    );
}

export default NotificationCard;