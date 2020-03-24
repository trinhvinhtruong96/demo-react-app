import React from 'react';
import { Fragment } from 'react';
import Items from '../../components/Items/Items';
import DailyKeyWord from '../../components/DailyKeyWord/DailyKeyWord';
import OtherShop from '../../components/OtherShop/OtherShop';
import Introduction from '../../components/Introduction/Introduction';
import * as fakeData from '../../assets/dataJson/catagories'

function ItemPage(props) {
    return (
        <Fragment>
            <Items
                title="Đề xuất cho những người đang xem mặt hàng này"
                data={fakeData.itemsData}
            />
            <Items
                title="Xếp hạng áo phông / cắt may phổ biến"
                data={fakeData.itemsData}
            />
            <Items
                title="Các mặt hàng được kiểm tra gần đây"
                data={fakeData.itemsData}
            />
            <DailyKeyWord
                title="Từ khóa cho mặt hàng này"
                data={fakeData.tagData}
            />
            <OtherShop
                title="Xem áo phông / cutsews từ các cửa hàng khác"
                data={fakeData.shopData}
            />
            <Introduction
                title="Giới thiệu ZOZOTOWN"
                introduction="ZOZOTOWN là một trang web đặt hàng qua thư thời trang có nhiều mặt hàng của các thương hiệu nổi tiếng như áo phông / áo thun cắt may của KOBE LettUCE. Mua 7599 mặt hàng thương hiệu mới nhất trên mạng, bao gồm áo phông và đồ cắt may."
            />
        </Fragment>
    );
}

export default ItemPage;