import axios from 'axios';
import React from 'react'

const RegisterView = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        let managerStatus;
        if(event.target.AccountType.value === "Customer"){
            managerStatus = false;
        } else {
            managerStatus = true;
        }
        try{
            const result = await axios.post(`http://localhost:4000/register`, {
                FirstName: event.target.FirstName.value,
                LastName: event.target.LastName.value,
                Email: event.target.Email.value,
                Password: event.target.Password.value,
                isManager: managerStatus
            });
            
            console.log(result);
        } catch(error){
            console.log(error);
        }
        
    }
    return (
        <div className="loginForm">
            <form onSubmit={handleSubmit}>
            <p>Firstname</p>
            <input type="text" placeholder="Firstname..." className="loginFormInputField" name="FirstName"></input>
            <p>Lastname</p>
            <input type="text" placeholder="Lastname..." className="loginFormInputField" name="LastName"></input>
            <p>Email</p>
            <input type="text" placeholder="Email..." className="loginFormInputField" name="Email"></input>
            <p>Password</p>
            <input type="password" placeholder="Password..." className="loginFormInputField" name="Password"></input>
            <p>Account type</p>
            <select placeholder="Choose account type" className="loginFormInputField" name="AccountType">
                <option value="Customer">Customer</option>
                <option value="Restaurant manager">Restaurant manager</option>
            </select>
            <button className="loginFormButton">Register</button>
            </form>
        </div>
    )
}

export default RegisterView
