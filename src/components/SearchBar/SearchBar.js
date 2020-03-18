import React from 'react';
import classes from './SearchBar.module.css';

function SearchBar(props) {
    return (
        <form className={classes.SearchBar}>
            <input placeholder="Search for something" className={classes.Input}/>
            <button className={classes.Button}>
                <i className={"icon-search "+classes.Icon}></i>
            </button>
        </form>
    );
}

export default SearchBar;