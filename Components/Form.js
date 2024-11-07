import Button from "./Button"
import useValidate from "../utils/hooks/useValidate"
import { useRef, useState } from "react"
import { auth } from "../utils/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { addLoggedUser } from "../store/slices/userSlice"
import { useDispatch } from "react-redux"

const Form = ({isSignUpForm}) =>{
    const dispatch = useDispatch()

    const mail = useRef(null)
    const password = useRef(null)
    const username = useRef(null)

    const [errorMessage, setErrorMessage] = useState(null)

    const handleSubmit = (e) =>{
      e.preventDefault()

           // validate details
           const validate = useValidate(mail.current.value,password.current.value)

           if(validate){
            setErrorMessage(validate)
            return
          } else{
            setErrorMessage(null)
          }

           // console.log("sign logic")
        if(isSignUpForm){
          // authenticate / create user
       
                 createUserWithEmailAndPassword(auth,mail.current.value,password.current.value)
                 .then((userCred)=>{
                 const user = userCred.user
                 // update profile
       
                 updateProfile(user, {
                 displayName: username.current.value
                 }).then(() => {
                 // Profile updated!
                 // Add user o the store
                 const {email,uid,displayName} = user
                 dispatch(addLoggedUser({email:email,uid:uid,displayName:displayName}))
                 // console.log(user)
                 // ...
                 }).catch((error) => {
                 // An error occurred
                 console.log(error)
                 // ...
                 });
                 // console.log(user)
               // route
                 // navigate("/intro")
                 })
                 .catch((error)=>{
                   const errorCode = error.code
                   const errorMessage = error.message
                   console.log(errorCode + errorMessage)
                   setErrorMessage(errorCode + errorMessage)
                 })
               } else{
                   // signInLogic
               signInWithEmailAndPassword(auth,mail.current.value,password.current.value)
               .then((userCred)=>{
               const user = userCred.user
               // navigate("/intro")
               })
               .catch((error)=>{
                 const errorCode = error.code
                 const errorMessage = error.message
                 console.log(errorCode + errorMessage)
                 setErrorMessage(errorCode + errorMessage)
                   // console.log("lol")
               })
               }  
    }

    return(
            <form onSubmit={handleSubmit} className="sign-up-form">
                <h2>Welcome Back!</h2>
                <p>The faster you fill up the faster you get a ticket.</p>

                {isSignUpForm && (
                    <>
                    <label htmlFor="username">Username</label>
                <input required ref={username} id="username" placeholder="Enter Your Name"/>
                </>)
                }
               

                <label htmlFor="mail">Email</label>
                <input required ref={mail} id="mail" placeholder="example@gmail.com"/>

                <label htmlFor="password">Enter Password</label>
                <input required type="password" ref={password} id="password" placeholder="must be at least 6 characters"/>

                <p className="errorMessage">{errorMessage}</p>

                <Button type={"submit"} text={"Sign In"} className={"sign-btn"}/>
            </form>
    )
}

export default Form