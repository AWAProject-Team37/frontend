import React from 'react'

const CategoryComponent = (props) => {
    return (
        <div className="categoryComponent">
            <img src={props.image} alt={props.alt} className="restaurantImg"></img>
            <div className="categoryName">{props.category}</div>
        </div>
    )
}

export default CategoryComponent
