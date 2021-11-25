import React from 'react'
import RestaurantComponent from './RestaurantComponent'
const RestaurantList = (props) => {
    return (
        <div>
            <h1>Restaurants:</h1>
            <div className="restaurantList">
                {props.restaurants.map(item => <RestaurantComponent {...item} key={item.idRestaurant}/>)}
            </div>
            
        </div>
    )
}

export default RestaurantList
