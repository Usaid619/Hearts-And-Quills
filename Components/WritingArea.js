import { useContext } from "react"
import WritingContext from "../utils/WritingContext"

const WritingArea = () =>{
    const {sessionTime} = useContext(WritingContext)

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
            <textarea autoFocus></textarea>
        </div>
    )
}

export default WritingArea