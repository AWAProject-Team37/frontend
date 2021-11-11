import React, {useState} from 'react'
import TopBar from '../Components/TopBar'
import RestaurantList from '../Components/RestaurantList'
import CategoryList from '../Components/CategoryList'
import "../Styles/FrontPage.css"
const FrontPage = () => {
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
        id: 5,
        name: "Pizzeria 2",
        address: "street123",
        operatingHours: "14-22",
        category: "pizza",
        priceLevel: "€€€",
        deliveryTime: "50 min",
        image: "https://i.imgur.com/3QLMUkZ.png",
        alt: "pizza"
    }]
    const [searchValue, setSearchValue] = useState("");

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    }
    
    return (
        <>
        <TopBar/>
        <div className="frontPageBody">
            <input type="text" placeholder="Search for restaurant..." className="searchBar" value={searchValue} onChange={handleSearchChange}></input>
            <RestaurantList testData={testData.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))}/>
            <CategoryList/>
        </div>
        </>
    )
}

export default FrontPage
