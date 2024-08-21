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
    

    useEffect(()=>{
        console.log(time + 1)
          setPercentage(time / (sessionTime * 60) * 100)
    },[time])

    const copyText = () =>{
       navigator.clipboard.writeText(text)
       alert("copied Text")
    }

    const startTimer = () =>{
        if(!timerStarted){
            setTimerStarted(true)
            let timer

            timer = setInterval(()=>{
                setTime(prev => {
                    if(prev >= sessionTime * 60){
                        clearInterval(timer)
                        setTimerStarted(false)
                        return prev
                    }
                    return prev + 1
                })
            },1000)
        }

        // console.log(time)
    }

    const handleChange = (e) =>{
        setText(e.target.value)
        startTimer()
    }
 
    return(
        <div className="text-area-div">
            <ul>
                <h3>Cues:</h3>
                <li>Sight</li>
                <li>Smell</li>
                <li>Sound</li>
                <li>Taste</li>
                <li>Touch</li>
            </ul>
            <div className="text-area-container">
            <textarea value={text} onChange={(e)=>handleChange(e)} autoFocus>
            </textarea>
            {text &&  <button className="copy-btn" onClick={()=>copyText()}>Copy</button>}
          
            </div>
            <div className="wotd-div">
            <h1>Word Of The Day</h1>
            <h2>{wordOfTheDay.toUpperCase()}</h2>
            </div>

            <div className="progress" style={{width:`${percentage}%`}}></div>
        </div>
    )
}

export default WritingArea