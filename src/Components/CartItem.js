import React from 'react'

const CartItem = (props) => {
    return (
        <div className="cartItemContainer">
            <div className="cartItemInfo">{props.item.itemName} -  {props.item.quantity} - {props.item.price}€</div>
            <div>
                <button className="addButton" onClick={() => props.onIncrease(props.index)}>+</button>
                <button className="removeButton" onClick={() => props.onDecrease(props.index)}>-</button>
            </div>
        </div>
    )
}

export default CartItem
