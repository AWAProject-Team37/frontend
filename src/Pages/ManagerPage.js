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
    const [view, setView] = useState("mainmenu");
    const [restaurantData, setRestaurantData] = useState(null);
    let restaurantCreated = false;

    useEffect( () => {
        const getRestaurantData = async () => {
            const data = await axios.get(`${apiAddress}/restaurants/userid/${props.id}`)
            setRestaurantData(data.data[0]);
            
        }
        getRestaurantData();
    },[props.id])

    let toggleView = (viewMode) => {
         setView(viewMode);
    }
    if(restaurantData !== undefined && restaurantData !== null){
        restaurantCreated = true;
    }

    return (
        <>

        <ManagerTopBar userInfo={props.userInfo} logout={props.logout}/>
        
        
        <div className="menuView">
        <ManagerMainMenu toggleView={toggleView} restaurantCreated={restaurantCreated}/>
        
        {view === "mainmenu" ? <MainMenuInfo/> : null}
        {view === "restaurants" ? <CreateRestaurantComponent idUser={props.id}/> : null}
        {view === "foodmenu" ? <CreateMenuComponent idRestaurant={restaurantData.idRestaurant}/> : null} 
        {view === "controlorder" ? <ControlOrderComponent Data={restaurantData}/> : null}
        {view === "vieworders" ? <ViewOrdersComponent Data={restaurantData}/>  : null} 
        </div>
        </>
    )
}
export default ManagerPage
