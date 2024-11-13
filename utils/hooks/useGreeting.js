const useGreeting = () =>{
    const now = new Date()
let hour = now.getHours()
let greeting

switch (true){
    case (hour >=5 && hour < 12) :
    greeting = "Rise and write"
    break
    
    case (hour >=12 && hour < 17) :
    greeting = "keep the words flowing"
    break
    
    case (hour >=17 && hour < 21) :
    greeting = "Time to unwind and create"
    break
    
    default:
    greeting = "let the late-night thoughts shine"
}

return greeting
}

export default useGreeting