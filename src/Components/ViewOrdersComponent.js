import React from 'react'
import axios from 'axios'
import { useState , useEffect } from 'react';
import {apiAddress} from "../Constants"
import UncompletedOrders from './UncompletedOrders';


const ViewOrdersComponent = (props) => {

    const idRestaurant = props.Data.idRestaurant;
    
    const [orders,setOrders] = useState([])
   
    
     useEffect(() => {
         const getManagerOrders = async () => {
          let result = await axios.get(`${apiAddress}/orders/completed/${idRestaurant}`)
          setOrders(result.data);
         }
        getManagerOrders();
            
    },[idRestaurant])
    
    console.log(orders);
    
    return (
        <>
        
        <div className = "ViewOrdersComponent">
            <h1> Order history </h1>

             {orders.map(e => <UncompletedOrders key={e.idOrder}{...e}/>)}
            
        </div>
        </>
    )
}

export default ViewOrdersComponent
