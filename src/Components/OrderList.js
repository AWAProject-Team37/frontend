import React from 'react'
import ControlOrderComponent from './ControlOrderComponent'
import axios from 'axios'
import { useEffect , useState } from 'react'

const OrderList = () => {

    const [orders,setOrders] = useState([])
    
    useEffect(() => {
        axios.get(`http://localhost:4000/orders/${restaurantID}`)
        .then(res =>{
            console.log(res)
            setOrders(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    })

    return (
        <div>
          <ul>
           {orders.map(order =>(
               <li key = {order.id}>{order.product}</li>
           ))}   
          </ul>   
        </div>
    )
}

export default OrderList
