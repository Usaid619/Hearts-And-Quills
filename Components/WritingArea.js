import { useContext, useEffect, useState } from "react"
import WritingContext from "../utils/WritingContext"
import useRandomWord from "../utils/hooks/useRandomWord"

const WritingArea = () =>{
    const wordOfTheDay = useRandomWord
    const {sessionTime} = useContext(WritingContext)
    const [isWriting,setIsWriting] = useState(false)
    const [text,setText] = useState("")

    useEffect(()=>{
        if(isWriting){
        resetTimer()
        console.log(isWriting)
        console.log(sessionTime)
        }
        
    },[isWriting])

    const resetTimer = () =>{
        console.log("timer started")
    }

    const handleStart = (e) =>{
        setIsWriting(true)
        setText(e.target.value)
        // console.log("started")
    }

    const copyText = () =>{
       navigator.clipboard.writeText(text)

       alert("copied Text")
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
            <textarea value={text} autoFocus onChange={(e)=> handleStart(e)}>
            </textarea>
            {text &&  <button className="copy-btn" onClick={()=>copyText()}>Copy</button>}
          
            </div>
            <div className="wotd-div">
            <h1>Word Of The Day</h1>
            <h2>{wordOfTheDay.toUpperCase()}</h2>
            </div>
        </div>
    )
}

export default WritingArea