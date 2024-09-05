import { useEffect, useState } from "react"

const useIdleTimer = (timerStarted,setTimerStarted,text,setText,sessionTime,time,setTime) =>{
    const [idleTimer,setIdleTimer] = useState(10)

    useEffect(() =>{
    let timer
    setIdleTimer(10)

    console.log("sessionTime:", sessionTime);
    console.log("time:", time);

    // Ensure multiplication is happening
    const totalSessionTime = sessionTime * 60;
    console.log("sessionTime * 60:", totalSessionTime);

    if(time === sessionTime * 60){
        console.log("time ended")
        clearInterval(timer)
    }

    if(timerStarted){
        timer = setInterval(()=>{
        setIdleTimer(prev =>{
        if(prev <=1 ){
            setText("")
            setTimerStarted(false)
            setIdleTimer(10)
            setTime(0)
            clearInterval(timer)
            return 0
        }
        return prev - 1
    })
    
    },1000)}

    return () => clearInterval(timer)
    },[timerStarted,text])

    return idleTimer
}

export default useIdleTimer