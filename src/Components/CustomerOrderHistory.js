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
    console.log(orders);
    return (
        <div>
            <h1>Active orders</h1>
            {orders.filter(e => e.Status !== "Delivered").map(e => <OrderComponent key={e.idOrder} {...e}/>)}
            <h1>Order history</h1>
            {orders.filter(e => e.Status === "Delivered").map(e => <OrderComponent key={e.idOrder} {...e}/>)}
        </div>
    )
}

export default CustomerOrderHistory
