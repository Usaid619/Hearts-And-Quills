import { useEffect, useState } from "react";

const useIdleTimer = (timerStarted, setTimerStarted, text, setText, sessionTime, time, setTime) => {

    const [idleTimer,setIdleTimer] = useState(10)

    useEffect(()=>{
    let idleInterval

    if(time === sessionTime * 60){
            clearInterval(idleInterval)
        }
    
    setIdleTimer(10)

    if(timerStarted){
         idleInterval = setInterval(() =>{
         setIdleTimer((prev)=>{
         if(prev <= 1){
            setTimerStarted(false)
            setTime(0)
            setText("")
            clearInterval(idleInterval)
            return prev
        }

        return prev - 1
    })
    },1000)
    }

    return () =>{
        clearInterval(idleInterval)
    }

    },[timerStarted,text.length])

  return idleTimer;
};

export default useIdleTimer;
