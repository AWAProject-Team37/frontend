import React from 'react'

const RestaurantMenu = (props) => {
    // Loops through menu and returns array of unique categories
    const getCategories = () => {
        let categoryNames = new Set(); // Removes duplicates
        for(let elem in props){
            categoryNames.add(props[elem]["category"]);
        }
        return Array.from(categoryNames);
    }

    const categories = getCategories();


    console.log(categories);
    
    return (
        <div>
            <h1>Menu</h1>
            <div className="categories">
            {categories.map(e => <div key={e}>{e}</div>)}
            </div>
        </div>
    )
}

export default RestaurantMenu
