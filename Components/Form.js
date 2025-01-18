import Button from "./Button"
import useValidate from "../utils/hooks/useValidate"
import { useRef, useState } from "react"
import { auth } from "../utils/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { addLoggedUser } from "../store/slices/userSlice"
import { useDispatch } from "react-redux"
import { HIDE_PASSWORD_LOGO } from "../utils/Constants"

const Form = ({handleSignUp, handleLogIn, isSignUpForm}) =>{
    const dispatch = useDispatch()

    const mail = useRef(null)
    const password = useRef(null)
    const username = useRef(null)

    const [errorMessage, setErrorMessage] = useState(null)

    const handleFormSubmit = (e) =>{
      e.preventDefault()

           // validate details
           const validationError = useValidate(mail.current.value,password.current.value)

           if(validationError){
            setErrorMessage(validationError)
            return
          } else{
            setErrorMessage(null)
          }

        // SIGN IN LOGIC
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
                 // Add user to the store
                 const {email,uid,displayName} = user
                 dispatch(addLoggedUser({email:email,uid:uid,displayName:displayName}))
                //  console.log(user)
                 }).catch((error) => {
                 
                 console.log(error)
                 
                 })
                 })
                 .catch((error)=>{
                  handleAuthError(error)
                 })
          } else{
                   // signInLogic
               signInWithEmailAndPassword(auth,mail.current.value,password.current.value)
               .then((userCred)=>{
               const user = userCred.user
               })
               .catch((error)=>{
                handleAuthError(error)
               })
          }  
    }

    const handleAuthError = (error) =>{
      let message = ""

      switch(error.code){
        // Errors when creating an account
        case "auth/email-already-in-use" :
        message = "Email is already in use."
        break

        case "auth/invalid-credential" :
        message = "Either Email or Password is Invalid."
        break

        case "auth/weak-password" :
        message = "Password is too weak."
        break

        case "auth/operation-not-allowed" :
        message = "Email/password accounts are not enabled in the Firebase Console for the project."
        break

        // Errors when logging in
        case "auth/user-not-found" :
        message = "No such email found."
        break

        case "auth/wrong-password" :
        message = "Password is incorrect."
        break

        case "auth/user-disabled" :
        message = "User account has been disabled by an admin."
        break

        default :
        message = "An Unknown Error Ocurred."
        break
      }

    setErrorMessage(message)
    }

    return(
            <form onSubmit={handleFormSubmit} className="sign-up-form">
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
                <div className="show-on-small">
                {!isSignUpForm ?
                <p>Don't have an account? <Button onClick={handleSignUp} type={"button"} text={"Create Now."} className={"create-now"}/></p> :
                <p>Already have an account? <Button onClick={handleLogIn} type={"button"} text={"Log In."} className={"create-now"}/></p>
              }
              </div>
                
            </form>
    )
}

export default Form