import React, { Component } from 'react';
import classes from './MainNav.module.css';
import Logo from '../../components/Logo/Logo'
import SearchBar from '../../components/SearchBar/SearchBar'
import Button from '../../components/Button/Button';
import NavButton from '../../components/NavButton/NavButton';

class MainNav extends Component {
    render() {
        return (
            <div className={classes.Container}>
                <div className={classes.MainNav}>
                    <Logo />
                    <SearchBar />
                    <Button type="Black">Đăng Nhập</Button>
                    <NavButton 
                        icon="icon-message-square" 
                        action="Nhấn vào đây để biết chi tiết"
                    >
                        Chúng tôi sẽ thông báo cho bạn về các mặt hàng yêu thích của bạn và thông tin giảm giá cửa hàng
                    </NavButton>
                    <NavButton 
                        icon="icon-heart-outlined" 
                        action="Nhấn vào đây để biết chi tiết"
                    >
                        Hiện tại không phải thành viên có thể sử dụng "Favorites" 
                    </NavButton>
                    <NavButton 
                        icon="icon-cart" 
                        action="Mua hàng"
                    >
                        Không có sản phẩm trong giỏ hàng
                    </NavButton>
                </div>
            </div>

        );
    }
}

export default MainNav;