// Utilities
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

// Components
import Header from "./Components/Header"
import WritingArea from "./Components/WritingArea"
import ErrorPage from "./Components/Error"
import ThankYou from "./Components/ThankYou"
import Intro from "./Components/Intro"
import { useState } from "react"
import WritingContext from "./utils/WritingContext"

const AppLayout = () => {
const [writingTime,setWritingTime] = useState(10)

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