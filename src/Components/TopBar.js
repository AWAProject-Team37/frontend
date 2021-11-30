import React from 'react'
import "../Styles/TopBar.css"
const TopBar = (props) => {
    return (
        <div className="topBarContainer">
            <div className="logo">FoodApp</div>
            <span className="welcomeText">Welcome {props.name}</span>
        </div>
    )
}

export default TopBar
