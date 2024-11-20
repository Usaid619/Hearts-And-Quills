// Utilities
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

// Components
import WritingArea from "./Components/WritingArea"
import ErrorPage from "./Components/Error"
import ThankYou from "./Components/ThankYou"
import Intro from "./Components/Intro"
import LogIn from "./Components/LogIn"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./utils/firebase"
import { useNavigate } from "react-router-dom"
import appStore from "./store/appStore"
import { Provider } from "react-redux"
import { useDispatch } from "react-redux"
import { removeLoggedUser, addLoggedUser } from "./store/slices/userSlice"

const AppLayout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

useEffect(()=>{
    // This is like a listener that gets attached when the app mounts
 const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
       // Add user to the store
       const {email,uid,displayName} = user
       dispatch(addLoggedUser({email:email,uid:uid,displayName:displayName}))
    
      navigate("/intro")
      // ...
    } else {
      // User is signed out
      dispatch(removeLoggedUser())
      // ...
      navigate("/")
    }
  })

  return () => unsubscribe()
},[])

    return (
              <div className="parent">
              <Outlet/>
              </div>
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

root.render(
    <Provider store={appStore}>
      <RouterProvider router={AppRoute}/>  
    </Provider>

)