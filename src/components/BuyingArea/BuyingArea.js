import React from 'react';
import ShareBox from '../ShareBox/ShareBox';
import SuggestPosts from '../SuggestPosts/SuggestPosts';
import * as fakeData from '../../assets/dataJson/catagories'
import classes from './BuyingArea.module.css';
import Items from '../Items/Items';
import MainProduct from '../MainProduct/MainProduct';
import ProductHeader from '../ProductHeader/ProductHeader';
import BuyingAction from '../BuyingAction/BuyingAction';
import RecomendProduct from '../RecomendProduct/RecomendProduct';

function BuyingArea(props) {
    const product = fakeData.recomendProduct.map(cur =>
        <RecomendProduct
            key={cur.id}
            img={cur.img}
            imgText={cur.imgText}
            priceText={cur.priceText}
            noteText={cur.noteText}
        />
    )
    return (
        <div className={classes.BuyingArea}>
            <ProductHeader />
            <div className={classes.MainArea}>
                <div className={classes.RightSide}>
                    <MainProduct data={fakeData.typeProduct} />
                    <Items
                        title="Mặt hàng liên quan"
                        data={fakeData.itemsData.slice(0, 8)}
                    />
                    <SuggestPosts data={fakeData.suggestPost} />
                </div>
                <div className={classes.LeftSide}>
                    <BuyingAction />
                    {product}
                    <ShareBox />
                </div>
            </div>
        </div>
    );
}

export default BuyingArea;