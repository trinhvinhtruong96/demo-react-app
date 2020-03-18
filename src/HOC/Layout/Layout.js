import React, { Component } from 'react';
import MainNav from '../../containers/MainNav/MainNav';


class Layout extends Component {
    render() {
        return (
            <React.Fragment> 
                <MainNav />
                <main>
                    {this.props.children}
                </main>
                <div>footer</div>
            </React.Fragment>
        );
    }
}

export default Layout;