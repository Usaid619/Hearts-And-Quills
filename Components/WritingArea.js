import { useContext, useEffect, useState } from "react"
import WritingContext from "../utils/WritingContext"

const WritingArea = () =>{
    const {sessionTime} = useContext(WritingContext)
    const [isWriting,setIsWriting] = useState(false)

    useEffect(()=>{
        console.log(isWriting)
        console.log(sessionTime)
    },[isWriting])

    const resetTimer = () =>{
        // console.log("timer reset")
    }

    const handleStart = () =>{
        setIsWriting(true)
        resetTimer()
        // console.log("started")
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
            <textarea autoFocus onChange={()=> handleStart()}></textarea>
        </div>
    )
}

export default WritingArea