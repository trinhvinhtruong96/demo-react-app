import React, { Component } from 'react';

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <div>header</div>
                <main>
                    {this.props.children}
                </main>
                <div>footer</div>
            </React.Fragment>
        );
    }
}

export default Layout;