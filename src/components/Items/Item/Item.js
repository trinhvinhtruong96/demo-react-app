import React from 'react'

export default function Item(props) {
    return (
        <div>
           <img src={props.pic} alt="item" ></img>
        <p>{props.type}</p>
           <p>{props.sale}</p>
        </div>
    )
}

