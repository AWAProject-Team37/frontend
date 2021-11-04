import React from 'react'
import "../Styles/LoginPage.css"
const LoginView = () => {
    return (
        <div className="loginForm">
            <p>Email</p>
            <input type="text" placeholder="Email..." className="loginFormInputField"></input>
            <p>Password</p>
            <input type="password" placeholder="Password..." className="loginFormInputField"></input>
            <button className="loginFormButton">Login</button>
        </div>
    )
}

export default LoginView
