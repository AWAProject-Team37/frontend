import React from 'react'
import CustomerOrderHistory from '../Components/CustomerOrderHistory';
import TopBar from '../Components/TopBar'
import '../Styles/OrderPage.css'

const OrderPage = (props) => {
    return (
        <>
        <TopBar userInfo={props.userInfo} logout={props.logout}/>
        <CustomerOrderHistory userInfo={props.userInfo}/>
        </>

    )
}

export default OrderPage
