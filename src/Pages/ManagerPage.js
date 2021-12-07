import React, { useState, useEffect } from 'react'
import ManagerTopBar from '../Components/ManagerTopBar'
import CreateRestaurantComponent from '../Components/CreateRestaurantComponent'
import "../Styles/ManagerPage.css"
import CreateMenuComponent from '../Components/CreateMenuComponent'
import ControlOrderComponent from '../Components/ControlOrderComponent'
import ViewOrdersComponent from '../Components/ViewOrdersComponent'
import ManagerMainMenu from '../Components/ManagerMainMenu'
import axios from 'axios'
import {apiAddress} from '../Constants'
import MainMenuInfo from '../Components/MainMenuInfo'


 


 const ManagerPage = (props) => {
     useEffect( () => {
        const getRestaurantData = async () => {
            const data = await axios.get(`${apiAddress}/restaurants/userid/${props.id}`)
            setRestaurantData(data.data[0]);
        }
        getRestaurantData();
     },[props.id])

     const [view, setView] = useState("");
     const [restaurantData, setRestaurantData] = useState(null);
     let toggleView = (viewMode) => {
         setView(viewMode);
     }

    return (
        <>

        <ManagerTopBar userInfo={props.userInfo} logout={props.logout}/>
        
        

        <ManagerMainMenu toggleView={toggleView}/>
        
        
        {view === "mainmenu" ? <MainMenuInfo/> : null}
        {view === "foodmenu" ? <CreateMenuComponent idRestaurant={restaurantData.idRestaurant}/> : null} 
        {view === "controlorder" ? <ControlOrderComponent/> : null}
        {view === "restaurants" ? <CreateRestaurantComponent idUser={props.id}/> : null}
        {view === "vieworders" ? <ViewOrdersComponent/> : null} 
        </>
    )
}
export default ManagerPage
