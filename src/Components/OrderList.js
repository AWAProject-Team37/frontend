import React from 'react'
import axios from 'axios'
import { useEffect , useState } from 'react'
import { apiAddress } from '../Constants'


const OrderList = (props) => {
  
    
    const [orderItems, setOrderItems] = useState([])
    

    useEffect(() =>{
        const getManagerItems = async () => {
            let result = await axios.get(`${apiAddress}/orders/items/${props.idOrder}`)
            setOrderItems(result.data);
            console.log(result.data);
        }
        getManagerItems();
    },[])
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const orderStatus = e.target.status.value;
        console.log(orderItems);
        
        await axios.put(`${apiAddress}/orders/status/`,{id: props.idOrder, status: orderStatus}  )
        .then( res => {
            console.log(res)
            
            
        })
        .catch(error=>{
            console.log(error)
        })
        
    }
    
console.log(orderItems);

return (

    <div className = "OrderForm">
        <div><h2> Name: </h2>{props.FirstName} {props.LastName}</div>
        <div><h2> Date:</h2>{props.Date}</div>
        <div><h2> Status:</h2>{props.Status}</div>
        <h2> Items: </h2>
        {orderItems.map(e => <div key ={e.name}>{e.Quantity}x {e.name} {e.price}€</div> )}
       
        <form onSubmit= {handleSubmit}>
        
        <label> Change status: </label>
         <select 
         name = "status">
        <option value="Received">Received</option>
                <option value="Preparing">Preparing</option>
                <option value="ReadyForDelivery">Ready for delivery</option>
                <option value="Delivering">Delivering</option>
                

                      
               </select>
               <button> Set status </button>
        
       </form>
        
    </div>
)
}

export default OrderList
