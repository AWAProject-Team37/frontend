import React from 'react'
import "../Styles/FrontPage.css"
const RestaurantComponent = (props) => {
    return (
        <div className="restaurantComponent">
            <div><img src={props.image} alt="img" className="restaurantImg"></img></div>
            <div className="restaurantName">{props.name}</div>
            <div className="divider"></div>
            <div className="restaurantInfo">{props.priceLevel} - {props.deliveryTime}</div>
            <div className="restaurantInfo">Open: {props.operatingHours}</div>
        </div>
    )
}

export default RestaurantComponent
