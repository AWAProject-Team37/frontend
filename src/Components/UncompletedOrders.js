import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { apiAddress } from '../Constants'

const UncompletedOrders = (props) => {
    
    const [orderItems, setOrderItems] = useState([])

    useEffect(() =>{
        const getManagerItems = async () =>{
            let result = await axios.get(`${apiAddress}/orders/items/${props.idOrder}`)
            setOrderItems(result.data);
            
        }
        getManagerItems();
    },[props.idOrder])
    
    return (

        <div className = "OrderHistory">
            <div><h2> Name: </h2>{props.FirstName} {props.LastName}</div>
            <div><h2> Date:</h2>{props.Date}</div>
            <div>
             <h2> Order items</h2>
             {orderItems.map(e => <div key ={e.name}>{e.Quantity}x {e.name} {e.price}€</div> )}
            </div> 
            
        </div>
    )
}

export default UncompletedOrders
