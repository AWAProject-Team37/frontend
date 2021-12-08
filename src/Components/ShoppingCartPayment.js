import React,{useState} from 'react'
import "../Styles/ShoppingCart.css"

const ShoppingCartPayment = (props) => {
    const [paymentMethod, setPaymentMethod] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault();
        props.makeOrder(event.target.address.value);
        props.setPaymentView(false);
    }
    return (
        <div className="paymentView">
            <h1>Total price: {props.price}€</h1>
            <form onSubmit={handleSubmit} className="orderForm">
            <h2>Delivery address</h2>
            <p>Address</p>
            <input type="text" required name="address"></input>
            <p>Notes to rider (e.g. doorcode)</p>
            <input type="text"></input>
            <h2>Billing info</h2>
            <p>Payment method</p>
            <select name="payment" onChange={(event) => {setPaymentMethod(event.target.value)}}>
                <option value="cash">Cash</option>
                <option value="card">Card</option>
            </select>
            {paymentMethod==="card" ? <>
            <p>Card number</p>
            <input type="text" required></input></> 
            : null}
            <button type="submit" className="orderButton">Confirm order</button>
            </form>
            <button className="cancelButton" onClick={() => {props.setPaymentView(false)}}>Cancel</button>
        </div>
    )
}

export default ShoppingCartPayment
