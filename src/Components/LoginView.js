import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import "../Styles/LoginPage.css"
const LoginView = (props) => {
    const [loginError, setLoginError] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const result = await axios.post(`http://localhost:4000/login`, null ,{
                auth: {
                    username: event.target.email.value,
                    password: event.target.password.value
                }
            });
            const jwt = result.data.jwt;
            setLoginError(false);
            props.getJwt(jwt);
            navigate("/foodapp");
        } catch(error) {
            setLoginError(true); 
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
                <button className="loginFormButton" type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginView
