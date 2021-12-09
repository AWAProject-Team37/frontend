import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {apiAddress} from '../Constants'
const OrderComponent = (props) => {
    const [orderItems, setOrderItems] = useState([])
    const confirmDelivery = async () => {
        await axios.put(`${apiAddress}/orders/${props.idOrder}`, {status: "Delivered"})
    }
    const calculateTotalPrice = () => {
        let price = 0 ;
        orderItems.forEach(e => {
            price += e.price * e.Quantity;
        })
        return price;
    }
    console.log(props)
    const getEta = (status) => {
        let eta;
        // eslint-disable-next-line default-case
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
        <div className="orderContainer">
            <div><h2>Order id:</h2> {props.idOrder}</div>
            <div><h3>Order status:</h3> {props.Status}<br/> ETA: {deliveryEta} mins</div>
            <div>
            <h4>Order Items</h4>
            {orderItems.map(e => <div key={e.name}>{e.Quantity}x {e.name} {e.price}€</div>)}
            <h4>Total price: {totalPrice}€</h4>
            </div>
            {props.Status === "Delivering" ? <button className="confirmButton">Confirm delivery</button> : null}
        </div>
    )
}

export default OrderComponent
