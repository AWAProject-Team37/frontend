import React from 'react'
import {useNavigate} from 'react-router-dom'
import "../Styles/TopBar.css"
const TopBar = (props) => {
    const navigate = useNavigate();
    return (
        <div className="topBar">
            <div className="logo">FoodApp</div>
            <span className="welcomeText">Welcome {props.userInfo.FirstName}</span>
            <div className="buttons">
                {props.userInfo.isManager === 1 ? <button onClick={() => {navigate("/manager")}}>Manager menu</button> : null}
                <button onClick={props.logout}>Logout</button>
            </div>
        </div>
    )
}

export default TopBar
