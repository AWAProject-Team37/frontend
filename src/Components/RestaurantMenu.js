import React, {useState} from 'react'
import MenuItemComponent from './MenuItemComponent';
import "../Styles/RestaurantPage.css"
const RestaurantMenu = (props) => {
    // Variable for filtering menuitems by category
    const  [categorySelect, setCategorySelect] = useState("");

    // Convert props object to array so can easily use map to render things
    let propsArray=[];
    for(let e in props.items){
        propsArray.push(props.items[e])
    }
    
    // Loops through menu and returns array of unique categories
    const getCategories = () => {
        let categoryNames = new Set(); // Removes duplicates
        for(let elem in props.items){
            categoryNames.add(props.items[elem]["Category"]);
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
                {propsArray.filter(e => e.Category.includes(categorySelect)).map(e => <MenuItemComponent idItem={e.idItem} itemName={e.Name} key={e.idItem} price={e.Price} image={e.Image} addToShoppingCart={props.addToShoppingCart}/>)}
            </div>
        </div>
    )
}

export default RestaurantMenu
