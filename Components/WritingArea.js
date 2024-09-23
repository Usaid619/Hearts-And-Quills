import { useContext, useEffect, useState } from "react"
import WritingContext from "../utils/WritingContext"
import useRandomWord from "../utils/hooks/useRandomWord"
import useSessionTimer from "../utils/hooks/useSessionTimer"
import useIdleTimer from "../utils/hooks/useIdleTimer"

const WritingArea = () =>{
    const wordOfTheDay = useRandomWord
    const {sessionTime} = useContext(WritingContext)
    const [text,setText] = useState("")
    const [timerStarted,setTimerStarted] = useState(false)
  
    const {time,percentage,setTime} = useSessionTimer(sessionTime,timerStarted,setTimerStarted)

    const idleTimer = useIdleTimer(timerStarted,setTimerStarted,text,setText,sessionTime,time,setTime)

    const handleChange = (e) =>{
        setText(e.target.value)
        if(!timerStarted && e.target.value){
        setTimerStarted(true)
        }  
    }

    const copyText = () =>{
        navigator.clipboard.writeText(text)
        // alert("copied Text")
    }
    
    const preventSelection = (e) =>{
    e.target.selectionStart = e.target.selectionEnd
    }

    const handleKeyDown = (e) =>{
        if(e.ctrlKey){
            preventSelection(e)
        }
    }
 
    return(
        <div className="text-area-div">
            <div className="blur" style={{backdropFilter:`blur(${Math.abs(idleTimer - 10)}px)`}}></div>
            
        <div className="writing-header">
            <ul>
                <h3>Cues:</h3>
                <li>Sight</li>
                <li>Smell</li>
                <li>Sound</li>
                <li>Taste</li>
                <li>Touch</li>
            </ul>
            <div className="wotd-div">
            {/* <h4>Word Of The Day -</h4> */}
            <h2>{wordOfTheDay.toUpperCase()}</h2>
            </div>
        </div>

            <p className="idle-timer" style={{color:idleTimer <= 4 ? "firebrick" : idleTimer <= 6 ? "rgb(226, 80, 27)" : "black"}}>{idleTimer}</p>
            
            <div className="text-area-container">
            <textarea 
            readOnly={text && !timerStarted && true}
            spellCheck="false"
            placeholder="start writing here..."
            onSelect={preventSelection}
            onKeyUp={preventSelection}
            onMouseUp={preventSelection}
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            value={text}
            autoFocus>
            </textarea>
            {text && !timerStarted &&  (<button className="copy-btn" onClick={()=>copyText()}>Copy</button>)}
            </div>
            
            <div className="progress" style={{width:`${percentage}%`}}></div>
        </div>
    )
}

export default WritingArea