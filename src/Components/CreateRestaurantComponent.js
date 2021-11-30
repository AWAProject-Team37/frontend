import React from 'react'
import "../Styles/CreateRestaurant.css"
import { useState } from 'react';
import axios from 'axios';

const CreateRestaurantComponent = () => {

    const [name, setName] = useState('')
    const [Address, setAddress] = useState('')
    const [time, setTime] = useState('')
    const [image, setImage] = useState('')
    const [type, setType] = useState('Buffet')
    const [price, setPrice] = useState('€')
    const [ isPending, setIsPending] = useState(false)

     const handleSubmit = (e) => {
        e.preventDefault();
        const restaurant = { name, Address, time, image, type, price};
        console.log(restaurant);
        setIsPending(true);       
        axios.post('http://localhost:4000/restaurants', restaurant)
        .then(() => {
        setIsPending(false);
        window.location.reload(true);
        })
     }
     
    
    return (
        <>
       
        <div className = "RestaurantForm">
            <h2>Create a restaurant</h2>
             <form onSubmit={handleSubmit}>
                 <label> Name: </label>
                 <input
                 type="text"
                 required
                 value = {name}
                 onChange={(e) => setName(e.target.value)}
                 />
                  <label> Address: </label>
                 <input
                 type="text"
                 required
                 value = {Address}
                 onChange={(e) => setAddress(e.target.value)}
                 />
                  <label> Operating hours: </label>
                 <input
                 type="text"
                 required
                 value = {time}
                 onChange={(e) => setTime(e.target.value)}
                 />
                 <label> Image: </label>
                 <input
                 type="text"
                 required
                 value = {image}
                 onChange={(e) => setImage(e.target.value)}
                 />
                  <label> Restaurant type: </label>
                    <select
                    value = {type}
                    onChange={(e) => setType(e.target.value)}
                    >
                      <option value="Buffet">Buffet</option>
                      <option value="Fastfood">Fast food</option>
                      <option value="Fastcasual">Fast casual</option>
                      <option value="Casualdining">Casual dining</option>
                      <option value="Fine dining">Fine dining</option>
                 </select>

                 <label>Price level:</label>
                   <select
                   value = {price}
                   onChange={(e) => setPrice(e.target.value)}
                   >
                     <option value="€">€</option>
                     <option value="€€">€€</option>
                     <option value="€€€">€€€</option>
                     <option value="€€€€">€€€€</option>

                 </select>

                {!isPending &&<button > Add </button>}
                {isPending &&<button disabled> Adding... </button>}

            </form>
         </div>
        
        

        
        </>
    )
}

export default CreateRestaurantComponent
