import React, { Component } from 'react';
import MainNav from '../../containers/MainNav/MainNav';
import Item from '../../components/Items/Item/Item';


class Layout extends Component {
    render() {
        return (
            <React.Fragment> 
                <MainNav />
                <main>
                    {this.props.children}
                </main>
                <Item type="PR" sale="60%OFF" pic="/demo-react-app/static/media/13332824b_19_d_215.c8a5266c.jpg" />
            </React.Fragment>
        );
    }
}

export default Layout;