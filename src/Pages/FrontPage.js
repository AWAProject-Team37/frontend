import React, {useState, useEffect} from 'react'
import axios from 'axios';
import TopBar from '../Components/TopBar'
import RestaurantList from '../Components/RestaurantList'
import jwt from 'jsonwebtoken';
import "../Styles/FrontPage.css"
const FrontPage = (props) => {
    const [searchValue, setSearchValue] = useState("");
    const [restaurants, setRestaurants] = useState([]);
    const loggedUserInfo = jwt.decode(props.userToken);
    console.log(loggedUserInfo.FirstName);

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
        <TopBar name={loggedUserInfo.FirstName}/>
        <button onClick={props.logout}>LOG OUT</button>
        <div className="frontPageBody">
            <input type="text" placeholder="Search for restaurant..." className="searchBar" value={searchValue} onChange={handleSearchChange}></input>
            <RestaurantList restaurants={restaurants.filter(item => item.Name.toLowerCase().includes(searchValue.toLowerCase()))}/>
        </div>
        </>
    )
}

export default FrontPage
