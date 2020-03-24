import React, { useState } from 'react';
import Button from '../Button/Button';
import classes from './DailyKeyWord.module.css';

function DailyKeyWord(props) {
    const [openAll, setOpenALl] = useState(false);
    let dataArray = openAll ? props.data : props.data.slice(0, 12);
    let tags = dataArray.map((cur, index) =>
        <Button
            type={cur.type}
            key={cur.id}
        >
            {cur.tag}
        </Button>
    )
    let text = openAll ? "Thu Gọn ˄" : "Xem Thêm ˅"
    if (props.data.length < 13) {
        text = '';
    }
    return (
        <div className={classes.FieldsBox}>
            <p className={classes.Title}>{props.title}</p>
            <div className={classes.Tags}>
                {tags}
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

export default DailyKeyWord;