import React from 'react'
import RestaurantComponent from './RestaurantComponent'
const RestaurantList = (props) => {

    return (
        <div>
            <h1>Restaurants:</h1>
            <div className="restaurantList">
                {props.testData.map(item => <RestaurantComponent {...item} key={item.id}/>)}
            </div>
            
        </div>
    )
}

export default RestaurantList
