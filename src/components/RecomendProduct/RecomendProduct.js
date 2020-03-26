import React from 'react';
import classes from './RecomendProduct.module.css';
import TypePicture from '../TypePicture/TypePicture';
import ButtonCart from '../ButtonCart/ButtonCart';

function RecomendProduct(props) {
    return (
        <div className={classes.RecomendProduct}>
            <div className={classes.RecomendProductBox}>
                <TypePicture
                    img={props.img}
                    text={props.imgText}
                />
                <div className={classes.TextBox}>
                    <p>{props.priceText}</p>
                    <p>{props.noteText}</p>
                </div>
                <ButtonCart />
                <div className={classes.IconBox}>
                    <i class="icon-heart-outlined"></i>
                </div>
            </div>
        </div>
    );
}

export default RecomendProduct;