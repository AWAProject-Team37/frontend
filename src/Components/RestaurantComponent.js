import React from 'react'
import "../Styles/FrontPage.css"
import { useHistory } from "react-router-dom";
const RestaurantComponent = (props) => {

    const history = useHistory();
    const routeChange = () => {
        let path = `restaurant/${props.idRestaurant}`;
        history.push(path);
    }


    return (
        <div className="restaurantComponent" onClick={routeChange}>
            <img src={props.Image} alt="restaurant" className="restaurantImg"></img>
            <div className="restaurantName">{props.Name}</div>
            <div className="divider"></div>
            <div className="restaurantInfo">{props.PriceLevel}</div>
            <div className="restaurantInfo">Open: {props.OperatingHour}</div>
        </div>
    )
}

export default RestaurantComponent
