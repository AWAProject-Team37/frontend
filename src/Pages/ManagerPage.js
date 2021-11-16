import React, { useState } from 'react'
import ManagerTopBar from '../Components/ManagerTopBar'
import CreateRestaurantComponent from '../Components/CreateRestaurantComponent'
import "../Styles/ManagerPage.css"
import CreateMenuComponent from '../Components/CreateMenuComponent'
import ControlOrderComponent from '../Components/ControlOrderComponent'
import ViewOrdersComponent from '../Components/ViewOrdersComponent'
import ManagerMainMenu from '../Components/ManagerMainMenu'

 const ManagerPage = () => {
     const [view, setView] = useState("");
     let toggleView = (viewMode) => {
         setView(viewMode);
     }
     console.log(view);
    return (
        <>
        <ManagerTopBar/>
        
        <ManagerMainMenu toggleView={toggleView}/>

        
        {view === "foodmenu" ? <CreateMenuComponent/> : null} 
        {view === "controlorder" ? <ControlOrderComponent/> : null}
        {view === "restaurants" ? <CreateRestaurantComponent/> : null}
        {view === "vieworders" ? <ViewOrdersComponent/> : null}
      
        </>
    )
}
export default ManagerPage
