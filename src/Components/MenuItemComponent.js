import React from 'react'
import "../Styles/RestaurantPage.css"
const MenuItemComponent = (props) => {
    return (
        <div className="menuItem">
            <div>
                <h1 className="menuItemName">{props.itemName}</h1>
                <span className="menuItemPrice">{props.price}€</span>
            </div>
            <button className="addItemButton">+</button>
        </div>
    )
}

export default MenuItemComponent
