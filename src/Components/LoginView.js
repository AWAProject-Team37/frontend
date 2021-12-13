import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import "../Styles/LoginPage.css"
import {apiAddress} from "../Constants"
const LoginView = (props) => {
    const [loginError, setLoginError] = useState(false);
    const [loginProcessing, setloginProcessing] = useState(false);

    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        setloginProcessing(true);
        event.preventDefault();
        try{
            const result = await axios.post(`${apiAddress}/login`, null ,{
                auth: {
                    username: event.target.email.value,
                    password: event.target.password.value
                }
            });
            const jwt = result.data.jwt;
            setLoginError(false);
            props.getJwt(jwt);
            setloginProcessing(false);
            navigate("/foodapp");
        } catch(error) {
            setLoginError(true); 
            setloginProcessing(false);
     }
    }
    return (
        <div className="loginForm">
            {loginError === true ? <div style={{color: "red"}}>Invalid email or password</div> : null}
            <form onSubmit={handleSubmit}>
                <p>Email</p>
                <input type="email" placeholder="Email..." className="loginFormInputField" name="email" required="required"></input>
                <p>Password</p>
                <input type="password" placeholder="Password..." className="loginFormInputField" name="password" required="required"></input>
                {loginProcessing === false ? <button className="loginFormButton" type="submit">Login</button> : <div>Loggin in...</div>}
            </form>
        </div>
    )
}

export default LoginView
