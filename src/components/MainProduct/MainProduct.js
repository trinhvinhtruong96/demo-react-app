import React from 'react';
import TypePicture from '../TypePicture/TypePicture';
import classes from './MainProduct.module.css';

function MainProduct(props) {
    var typeItems = props.data.map((cur) => <TypePicture
        key={cur.id}
        img={cur.img}
        text={cur.text}
    />)
    return (
        <div className={classes.MainProduct}>
            <div className={classes.Product}>
                <img className={classes.Image} src="/demo-react-app/static/media/13332824b_19_d_215.c8a5266c.jpg" alt="main-asdas" />
            </div>
            <div className={classes.TypeProduct}>
                {typeItems}
            </div>
        </div>
    );
}

export default MainProduct;