import { useContext, useEffect, useState } from "react"
import WritingContext from "../utils/WritingContext"
import useRandomWord from "../utils/hooks/useRandomWord"

const WritingArea = () =>{
    const wordOfTheDay = useRandomWord
    const {sessionTime} = useContext(WritingContext)
    const [text,setText] = useState("")
    const [timerStarted,setTimerStarted] = useState(false)
    const [time, setTime] = useState(0)
    const [percentage,setPercentage] = useState(0)
    const [idleTimer,setIdleTimer] = useState(10)
    
    useEffect(()=>{
        let timer
      if(timerStarted){
        timer = setInterval(()=>{
        setTime(prev =>{
            if(prev>=sessionTime * 60){
                clearInterval(timer)
                setTimerStarted(false)
                return prev
            }
            return prev + 1
        })
        },1000)
      }

      return () => clearInterval(timer)
    },[timerStarted,sessionTime])

    useEffect(()=>{
        // console.log(sessionTime)
        console.log(idleTimer)
          setPercentage(time / (sessionTime * 60) * 100)
    },[time,sessionTime])

    useEffect(()=>{
        let idleTime
        setIdleTimer(10)

        if(time <= sessionTime * 60){
            console.log(time)
            clearInterval(idleTime)
        }
       
      if(timerStarted){
        idleTime = setInterval(()=>{
            
        setIdleTimer(prev =>{
            
            if(prev <= 1){
                setText("")
                setTimerStarted(false)
                setTime(0)
                clearInterval(idleTime)
                return "too slow"
            }
           return prev - 1
        })
        },1000)
      }

      return () => clearInterval(idleTime)
    },[timerStarted,text])

    const handleChange = (e) =>{
        setText(e.target.value)
        if(!timerStarted && e.target.value){
        setTimerStarted(true)
        }  
    }

    const copyText = () =>{
        navigator.clipboard.writeText(text)
        alert("copied Text")
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
            <h4>Word Of The Day -</h4>
            <h2>{wordOfTheDay.toUpperCase()}</h2>
            </div>
        </div>
            <p className="idle-timer" style={{color:idleTimer <= 4 ? "firebrick" : idleTimer <= 6 ? "yellow" : "black"}}>{idleTimer}</p>
            
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
            {text && !timerStarted &&  <button className="copy-btn" onClick={()=>copyText()}>Copy</button>}
            </div>
            
            <div className="progress" style={{width:`${percentage}%`}}></div>
        </div>
    )
}

export default WritingArea