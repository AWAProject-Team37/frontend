import React from 'react'
 

const ManagerMainMenu = (props) => {
    return (
        <div className = "container">
            <button onClick={() => props.toggleView("mainmenu")} className="mainmenu"> Main menu</button>
            {props.restaurantCreated ? null :<button onClick={() => props.toggleView("restaurants")} className="button1"> Create a restaurant</button>}
            {props.restaurantCreated ? <>
                <button onClick={() => props.toggleView("foodmenu")} className="button2"> Create a menu</button> 
                <button onClick={() => props.toggleView("controlorder")} className="button3"> Control order status</button> 
                <button onClick={() => props.toggleView("vieworders")} className="button4"> View order history</button>
            </> : null}
            
        </div>    
    )
}

export default ManagerMainMenu
