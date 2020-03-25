import React from 'react'
import classes from './SuggestPost.module.css'
import Button from '../Button/Button'

export default function SuggestPost(props) {
    return (
        <div className={classes.SuggestPost}>
            <figure className={classes.PictureBox} >
            <img src={props.pic} alt="item" className={classes.Picture} />
            </figure>
            <div className={classes.Content}>
                <Button type="Raw">{props.content}</Button>
            </div>
        </div>
    )
}
