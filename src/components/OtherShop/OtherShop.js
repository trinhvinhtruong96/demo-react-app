import React, { useState } from 'react';
import Button from '../Button/Button';
import classes from './OtherShop.module.css';

function OtherShop(props) {
    const [openAll, setOpenALl] = useState(false);
    let dataArray = openAll ? props.data : props.data.slice(0, 12);
    let shops = dataArray.map((cur, index) =>
        <div className={classes.EachShop} key={cur.id}>
            <Button
                type={cur.type}
            >
                {cur.tag}
            </Button>
        </div>
    )
    let text = openAll ? "Thu Gọn ˄" : "Xem Thêm ˅"
    if (props.data.length < 13) {
        text = '';
    }
    return (
        <div className={classes.FieldsBox}>
            <p className={classes.Title}>{props.title}</p>
            <div className={classes.Shops}>
                {shops}
            </div>
            <div className={classes.ButtonOpen}>
                <Button
                    type="RawBlue"
                    clicked={() => setOpenALl(!openAll)}
                >
                    {text}
                </Button>
            </div>
        </div>
    );
}

export default OtherShop;