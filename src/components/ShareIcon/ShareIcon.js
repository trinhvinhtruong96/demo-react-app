import React from 'react'
import Button from '../Button/Button'
import classes from './ShareIcon.module.css'

export default function ShareIcon() {
    return (
        <div>
            <div className={classes.IconShare}>
                <Button type="Icon">
                    <i className={"icon-twitter-with-circle"} style={{color:'#00acee'}}></i>
                </Button>
                <Button type="Icon">
                    <i className="icon-facebook"></i>
                </Button>
                <Button type="Icon">
                    <i className="icon-line"></i>
                </Button>
            </div>
        </div>
    )
}
