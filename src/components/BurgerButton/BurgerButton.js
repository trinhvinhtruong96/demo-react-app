import React from 'react';
import classes from './BurgerButton.module.css';
import Button from '../Button/Button';
import Catagory from '../Catagory/Catagory';

function BurgerButton(props) {
    // const [catagory, setCatagory] = useState("Hide");
    return (
        <div 
            className={classes.BurgerButton}     
            // onMouseEnter={() => setCatagory("Show")}
            // onMouseLeave={() => setCatagory("Hide")}
        >
            <Button type="Black">
                <i className={props.icon}/>
            </Button>
            <Catagory 
                // icon={props.icon} 
                // showNotification={catagory} 
                // action={props.action}
            />
        </div>
    );
}

export default BurgerButton;