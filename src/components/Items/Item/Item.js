import React from 'react'
import logo from '../../../assets/images/items/13332824b_19_d_215.jpg';
import classes from './Item.module.css';

export default function Item(props) {
    console.log(logo);
    return (
        <div className={classes.Item} key={props.key}>
            <figure className={classes.PictureBox}>
                <img src={props.pic} alt="item" className={classes.Picture} />
                <div className={classes.TagBox}>
                    <span className={classes.Tag} >{props.tag}</span>
                </div>
                <div className={classes.SaleBox}>
                    <span className={classes.Sale} >{props.sale}</span>
                </div>
            </figure>
            <p className={classes.Name}>{props.name}</p>
            <p className={classes.Price}>{props.price}</p>
        </div>
    )
}

