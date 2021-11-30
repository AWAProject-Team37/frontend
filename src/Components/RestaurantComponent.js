import React from 'react'
import "../Styles/FrontPage.css"
import { useNavigate } from "react-router-dom";
const RestaurantComponent = (props) => {

    const navigate = useNavigate();
    const routeChange = () => {
        let path = `restaurant/${props.idRestaurant}`;
        navigate(path);
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
