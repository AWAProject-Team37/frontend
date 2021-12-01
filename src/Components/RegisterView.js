import axios from 'axios';
import React, {useState} from 'react'

const RegisterView = () => {
    const [registerError, setRegisterError] = useState(false);
    const [registerSuccesfull, setRegisterSuccesfull] = useState(false);

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
            setRegisterError(false);
            setRegisterSuccesfull(true);
            setTimeout(() => {
                window.location.reload(false);
            }, 1000)
        } catch(error){
            setRegisterError(true);
            setRegisterSuccesfull(false);
        }
        
    }
    return (
        <div className="loginForm">
            {registerError === true ? <div style={{color: "red"}}>Failed to register.</div> : null}
            {registerSuccesfull === true ? <div style={{color: "green"}}>Registered</div> : null}
            <form onSubmit={handleSubmit}>
            <p>Firstname</p>
            <input type="text" placeholder="Firstname..." className="loginFormInputField" name="FirstName" required="required"></input>
            <p>Lastname</p>
            <input type="text" placeholder="Lastname..." className="loginFormInputField" name="LastName" required="required"></input>
            <p>Email</p>
            <input type="email" placeholder="Email..." className="loginFormInputField" name="Email" required="required"></input>
            <p>Password</p>
            <input type="password" placeholder="Password..." className="loginFormInputField" name="Password" required="required"></input>
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
