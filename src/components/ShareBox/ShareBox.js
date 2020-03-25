import React from 'react'
import LoveBox from '../LoveBox/LoveBox'
import ShareIcon from '../ShareIcon/ShareIcon'
import classes from './ShareBox.module.css'

export default function ShareBox() {
    return (
        <div className={classes.ShareBox}>
            <p className={classes.Title}>Chia sẻ mục này</p>
            <ShareIcon />
            <p className={classes.Title}>Bạn có thích nhãn hiệu "KOBE LettUCE" này không?</p>
            <LoveBox content="Thêm thương hiệu này vào mục yêu thích của bạn" />
        </div>
    )
}



