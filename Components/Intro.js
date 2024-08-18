import { Link } from "react-router-dom"

const Intro = () =>{
    return(
        <div className="intro-div">
        <div className="intro-info-div">
            <h1>Hearts And Quills</h1>
            <h4>Word of the day - Book</h4>
            <div className="timer-div">
                <p>Writing Session -</p>
                <input type="number"/>
                </div>
            
            <Link to={"/playground"}>
               <button>Start Writing</button>
            </Link>
         
        </div>
        <p>description</p>
        </div>
    )
}

export default Intro