import { useState, useContext} from "react"
import { Link } from "react-router-dom"
import Modal from "./Modal"
import Button from "./Button"
import WritingContext from "../utils/WritingContext"

const Intro = () =>{
    const [showModal,setShowModal] = useState(false)
    
    const {sessionTime,setWritingTime} = useContext(WritingContext)

    return(
        <div className="intro-div">
        <div className="intro-info-div">
            <h1>Hearts And Quills</h1>
            <h4>Word of the day - Book</h4>
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
          <p>description</p>
        </div>
        </div>
    )
}

export default Intro