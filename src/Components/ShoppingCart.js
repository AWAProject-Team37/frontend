import React , {useState} from 'react'
import "../Styles/ShoppingCart.css"
import CartItem from './CartItem';
import ShoppingCartPayment from './ShoppingCartPayment';

const ShoppingCart = (props) => {
    const [paymentView, setPaymentView] = useState(false);
    const cartItems = props.items;
    let price = 0;
    for(let i of cartItems){
        price += i.price * i.quantity;
    }
    return (
        <div className="shoppingCartContainer">
            {paymentView ? <ShoppingCartPayment price={price} setPaymentView={setPaymentView} makeOrder={props.makeOrder}/> : 
            <>
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
                <button className="checkoutButton" onClick={() => setPaymentView(true)}>Checkout</button>
                </>}
            </>}
            
        </div>
    )
}

export default ShoppingCart
