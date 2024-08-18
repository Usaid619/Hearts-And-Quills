import { Link } from "react-router-dom"

const Header = () =>{
    return(
        <header className="header">
            <Link to={"/"}>
               <h2 className="name">Hearts ♥ And Quills 🪶</h2>
            </Link>
         
            <ul className="cues">
                <span>Cues:</span>
                <p>Sight</p>
                <p>Smell</p>
                <p>Sound</p>
                <p>Taste</p>
                <p>Touch</p>
            </ul>
        </header>
    )
}

export default Header