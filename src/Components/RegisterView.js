import React from 'react'

const RegisterView = () => {
    return (
        <div className="loginForm">
            <p>Email</p>
            <input type="text" placeholder="Email..." className="loginFormInputField"></input>
            <p>Password</p>
            <input type="password" placeholder="Password..." className="loginFormInputField"></input>
            <p>Confirm password</p>
            <input type="password" placeholder="Confirm password..." className="loginFormInputField"></input>
            <p>Account type</p>
            <select placeholder="Choose account type" className="loginFormInputField">
                <option value="Customer">Customer</option>
                <option value="Restaurant owner">Restaurant owner</option>
            </select>
            <button className="loginFormButton">Register</button>
        </div>
    )
}

export default RegisterView
