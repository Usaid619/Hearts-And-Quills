import Button from "./Button"

const Form = ({isSignUpForm}) =>{
    const handleSignUp = () =>{
        console.log("sign logic")
        // validate details

        // authenticate / create user

        // update profile
        // route
    }
    return(
            <form className="sign-up-form">
                <h2>Welcome Back!</h2>
                <p>The faster you fill up the faster you get a ticket.</p>

                {isSignUpForm && (
                    <>
                    <label htmlFor="username">Username</label>
                <input id="username" placeholder="Enter Your Name"/>
                </>)
                }
               

                <label htmlFor="mail">Email</label>
                <input id="mail" placeholder="Enter Your email"/>

                <label htmlFor="password">Enter Password</label>
                <input id="password" placeholder="Enter Password"/>

                <Button text={"Sign In"} onClick={handleSignUp} className={"sign-btn"}/>
            </form>
    )
}

export default Form