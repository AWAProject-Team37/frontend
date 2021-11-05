import React from 'react'
import TopBar from '../Components/TopBar'
import RestaurantList from '../Components/RestaurantList'
import CategoryList from '../Components/CategoryList'
import "../Styles/FrontPage.css"
const FrontPage = () => {
    return (
        <>
        <TopBar/>
        <div className="frontPageBody">
            <input type="text" placeholder="Search for restaurant..." className="searchBar"></input>
            <RestaurantList/>
            <CategoryList/>
        </div>
        </>
    )
}

export default FrontPage
