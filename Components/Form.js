import Button from "./Button"
import useValidate from "../utils/hooks/useValidate"
import { useRef, useState } from "react"
import { auth } from "../utils/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"

const Form = ({isSignUpForm}) =>{
    const mail = useRef(null)
    const password = useRef(null)
    const username = useRef(null)

    const [errorMessage, setErrorMessage] = useState(null)
    const navigate = useNavigate()

    const handleSignUp = () =>{
        
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
          const {email,uid,displayName,photoUrl} = user

          // update profile
        // route
          // navigate("/intro")
          })
          .catch((err)=>{
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
            <form onSubmit={(e) =>e.preventDefault() } className="sign-up-form">
                <h2>Welcome Back!</h2>
                <p>The faster you fill up the faster you get a ticket.</p>

                {isSignUpForm && (
                    <>
                    <label htmlFor="username">Username</label>
                <input ref={username} id="username" placeholder="Enter Your Name"/>
                </>)
                }
               

                <label htmlFor="mail">Email</label>
                <input ref={mail} id="mail" placeholder="Enter Your email"/>

                <label htmlFor="password">Enter Password</label>
                <input type="text" ref={password} id="password" placeholder="Enter Password"/>

                <p className="errorMessage">{errorMessage}</p>

                <Button text={"Sign In"} onClick={handleSignUp} className={"sign-btn"}/>
            </form>
    )
}

export default Form