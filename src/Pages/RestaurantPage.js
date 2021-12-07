import React, { useEffect, useState } from 'react'
import axios from 'axios'
//import TopBar from '../Components/TopBar';
import "../Styles/RestaurantPage.css"
import RestaurantMenu from '../Components/RestaurantMenu';
import {apiAddress} from "../Constants"
import ShoppingCart from '../Components/ShoppingCart';
const RestaurantPage = () => {

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
        {/*<TopBar/>*/}
        <img src={restaurantData[0].Image} alt="restaurant" className="restaurantHeaderImg"/>
        <div className="restaurantBody">
            <h1>{restaurantData[0].Name}</h1>
            <div className="menuAndCartContainer">
                <RestaurantMenu items={restaurantMenu} addToShoppingCart={addToShoppingCart}/>
                <ShoppingCart items={shoppingCart} onIncrease={onIncrease} onDecrease={onDecrease}/>
            </div>
        </div>
        </>
    )
}

export default RestaurantPage
