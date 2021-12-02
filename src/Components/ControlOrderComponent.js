import React from 'react'
import "../Styles/ControlOrders.css"
import { useState,useEffect } from 'react'
import axios from 'axios'




const ControlOrderComponent = () => {

    const testOrders = [
        {
            id:1,
            FirstName:"John",
            LastName:"Doe",
            Product:"Pizza",
            Price:"10€"
            

        },
        {
            id:2,
            FirstName:"Foo",
            LastName:"Bar",
            Product:"Hamburger",
            Price:"8€"
            
        },
        {
            id:3,
            FirstName:"ASD",
            LastName:"QWE",
            Product:"Nachos",
            Price:"6€"
            
        }

    ]

    const [status,setStatus] = useState('Received')
    const [orders,setOrders] = useState([])
    
    // useEffect(() => {
    //     axios.get(`http://localhost:4000/orders/${restaurantID}`)
    //     .then(res =>{
    //         console.log(res)
    //         setOrders(res.data)
    //     })
    //     .catch(err =>{
    //         console.log(err)
    //     })
    // })

   

    

    const handleSubmit = (e) => {
        e.preventDefault();
        const orderStatus = {status};
        console.log(orderStatus);
        axios.post('http://localhost:4000/orders', status )
        .then( res => {
            console.log(res)
            clearFields(e);
            setStatus("");
        })
        .catch(error=>{
            console.log(error)
        })
        
    }
    


    function clearFields(e){
        Array.from(e.target).forEach((e) => (e.value = ""));
    }

    return (
        <>
        <div className = "OrderForm">
           <h3> Control order status</h3>
           
            <form onSubmit= {handleSubmit}>
            {testOrders.map(order =>(
               <li key = {order.id}>
                   {order.FirstName}
                   {order.Price}
                   {order.Product}
                   {status}
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
               <button> Set status </button></li>
           ))}   
           
               
           </form> 
           
        </div>
        </>
    )
}

export default ControlOrderComponent