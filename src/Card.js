import React from 'react'
import "./Card.css"

const Card = (props) => {
    return (
        <div className={`card ${props.type ? props.type : ""} `}>
          {props.children}  
          
        </div>
    )
}

export default Card
