import React from 'react'
import "../Styles/CreateMenu.css"
import { useState } from 'react'





const CreateMenuComponent = (props) => {


   const handleSubmit = (e) => {
       e.preventDefault();
       
   }
  

    const addProduct = () => {
        addProduct(name,desc,image,type,price);
    }

    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState('')
    const [type, setType] = useState('')
    const [price, setPrice] = useState('')
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
                    <select
                    value = {type}
                    onChange={(e) => setType(e.target.value)}
                    >
                      <option value="Pizza">Pizza</option>
                      <option value="Hamburger">Hamburger</option>
                      <option value="Kebab">Kebab</option>
                      <option value="Drinks">Drinks</option>
                      <option value="Starters">Starters</option>
                 </select>
                 <button onClick={addProduct  }> Add product </button>


              </form>

        </div>
        </>
    )
}

export default CreateMenuComponent
