import React from 'react';
import classes from './BuyingAction.module.css';
import ButtonTag from '../ButtonTag/ButtonTag';
import ButtonBuying from '../ButtonBuying/ButtonBuying';

function BuyingAction(props) {
    return (
        <div className={classes.BuyingAction}>
            <div className={classes.SingleRow}>
                <p>ショップ：kobelettuce</p>
                <p>ブランド：KOBE LETTUCE</p>
            </div>
            <div className={classes.SingleRow}>
                <p>スリットフレアケープスリーブカットソートップス</p>
            </div>
            <div className={classes.MarriedRow}>
                <p className={classes.Price}>¥1,310税込</p>
                <ButtonTag />
            </div>
            <div className={classes.SingleRow}>
                <p>ZOZOCARDなら5倍還元58pt（通常11pt）詳細</p>
                <p>お気に入りアイテム登録数：54人</p>
            </div>
            <div className={classes.MarriedRow}>
                <p>Order this product from outside of Japan.</p>
                <ButtonBuying />
            </div>
        </div>
    );
}

export default BuyingAction;