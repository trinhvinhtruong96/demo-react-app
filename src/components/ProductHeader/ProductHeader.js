import React from 'react';
import classes from './ProductHeader.module.css';
import Button from '../Button/Button';

function ProductHeader(props) {
    return (
        <div className={classes.ProductHeader}>
            <div className={classes.Header}>
                <p className={classes.text}>KOBE LETTUCE</p>
            </div>
            <div className={classes.Directory}>
                <div className={classes.Link}>
                    <Button type="RawBlue">TruongTV</Button>
                    >
                </div>
                <div className={classes.Link}>
                    <Button type="RawBlue">TruongTV</Button>
                    >
                </div>
                <div className={classes.Link}>
                    <Button type="RawBlue">TruongTV</Button>
                    >
                </div>
                <div className={classes.Link}>
                    <Button type="RawBlue">TruongTV</Button>
                    >Trinh Vinh Truong
                </div>
            </div>
        </div>
    );
}

export default ProductHeader;