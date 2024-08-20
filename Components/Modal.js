const Modal = ({setSessionTime,setShowModal}) =>{
   const handleClick = (para) =>{
   setSessionTime(para)
   setShowModal(false)
   }
    
    return(
        <div>
            <span onClick={()=>handleClick(5)}>5 mins</span>
            <span onClick={()=>handleClick(10)}>10 mins</span>
            <span onClick={()=>handleClick(15)}>15 mins</span>
            <span onClick={()=>handleClick(20)}>20 mins</span>
        </div>
    )
}

export default Modal