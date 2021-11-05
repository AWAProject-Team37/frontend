import React from 'react'
import ManagerTopBar from '../Components/ManagerTopBar'
import CreateRestaurantComponent from '../Components/CreateRestaurantComponent'
import "../Styles/ManagerPage.css"
import CreateMenuComponent from '../Components/CreateMenuComponent'
import ControlOrderComponent from '../Components/ControlOrderComponent'
import ViewOrdersComponent from '../Components/ViewOrdersComponent'

const ManagerPage = () => {
    return (
        <>
        <ManagerTopBar/>
         <div className = "Container"
         Welcome to FoodApp>
             
             
           <CreateRestaurantComponent/>
           <CreateMenuComponent/>
           <ControlOrderComponent/>
           <ViewOrdersComponent/>

        </div>
        
            
        </>
    )
}
export default ManagerPage
