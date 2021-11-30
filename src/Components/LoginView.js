import React, {useState} from 'react'
import axios from 'axios'
import "../Styles/LoginPage.css"
const LoginView = () => {
    const [loginError, setLoginError] = useState(false);

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
            console.log(jwt);
        } catch(error) {
            setLoginError(true);
            console.log(error.response.data)  
     }
    }
    return (
        <div className="loginForm">
            {loginError === true ? <div style={{color: "red"}}>Invalid email or password</div> : null}
            <form onSubmit={handleSubmit}>
                <p>Email</p>
                <input type="text" placeholder="Email..." className="loginFormInputField" name="email"></input>
                <p>Password</p>
                <input type="password" placeholder="Password..." className="loginFormInputField" name="password"></input>
                <button className="loginFormButton" type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginView
