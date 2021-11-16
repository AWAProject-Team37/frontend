import React from 'react'
import "../Styles/FrontPage.css"
import { useHistory } from "react-router-dom";
const RestaurantComponent = (props) => {

    const history = useHistory();

    const routeChange = () => {
        let path = `restaurant/${props.id}`;
        history.push(path);
    }


    return (
        <div className="restaurantComponent" onClick={routeChange}>
            <img src={props.image} alt={props.alt} className="restaurantImg"></img>
            <div className="restaurantName">{props.name}</div>
            <div className="divider"></div>
            <div className="restaurantInfo">{props.priceLevel} - {props.deliveryTime}</div>
            <div className="restaurantInfo">Open: {props.operatingHours}</div>
        </div>
    )
}

export default RestaurantComponent
