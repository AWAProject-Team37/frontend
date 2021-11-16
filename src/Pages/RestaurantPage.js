import React, { useEffect, useState } from 'react'
import TopBar from '../Components/TopBar';
import "../Styles/RestaurantPage.css"
import RestaurantMenu from '../Components/RestaurantMenu';
const RestaurantPage = () => {

    const [restaurantData, setRestaurantData] = useState({}); // Put data from api here

    // Function to get restaurant id from url
    const getRestaurantID = () => {
        let splitUrl = window.location.pathname.split("/");
        return parseInt(splitUrl[2]);
    }
    // Store restaurant id here and use it to make api request to get correct data
    const restaurantID = getRestaurantID(); 
    console.log("restaurant id = "+restaurantID);
    useEffect(() => {
        // Make some api request and get data using restaurant id or something like that
        // Here is some test data to simulate api response
        setRestaurantData({
            restaurantName: "Pizzeria",
            restaurantAddress: "blablabla123",
            operatingHours: "0-24",
            image: "https://st.depositphotos.com/1003814/5052/i/950/depositphotos_50523105-stock-photo-pizza-with-tomatoes.jpg",
            altText: "kuva",
            restaurantType: "pizzeria",
            priceLevel: "€",
            menu: [
                {
                    itemName: "kebu pitsa",
                    prize: 11,
                    category: "pizza"
                },
                {
                    itemName: "americano",
                    prize: 9,
                    category: "pizza"
                },
                {
                    itemName: "fantasy",
                    prize: 12,
                    category: "pizza"
                },
                {
                    itemName: "karhu IV",
                    prize: 6,
                    category: "drinks"
                },
                {
                    itemName: "keburulla",
                    prize: 11,
                    category: "kebab"
                },
                {
                    itemName: "hamburger",
                    price: 8,
                    category: "hamburger"
                }
                
            ]
        })
    }, []);
    return (
        <>
        <TopBar/>
        <img src={restaurantData.image} alt={restaurantData.altText} className="restaurantHeaderImg"/>
        <div className="restaurantBody">
            
            <h1>{restaurantData.restaurantName}</h1>
            <RestaurantMenu {...restaurantData.menu}/>
        </div>
        </>
    )
}

export default RestaurantPage
