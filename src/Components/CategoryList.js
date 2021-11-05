import React from 'react'
import CategoryComponent from './CategoryComponent'
const CategoryList = () => {
    let categories=[{
        id: 1,
        category: "Hamburger",
        image: "https://i.imgur.com/pbxkmeZ.png",
        alt: "hamburger"
    },{
        id: 2,
        category: "Kebab",
        image: "https://i.imgur.com/FID6fUA.png",
        alt: "kebab"
    },{
        id: 3,
        category: "Pizza",
        image: "https://i.imgur.com/H4gsLm4.png",
        alt: "pizza"
    }]
    return (
        <div>
            <h1>Category:</h1>
            <div className="categoryList">
                {categories.map(item => <CategoryComponent {...item} key={item.id}/>)}
            </div>
            
        </div>
    )
}

export default CategoryList
