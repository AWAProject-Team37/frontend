import React from 'react'
import "../Styles/ControlOrders.css"
import { useState } from 'react'



const ControlOrderComponent = (props) => {

    const [status,setStatus] = useState('Received')
    const [time, setTime] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const orderStatus = {  time, status};
        console.log(orderStatus);
        clearFields(e);
    }
    


    function clearFields(e){
        Array.from(e.target).forEach((e) => (e.value = ""));
    }

    return (
        <>
        <div className = "OrderForm">
           <h3> Control order status</h3>
           
           {/* <form onSubmit= {handleSubmit}>
           
               <label> Choose status: </label>
               <select
                value = {status}
                onChange={(e) => setStatus(e.target.value)}
                 >
                <option value="Received">Received</option>
                <option value="Preparing">Preparing</option>
                <option value="ReadyForDelivery">Ready for delivery</option>
                <option value="Delivering">Delivering</option>
                <option value="Delivered">Delivered</option>

                      
               </select>
               <button> Set status </button>
           </form> */}
           
        </div>
        </>
    )
}

export default ControlOrderComponent