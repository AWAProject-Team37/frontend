import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {apiAddress} from '../Constants'
import OrderComponent from './OrderComponent';

const CustomerOrderHistory = (props) => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const getOrders = async () => {
            let result = await axios.get(`${apiAddress}/orders/customer/${props.userInfo.idUser}`)
            setOrders(result.data);
        }
        getOrders();
    },[props.userInfo.idUser])
    return (
        <div className="ordersContainer">
            <div className="activeOrders">
                <h1>Active orders</h1>
                {orders.filter(e => e.Status !== "Delivered").length === 0 ? "No active orders" 
                : orders.filter(e => e.Status !== "Delivered").map(e => <OrderComponent key={e.idOrder} {...e}/>)}
                
            </div>
            <div className="orderHistory">
                <h1>Order history</h1>
                {orders.filter(e => e.Status === "Delivered").length === 0 ? "Order history is empty"
                : orders.filter(e => e.Status === "Delivered").map(e => <OrderComponent key={e.idOrder} {...e}/>)}
            </div>
            
        </div>
    )
}

export default CustomerOrderHistory
