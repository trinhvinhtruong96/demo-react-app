import React from 'react';
import classes from './ButtonTag.module.css';

function ButtonTag(props) {
    return (
        <div className={classes.LaterPayWrapper}>
            <div data-toggle={classes.Later_pay}>
                <p className={classes.Font_bold}>ツケ払いできます</p>
                <p>お支払いは5月26日<span className={classes.TextDecoration}>詳細</span></p>
            </div>
        </div>
    );
}

export default ButtonTag;