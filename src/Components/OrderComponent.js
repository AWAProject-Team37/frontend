import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {apiAddress} from '../Constants'
const OrderComponent = (props) => {
    const [orderItems, setOrderItems] = useState([])
    const confirmDelivery = async () => {
        await axios.put(`${apiAddress}/orders/status`, {status: "Delivered", id: props.idOrder}).then(res => {
            window.location.reload(false)});
    }
    const calculateTotalPrice = () => {
        let price = 0 ;
        orderItems.forEach(e => {
            price += e.price * e.Quantity;
        })
        return price;
    }
    const getEta = (status) => {
        let eta;
        
        switch(status){
            case "Received":
                eta = 60;
                break;
            case "Preparing":
                eta = 50;
                break;
            case "Ready for delivery":
                eta = 20;
                break;
            case "Delivering":
                eta = 10;
                break;
            default:
                eta = 0;
                break;
        }
        return eta;
    }
    const deliveryEta = getEta(props.Status);
    const totalPrice = calculateTotalPrice();
    
    useEffect(() => {
        const getItems = async () => {
            let result = await axios.get(`${apiAddress}/orders/items/${props.idOrder}`)
            setOrderItems(result.data);
        }
        getItems();
    },[props.idOrder])
    return (
        <div className="orderElement">
            <div>
                <h3>Order id:</h3> {props.idOrder}
            </div>
            <div>
                <h3>Order status:</h3> 
                <b>Date:</b> {props.Date} <br/>
                <b>Status:</b> {props.Status}<br/> 
                <b>ETA:</b> {deliveryEta} mins
            </div>
            <div>
                <h3>Order Items</h3>
                {orderItems.map(e => <div key={e.name}>{e.Quantity}x {e.name} {e.price}€</div>)}
                <h4>Total price: {totalPrice}€</h4>
            </div>
            {props.Status === "Delivering" ? <button className="confirmButton" onClick={confirmDelivery}>Confirm delivery</button> : null}
        </div>
    )
}

export default OrderComponent
