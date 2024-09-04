import { useState, useContext} from "react"
import { Link } from "react-router-dom"
import Modal from "./Modal"
import Button from "./Button"
import WritingContext from "../utils/WritingContext"
import useRandomWord from "../utils/hooks/useRandomWord"

const Intro = () =>{
    const [showModal,setShowModal] = useState(false)
    
    const {sessionTime,setWritingTime} = useContext(WritingContext)

    const wordOfTheDay = useRandomWord
    // console.log(wordOfTheDay)

    return(
        <div className="intro-div">
        <div className="intro-info-div">
            <h1>Hearts And Quills</h1>
            <h4>Word of the day - {wordOfTheDay.toUpperCase()}</h4>
            <div className="timer-div">
                <p>Writing Session -</p>
                <div className="timer-modal">
                    {showModal && <Modal setShowModal={setShowModal} setWritingTime={setWritingTime}/>}    
                <p onClick={()=>setShowModal(!showModal)}>{sessionTime} mins</p>
                </div>
            </div>
            
            <Link to={"/playground"}>
               <Button/>
            </Link>
         
        </div>
        <div className="marquee">
            <span>Write Fast, Write Fearless: Choose Your Time, Keep the Words Coming - Pause for 10 Seconds, and Your Work Vanishes. Complete Your Session to Save and Share!</span>
            <span>Write Fast, Write Fearless: Choose Your Time, Keep the Words Coming - Pause for 10 Seconds, and Your Work Vanishes. Complete Your Session to Save and Share! </span>
          </div>
        </div>
    )
}

export default Intro