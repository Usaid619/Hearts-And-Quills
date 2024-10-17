const Button = ({type,onClick,text,className}) =>{
    return(
        <button type={type} onClick={onClick} className={className}>{text}</button>
    )
}

export default Button