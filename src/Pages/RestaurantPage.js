import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../Styles/RestaurantPage.css"
import "../Styles/ShoppingCart.css"
import RestaurantMenu from '../Components/RestaurantMenu';
import {apiAddress} from "../Constants"
import ShoppingCart from '../Components/ShoppingCart';
import { v4 as uuidv4 } from 'uuid';
const RestaurantPage = (props) => {
    const [restaurantData, setRestaurantData] = useState(null);
    const [restaurantMenu, setRestaurantMenu] = useState(null);
    const [loadingData, setLoadingData] = useState(true);
    const [loadingMenu, setLoadingMenu] = useState(true);
    const [shoppingCart, setShoppingCart] = useState([]);
    // Function to get restaurant id from url
    const getRestaurantID = () => {
        let splitUrl = window.location.pathname.split("/");
        return parseInt(splitUrl[3]);
    }
    // Store restaurant id here and use it to make api request to get correct data
    const restaurantID = getRestaurantID(); 

    const addToShoppingCart = (item) => {
        let itemIndex = shoppingCart.findIndex(e => e.itemName === item.itemName);
        if(itemIndex === -1) {
            setShoppingCart(shoppingCart => [...shoppingCart, item])
        } else {
            let arrCopy = [...shoppingCart];
            arrCopy[itemIndex].quantity += 1;
            setShoppingCart(arrCopy);
        }
    }

    const onIncrease = (index) => {
        let arrCopy = [...shoppingCart];
            arrCopy[index].quantity += 1;
            setShoppingCart(arrCopy);
    }

    const onDecrease = (index) => {
        let arrCopy = [...shoppingCart];
            arrCopy[index].quantity -= 1;
            if(arrCopy[index].quantity <= 0){
                arrCopy.splice(index, 1);
            }
            setShoppingCart(arrCopy);
    }

    const makeOrder = (address) => {
        const orderInfo = {
            idOrder: uuidv4(),
            idUser: props.userInfo.idUser,
            idRestaurant: restaurantID,
            items: shoppingCart,
            date: new Date().toString().split(/GMT/)[0].trim(),
            address: address
        }

        axios.post(`${apiAddress}/orders/new`, orderInfo).then( res => {
            setShoppingCart([]);
            alert("Order received. Thanks!")
        }).catch(error => {
            setShoppingCart([]);
            alert("Something went wrong :(")
        });
    
    }

    useEffect(() => {
        axios.get(`${apiAddress}/restaurants/${restaurantID}`).then(res => {
            setRestaurantData(res.data)
            setLoadingData(false);
        }).catch(err => console.log(err))
        axios.get(`${apiAddress}/items/${restaurantID}`).then(res => {
            setRestaurantMenu(res.data)
            setLoadingMenu(false);
        }).catch(err => console.log(err))
    },[restaurantID])
    return (
        loadingData || loadingMenu === true ? <div></div> :
        <>
        <img src={restaurantData[0].Image} alt="restaurant" className="restaurantHeaderImg"/>
        <div className="restaurantBody">
            <h1>{restaurantData[0].Name}</h1>
            <div className="menuAndCartContainer">
                <RestaurantMenu items={restaurantMenu} addToShoppingCart={addToShoppingCart}/>
                <ShoppingCart items={shoppingCart} onIncrease={onIncrease} onDecrease={onDecrease} makeOrder={makeOrder} userInfo={props.userInfo}/>
            </div>
        </div>
        </>
    )
}

export default RestaurantPage
