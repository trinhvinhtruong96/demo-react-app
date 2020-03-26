import React, { useState } from 'react';
import Item from './Item/Item';
import classes from './Items.module.css';
import Button from '../Button/Button';

function Items(props) {
    const [openAll, setOpenALl] = useState(false);
    let dataArray = openAll ? props.data : props.data.slice(0, 12);
    let items = dataArray.map((cur, index) =>
        <Item
            key={cur.id}
            tag={cur.tag}
            sale={cur.sale}
            pic={cur.pic}
            name={cur.name}
            price={cur.price}
        />
    )
    let text = openAll ? "Thu Gọn ˄" : "Xem Thêm ˅";
    if (props.data.length < 13) {
        text = '';
    }
    return (
        <div className={classes.FieldsBox}>
            <p className={classes.Title}>{props.title}</p>
            <div className={classes.Items}>
                {items}
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

export default Items;