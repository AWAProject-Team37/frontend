import React from 'react'
import CartTopBar from '../Components/CartTopBar'
import Cart from '../Components/Cart'
import "../Styles/ShoppingCartPage.css"

const ShoppingCart = () => {
    return (
        <>
        <CartTopBar/>
        <div>
            <Cart/>     
        </div>
        </>
    )
}

export default ShoppingCart
