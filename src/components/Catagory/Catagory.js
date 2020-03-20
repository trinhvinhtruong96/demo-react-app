import React from 'react';
import classes from './Catagory.module.css';
import CatagoryField from '../CatagoryFiled/CatagoryField';
import {searchField} from '../../assets/dataJson/catagories'

function Catagory(props) {
    return (
        <div className={[classes.Catagory,classes[props.showCatagory]].join(" ")}>
            <CatagoryField fieldItem={searchField} header='Tìm kiếm'/>
            <CatagoryField fieldItem={searchField} header='Tìm kiếm'/>
            <CatagoryField fieldItem={searchField} header='Tìm kiếm'/>
            <CatagoryField fieldItem={searchField} header='Tìm kiếm'/>
        </div>
    );
}

export default Catagory;