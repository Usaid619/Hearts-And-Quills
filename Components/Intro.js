import { useState } from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import useGreeting from "../utils/hooks/useGreeting"
import { removeLoggedUser } from "../store/slices/userSlice"
import Modal from "./Modal"
import Button from "./Button"
import { signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { addSessionTime } from "../store/slices/configSlice"

const Intro = () =>{
    const [showModal,setShowModal] = useState(false)
    const dispatch = useDispatch()
    const sessionTime = useSelector(store => store.config.sessionTime)
    const userName = useSelector(store => store.user.displayName)

    const greeting = useGreeting()
    
    const setSessionTime = (time) =>{
        dispatch(addSessionTime(time))
    }

    const handleLogOut = () =>{
        // log out function
        signOut(auth)
        .then(()=>{
        dispatch(removeLoggedUser())
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return(
        <div className="intro-div">
            <Button onClick={handleLogOut} text={"Log Out"} className={"log-out-btn"}/>
        <div className="intro-info-div">
            <h1>Hearts And Quills</h1>
            {/* Add user's name here*/}
            <h4>{greeting} {userName ? userName : "user"}</h4>
            <div className="timer-div">
                <p>Writing Session -</p>
                <div className="timer-modal">
                    {showModal && <Modal setShowModal={setShowModal} setSessionTime={setSessionTime}/>}    
                <p onClick={()=>setShowModal(!showModal)}>{sessionTime} mins</p>
                </div>
            </div>
            
            <Link to={"/playground"}>
               <Button text={"Start Writing"} className={"start-btn"}/>
            </Link>
         
        </div>
        <div className="marquee">
            <span>Write Fast, Write Fearless: Choose Your Time, Keep the Words Coming - Pause for 10 Seconds, and Your Work Vanishes. Complete Your Session to Copy and Share!</span>
            <span>Write Fast, Write Fearless: Choose Your Time, Keep the Words Coming - Pause for 10 Seconds, and Your Work Vanishes. Complete Your Session to Save and Share! </span>
          </div>
        </div>
    )
}

export default Intro