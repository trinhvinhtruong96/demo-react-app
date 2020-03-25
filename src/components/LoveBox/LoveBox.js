import React, { useState } from 'react'
import classes from './LoveBox.module.css'

export default function LoveBox(props) {
    const [love, setLove] = useState(false);
    const loved = love ? classes.Loved : null;
    const lovedBox = love ? classes.LovedBox : null;
    const content= love ?"Bạn đã thích em này, từ giờ bạn sẽ được gợi ý những bài đăng từ em ấy":props.content;
    return (
        <div className={[classes.LoveBox,lovedBox].join(' ')} onClick={()=>setLove(!love)}>
            <div className={[classes.Icon, loved].join(' ')}>
                <i className="icon-heart-outlined" />
            </div>
            <p className={[classes.Content, loved].join(' ')}>{content}</p>
        </div>
    )
}
