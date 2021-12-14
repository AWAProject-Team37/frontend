import React from 'react'
import "../Styles/ControlOrders.css"
import { useState,useEffect } from 'react'
import axios from 'axios'
import {apiAddress} from "../Constants"
import OrderList from './OrderList'

const ControlOrderComponent = (props) => {

    const idRestaurant = props.Data.idRestaurant;
    
    const [orders,setOrders] = useState([])
     useEffect(() => {
        const getManagerOrders = async () => {
            let result = await axios.get(`${apiAddress}/orders/uncompleted/${idRestaurant}`)
            setOrders(result.data);
        }
        getManagerOrders();
    },[idRestaurant])
  
    return (
        <>
        
        <div className = "ControlOrdersComponent">
            <h1>Control orders</h1>

             {orders.map(e => <OrderList key={e.idOrder}{...e}/>)}
            
        </div>
        </>
    )
}

export default ControlOrderComponent