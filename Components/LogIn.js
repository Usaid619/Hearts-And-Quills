import { useState } from "react"
import bgImg from "../Assets/Images/bg.webp"
import logo from "../Assets/Images/logo-2-removebge.png"
import Button from "./Button"
import Form from "./Form"

const LogIn = () =>{
    const [isSignUpForm,setIsSignUpForm] = useState(false)
    const handleLogIn = ()=>{
        setIsSignUpForm(false)
        console.log("signed In")
    }
    const handleSignUp = ()=>{
        setIsSignUpForm(true)
        console.log("signed up")
    }
    return(
        <div className="log-in-page-container">
        <div className="banner">
            <img className="banner-img" src={bgImg}/>
            <div className="banner-btns">
                <Button onClick={handleLogIn} text={"LOG IN"} className={`log-sign-btn ${!isSignUpForm && "active"}`}/>
                <Button onClick={handleSignUp} text={"SIGN UP"} className={`log-sign-btn ${isSignUpForm && "active"}`}/>
            </div>
        </div>
        <div className="log-in-container">
        <div className="logo-div">
                <img className="logo" src={logo} alt="logo"/>
            </div>
        <Form isSignUpForm={isSignUpForm}/>
        </div>
        </div>
    )
}

export default LogIn

