import React from 'react'

const Cart = () => {

    
    return (
        <div className="cart-items">
            <div className="cart-items-header">Cart Items</div>
            <div className="cart-items-total-price"> Total price</div>
            <div className="CheckInButton">
                <button className="checkIn" onClick>Check In</button>
            </div>
        </div>
    )
}

export default Cart
