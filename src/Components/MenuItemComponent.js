import React from 'react'
import "../Styles/RestaurantPage.css"
const MenuItemComponent = (props) => {
    console.log(props);
    return (
        <div className="menuItem">
            <div>
                <h1 className="menuItemName">{props.itemName}</h1>
                <img src={props.image} alt="food" className="menuItemImg"/>
                <div className="menuItemPrice">{props.price}€</div>
            </div>
            <button className="addItemButton">+</button>
        </div>
    )
}

export default MenuItemComponent
