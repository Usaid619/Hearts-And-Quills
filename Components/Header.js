import { Link } from "react-router-dom"
import Button from "./Button"
import INTRO_LOGO from "../Assets/Images/logo.png"

const Header = ({handleLogOut}) =>{
    return(
        <header>
            <Link to={"/intro"}>
            <img className="banner-img" src={INTRO_LOGO}></img>
            </Link>
            <Button onClick={handleLogOut} text={"Log Out"} className={"log-out-btn"}/>
            </header>
    )
}

export default Header