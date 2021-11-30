import React, {useState} from 'react'
import LoginView from '../Components/LoginView'
import RegisterView from '../Components/RegisterView'
import "../Styles/LoginPage.css"
const LoginPage = (props) => {
    
    const [view, setView] = useState("login");

    let toggleView = (viewMode) => {
        setView(viewMode);
    }

    return (
        <div className="loginBody">
            <div className="loginContainer">
                <div className="loginPageTabsContainer">
                    <div onClick={() => toggleView("login")} className={view==="login" ? "tabButtonActive" : "tabButton"}>Login</div>
                    <div onClick={() => toggleView("register")} className={view==="register" ? "tabButtonActive" : "tabButton"}>Register</div>
                </div>
            {view === "login" ? <LoginView getJwt={props.getJwt}/> : <RegisterView/>}
            </div>
        </div>
        
    )
}

export default LoginPage
