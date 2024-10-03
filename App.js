// Utilities
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

// Components
import WritingArea from "./Components/WritingArea"
import ErrorPage from "./Components/Error"
import ThankYou from "./Components/ThankYou"
import Intro from "./Components/Intro"
import LogIn from "./Components/LogIn"
import { useEffect, useState } from "react"
import WritingContext from "./utils/WritingContext"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./utils/firebase"
import { useNavigate } from "react-router-dom"

const AppLayout = () => {
    const navigate = useNavigate()
const [writingTime,setWritingTime] = useState(5)

useEffect(()=>{
 const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("signed In")

      const uid = user.uid
      console.log(user)
      navigate("/intro")
      // ...
    } else {
      // User is signed out
      // ...
      navigate("/")
    }
  })

  return () => unsubscribe()
},[])



    return (
        <WritingContext.Provider value={{sessionTime: writingTime,setWritingTime}}>
        <div className="parent">
            <Outlet/>
        </div>
        </WritingContext.Provider>
    )
}

const AppRoute = createBrowserRouter([
    {path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<LogIn/>
            },
            {
                path:"/intro",
                element:<Intro/>
            },
            {
                path:"/playground",
                element:<WritingArea/>
            },
        {
            path:"/thank-you",
            element:<ThankYou/>
        }
        ],
        errorElement:<ErrorPage/>
    }
])

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(<RouterProvider router={AppRoute}/>)