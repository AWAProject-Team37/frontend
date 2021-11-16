import React, {useState} from 'react'
import MenuItemComponent from './MenuItemComponent';
import "../Styles/RestaurantPage.css"
const RestaurantMenu = (props) => {
    // Variable for filtering menuitems by category
    const  [categorySelect, setCategorySelect] = useState("");

    // Convert props object to array so can easily use map to render things
    let propsArray=[];
    for(let e in props){
        propsArray.push(props[e])
    }
    
    // Loops through menu and returns array of unique categories
    const getCategories = () => {
        let categoryNames = new Set(); // Removes duplicates
        for(let elem in props){
            categoryNames.add(props[elem]["category"]);
        }
        return Array.from(categoryNames);
    }

    const categories = getCategories();
    return (
        <div>
            <h1>Menu</h1>
            <div className="categories">
            {categories.map(e => <div key={e} onClick={() => {setCategorySelect(e)}}>{e}</div>)}
            <button onClick={() => {setCategorySelect("")}} className="showAllCategoriesButton">Show all</button>
            </div>
            <div className="menuItemsContainer">
                {propsArray.filter(e => e.category.includes(categorySelect)).map(e => <MenuItemComponent itemName={e.itemName} key={e.id} price={e.price}/>)}
            </div>
        </div>
    )
}

export default RestaurantMenu