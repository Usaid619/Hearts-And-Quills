import { useState, useEffect } from "react";

const useSessionTimer = (sessionTime, timerStarted,setTimerStarted) =>{
const [time, setTime] = useState(0)
const [percentage,setPercentage] = useState(0)

useEffect(()=>{
    let timer
    if(timerStarted){
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

    return () => clearInterval(timer)
},[timerStarted,sessionTime])

useEffect(()=>{
    setPercentage((time / (sessionTime * 60)) * 100)
},[time, sessionTime])


return {time,percentage,setTime}
}

export default useSessionTimer