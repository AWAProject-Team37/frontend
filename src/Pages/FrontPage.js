import React, {useState, useEffect} from 'react'
import axios from 'axios';
import TopBar from '../Components/TopBar'
import RestaurantList from '../Components/RestaurantList'
import "../Styles/FrontPage.css"
const FrontPage = () => {
    const [searchValue, setSearchValue] = useState("");
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/restaurants").then(res => {
            setRestaurants(res.data);
        }).catch(err => console.log(err))
    },[])

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    }
    return (
        <>
        <TopBar/>
        <div className="frontPageBody">
            <input type="text" placeholder="Search for restaurant..." className="searchBar" value={searchValue} onChange={handleSearchChange}></input>
            <RestaurantList restaurants={restaurants.filter(item => item.Name.toLowerCase().includes(searchValue.toLowerCase()))}/>
        </div>
        </>
    )
}

export default FrontPage
