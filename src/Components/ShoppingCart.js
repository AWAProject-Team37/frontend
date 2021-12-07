import React from 'react'
import "../Styles/RestaurantPage.css"
import CartItem from './CartItem';

const ShoppingCart = (props) => {
    const cartItems = props.items;
    let price = 0;
    for(let i of cartItems){
        price += i.price * i.quantity;
    }
    return (
        <div className="shoppingCartContainer">
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? <div>Shopping cart is empty :(</div>
            :
            <>
            {cartItems.map((item, index) => <CartItem index={index} key={index} item={item} onIncrease={props.onIncrease} onDecrease={props.onDecrease}/>)}
            </>}
            {cartItems.length === 0 ? null : <>
            <div style={{fontWeight: "bold", fontSize: "18px"}}>
            Total price: {price}€
            </div>
            <button onClick={() => console.log(cartItems)}>Checkout</button>
            </>}
            
        </div>
    )
}

export default ShoppingCart
