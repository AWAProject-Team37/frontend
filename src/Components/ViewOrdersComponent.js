import React from 'react'
import axios from 'axios'
import { useState } from 'react';


const ViewOrdersComponent = () => {
    
    const [orders,setOrders] = useState([])

    //  useEffect(() => {
    //     axios.get(`http://localhost:4000/orders/${restaurantID}`)
    //     .then(res =>{
    //         console.log(res)
    //         setOrders(res.data)
    //     })
    //     .catch(err =>{
    //         console.log(err)
    //     })
    // })
    
    return (
        <>
        
        <div className = "ViewOrdersComponent">
            {orders.map( order=> (
                <li key={order.orderId}> 
                {order.FirstName}
                {order.LastName}
                {order.Product}
                {order.Price}
                </li>

            ))}
        </div>
        </>
    )
}

export default ViewOrdersComponent
