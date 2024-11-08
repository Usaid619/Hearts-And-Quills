import { useState } from "react"
import { LOGIN_LOGO } from "../utils/Constants"
import { LOGIN_BG } from "../utils/Constants"
import Button from "./Button"
import Form from "./Form"

const LogIn = () =>{
    const [isSignUpForm,setIsSignUpForm] = useState(false)
    const handleLogIn = ()=>{
        setIsSignUpForm(false)
        // console.log("signed In")
    }
    const handleSignUp = ()=>{
        setIsSignUpForm(true)
        // console.log("signed up")
    }
    return(
        <div className="log-in-page-container">
        <div className="banner">
            <img className="banner-img" src={LOGIN_BG}/>
            <div className="banner-btns">
                <Button onClick={handleLogIn} text={"LOG IN"} className={`log-sign-btn ${!isSignUpForm && "active"}`}/>
                <Button onClick={handleSignUp} text={"SIGN UP"} className={`log-sign-btn ${isSignUpForm && "active"}`}/>
            </div>
        </div>
        <div className="log-in-container">
        <div className="logo-div">
                <img className="logo" src={LOGIN_LOGO} alt="logo"/>
            </div>
        <Form handleSignUp={handleSignUp} handleLogIn={handleLogIn} isSignUpForm={isSignUpForm}/>
        </div>
        </div>
    )
}

export default LogIn

