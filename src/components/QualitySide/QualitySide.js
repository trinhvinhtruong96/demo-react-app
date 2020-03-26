import React, { useState } from 'react';
import classes from './QualitySide.module.css';
import Button from '../Button/Button';
import ProductQuality from '../ProductQuality/ProductQuality';
import DetailQuality from '../DetailQuality/DetailQuality';

function QualitySide(props) {
    const [choose, setChoose] = useState(false);
    const button1 = [];
    const button2 = [];
    let component = <ProductQuality />;;
    button1.push(classes.Button);
    button2.push(classes.Button);
    if (choose) {
        button1.push(classes.BoderBottom)
        button2.push(classes.BorderThree)
        component = <DetailQuality />
    } else {
        button2.push(classes.BoderBottom)
        button1.push(classes.BorderThree)
        component = <ProductQuality />;;
    }
    return (
        <div className={classes.QualitySide}>
            <div className={classes.Control}>
                <div className={button1.join(' ')}>
                    <Button type="RawBlue" clicked={() => setChoose(false)} >アイテム説明</Button>
                </div>
                <div className={button2.join(' ')}>
                    <Button type="RawBlue" clicked={() => setChoose(true)} >アイテム説明</Button>
                </div>
                <div className={classes.Nothing}>
                </div>
            </div>
            {component}
        </div>
    );
}

export default QualitySide;