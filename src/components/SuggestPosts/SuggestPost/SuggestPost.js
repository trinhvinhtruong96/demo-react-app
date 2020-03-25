import React from 'react'
import classes from './SuggestPost.module.css'

export default function SuggestPost(props) {
    return (
        <div className={classes.SuggestPost}>
            <figure className={classes.PictureBox} >
                <img src={props.pic} alt="item" className={classes.Picture} />
            </figure>
            <div className={classes.ContentBox}>
                <p className={classes.Content}>{props.content}</p>
                <p className={classes.Tag}>{props.tag}</p>
            </div>
        </div>
    )
}
