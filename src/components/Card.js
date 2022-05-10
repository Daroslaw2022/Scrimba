import React from "react";
import katie from '../images/katie.jpg'
import star from '../images/star.png'

function Card (props) {
    console.log(props)
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={katie} className="card--image"/>
            <div className="card--stats">
                <img src={star} className="card--star"/>
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) · </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>


        </div>
    )
}
export default Card;

