import { Link } from "react-router-dom"
import Button from "./Button"
import { HEADER_LOGO } from "../utils/Constants"

const Header = ({handleLogOut}) =>{
    return(
        <header>
            <Link to={"/intro"}>
            <img alt="Header logo" className="intro-logo" src={HEADER_LOGO}></img>
            </Link>
            <Button onClick={handleLogOut} text={"Log Out"} className={"log-out-btn"}/>
            </header>
    )
}

export default Header