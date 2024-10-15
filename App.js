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
import { removeLoggedUser } from "./store/slices/userSlice"

const AppLayout = () => {
    // const dispatch = useDispatch()
    const navigate = useNavigate()
// const [writingTime,setWritingTime] = useState(5)

useEffect(()=>{
    // This is like a listener that ets attached when the app mounts
 const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
    //   console.log("signed In")

      const uid = user.uid
    //   console.log(user)
      navigate("/intro")
      // ...
    } else {
      // User is signed out
    //   dispatch(removeLoggedUser())
      // ...
      navigate("/")
    }
  })

  return () => unsubscribe()
},[])

    return (
        <Provider store={appStore}>
              <div className="parent">
              <Outlet/>
              </div>
        </Provider>
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