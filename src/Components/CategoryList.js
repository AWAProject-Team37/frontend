import React from 'react'
import CategoryComponent from './CategoryComponent'
const CategoryList = () => {
    let categories=[{
        category: "Hamburger",
        image: "https://i.imgur.com/pbxkmeZ.png",
        alt: "hamburger"
    },{
        category: "Kebab",
        image: "https://i.imgur.com/FID6fUA.png",
        alt: "kebab"
    },{
        category: "Pizza",
        image: "https://i.imgur.com/H4gsLm4.png",
        alt: "pizza"
    }]
    return (
        <div>
            <h1>Category:</h1>
            <div className="categoryList">
                {categories.map(item => <CategoryComponent {...item}/>)}
            </div>
            
        </div>
    )
}

export default CategoryList
