import React, { Component } from 'react';
import MainNav from '../../containers/MainNav/MainNav';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <MainNav />
                <main>
                    {this.props.children}
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Layout;