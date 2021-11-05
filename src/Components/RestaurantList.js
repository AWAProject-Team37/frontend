import React from 'react'
import RestaurantComponent from './RestaurantComponent'
const RestaurantList = () => {

    let testData = [{
        id: 1,
        name: "McDonalds",
        address: "street123",
        operatingHours: "09-22",
        category: "hamburger",
        priceLevel: "€€",
        deliveryTime: "20 min",
        image: "https://i.imgur.com/ItjptGC.png",
        alt: "mcdonalds"
    },{
        id: 2,
        name: "Kebula",
        address: "street123",
        operatingHours: "09-22",
        category: "kebab",
        priceLevel: "€",
        deliveryTime: "15 min",
        image: "https://i.imgur.com/TLzAJIB.png",
        alt: "kebabeläin"
    },{
        id: 3,
        name: "Hesburger",
        address: "street123",
        operatingHours: "09-22",
        category: "hamburger",
        priceLevel: "€€",
        deliveryTime: "20 min",
        image: "https://i.imgur.com/ntb6u96.png",
        alt: "hesburger"
    },{
        id: 4,
        name: "Pizzeria",
        address: "street123",
        operatingHours: "14-22",
        category: "pizza",
        priceLevel: "€€€",
        deliveryTime: "50 min",
        image: "https://i.imgur.com/3QLMUkZ.png",
        alt: "pizza"
    },{
        id: 4,
        name: "Pizzeria",
        address: "street123",
        operatingHours: "14-22",
        category: "pizza",
        priceLevel: "€€€",
        deliveryTime: "50 min",
        image: "https://i.imgur.com/3QLMUkZ.png",
        alt: "pizza"
    }]
    return (
        <div>
            <h1>Restaurants:</h1>
            <div className="restaurantList">
                {testData.map(item => <RestaurantComponent {...item} key={item.id}/>)}
            </div>
            
        </div>
    )
}

export default RestaurantList
