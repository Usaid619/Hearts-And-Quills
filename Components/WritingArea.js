const WritingArea = () =>{
    return(
        <>
        <div className="text-area-div">
            <textarea autoFocus></textarea>
        </div>
            <progress value={70} max={100}></progress>
            </>
    )
}

export default WritingArea