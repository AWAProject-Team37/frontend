import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TopBar from '../Components/TopBar';
import "../Styles/RestaurantPage.css"
import RestaurantMenu from '../Components/RestaurantMenu';
const RestaurantPage = () => {

    const [restaurantData, setRestaurantData] = useState(null);
    const [restaurantMenu, setRestaurantMenu] = useState(null);
    const [loadingData, setLoadingData] = useState(true);
    const [loadingMenu, setLoadingMenu] = useState(true);

    // Function to get restaurant id from url
    const getRestaurantID = () => {
        let splitUrl = window.location.pathname.split("/");
        return parseInt(splitUrl[2]);
    }
    // Store restaurant id here and use it to make api request to get correct data
    const restaurantID = getRestaurantID(); 

    useEffect(() => {
        axios.get(`http://localhost:4000/restaurants/${restaurantID}`).then(res => {
            setRestaurantData(res.data)
            setLoadingData(false);
        }).catch(err => console.log(err))
        axios.get(`http://localhost:4000/items/${restaurantID}`).then(res => {
            setRestaurantMenu(res.data)
            setLoadingMenu(false);
        }).catch(err => console.log(err))
    },[restaurantID])
    return (
        loadingData || loadingMenu === true ? <div></div> :
        <>
        <TopBar/>
        <img src={restaurantData[0].Image} alt="restaurant" className="restaurantHeaderImg"/>
        <div className="restaurantBody">
            <h1>{restaurantData[0].Name}</h1>
            <RestaurantMenu {...restaurantMenu}/>
        </div>
        </>
    )
}

export default RestaurantPage
