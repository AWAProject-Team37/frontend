import React from 'react'
import "../Styles/CreateRestaurant.css"
import { useState } from 'react';
import axios from 'axios';
import {apiAddress} from "../Constants"

const CreateRestaurantComponent = (props) => {
    const [errorMsg, setErrorMsg] = useState(null);
    const [name, setName] = useState('')
    const [Address, setAddress] = useState('')
    const [time, setTime] = useState('')
    const [image, setImage] = useState('')
    const [type, setType] = useState('Buffet')
    const [price, setPrice] = useState('€')
    const [isPending, setIsPending] = useState(false)

     const handleSubmit = (e) => {
        e.preventDefault();
        const config = {
          headers: {
            "Content-type": "multipart/form-data"
          }
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('Address', Address);
        formData.append('time', time);
        formData.append('image', image);
        formData.append('type', type);
        formData.append('price', price);
        formData.append('id', props.idUser);
        setIsPending(true);      
        
        axios.post(`${apiAddress}/restaurants`, formData, config)
        .then(() => {
        setIsPending(false);
        window.location.reload(true);
        }).catch(error => {
          setErrorMsg(error.response.data.msg);
          setIsPending(false);
        }
          
        )

     }
     
    
    return (
        <>
       
        <div className = "RestaurantForm">
            <h2>Create a restaurant</h2>
            {errorMsg ? <div style={{color:"red"}}>{errorMsg}</div>:null}
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
                 type="file"
                 required
                 //value = {image}
                 onChange={(e) => setImage(e.target.files[0])}
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
