import React from 'react'
import "../Styles/FrontPage.css"
const RestaurantComponent = (props) => {
    return (
        <div className="restaurantComponent">
            <img src={props.image} alt={props.alt} className="restaurantImg"></img>
            <div className="restaurantName">{props.name}</div>
            <div className="divider"></div>
            <div className="restaurantInfo">{props.priceLevel} - {props.deliveryTime}</div>
            <div className="restaurantInfo">Open: {props.operatingHours}</div>
        </div>
    )
}

export default RestaurantComponent
