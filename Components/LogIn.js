import img from "../Assets/Images/output (2).webp"
import Button from "./Button"

const LogIn = () =>{
    const handleLogIn = ()=>{
        console.log("signed In")
    }
    const handleSignUp = ()=>{
        console.log("signed up")
    }
    return(
        <div className="log-in-page-container">
        <div className="banner">
            <img className="banner-img" src={img}/>
            <div className="banner-btns">
                <Button onClick={handleLogIn} text={"LOG IN"} className={"log-sign-btn"}/>
                <Button onClick={handleSignUp} text={"SIGN UP"} className={"log-sign-btn"}/>
            </div>
        </div>
        <div className="log-in-container">

        </div>
        </div>
    )
}

export default LogIn

