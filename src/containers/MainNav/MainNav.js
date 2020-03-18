import React, { Component } from 'react';
import classes from './MainNav.module.css';
import Logo from '../../components/Logo/Logo'
import SearchBar from '../../components/SearchBar/SearchBar'
import Button from '../../components/Button/Button';

class MainNav extends Component {
    render() {
        return (
            <div className={classes.Container}>
                <div className={classes.MainNav}>
                    <Logo />
                    <SearchBar />
                    <Button type="black">Login</Button>
                </div>
            </div>

        );
    }
}

export default MainNav;