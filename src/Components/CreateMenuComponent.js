import React from 'react'
import "../Styles/CreateMenu.css"
import { useState } from 'react'
import axios from 'axios'





const CreateMenuComponent = (props) => {


   const handleSubmit = (e) => {
       e.preventDefault();
       const product = {name,desc,image,type,price}
       console.log(product);
       setIsPending(true);
       axios.post('http://localhost:4000/items', product)
       .then(response => {
           console.log(response)
           setIsPending(false);
           clearFields(e);
           setDesc("");
           setPrice("");
           setName("");
           setImage("");
           setType("");
       })
      
       .catch(error=>{
           console.log(error)
       })
       
   }
   function clearFields(e){
       Array.from(e.target).forEach((e) => (e.value = ""));
   }

    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState('')
    const [type, setType] = useState('')
    const [price, setPrice] = useState('')
    const [ isPending, setIsPending] = useState(false)
    return (
        <>
        
        <div className = "MenuForm">
            <h1>Create a menu</h1>
            <h1>Add products to the menu</h1>
              <form onSubmit={handleSubmit}>
              <label> Name: </label>
                 <input
                 type="text"
                 required
                 value = {name}
                 onChange={(e) => setName(e.target.value)}
                 />
                  <label> Description: </label>
                 <textarea
                 required
                 value = {desc}
                 onChange={(e) => setDesc(e.target.value)}
                 ></textarea>
                  <label> Price: </label>
                 <input
                 type="text"
                 required
                 value = {price}
                 onChange={(e) => setPrice(e.target.value)}
                 />
                 <label> Image: </label>
                 <input
                 type="text"
                 required
                 value = {image}
                 onChange={(e) => setImage(e.target.value)}
                 />
                  <label> Category: </label>
                    <input
                    type = "text"
                    required
                    value = {type}
                    onChange={(e) => setType(e.target.value)}
                    />
                      
                {!isPending &&<button > Add product</button>}
                {isPending &&<button disabled> Adding... </button>}


              </form>

        </div>
        </>
    )
}

export default CreateMenuComponent
