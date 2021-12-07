import React from 'react'
import "../Styles/ManagerTopBar.css"

const ManagerTopBar = (props) => {
    return (
        <div className="topBarContainer">
            
            <div className="logo"> FoodApp</div>
            
            <button onClick={props.logout}>Logout</button>
            
            <div className="sign"> Restaurant Manager</div>
            
            
        </div>
    )
}
export default ManagerTopBar
