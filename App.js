// Utilities
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"


// Components
import Header from "./Components/Header"
import WritingArea from "./Components/WritingArea"
import ErrorPage from "./Components/Error"

const AppLayout = () => {
    return (
        <div className="parent">
            <Header/>
            <WritingArea/>
        </div>
    )
}

const AppRoute = createBrowserRouter([
    {path:"/",
        element:<AppLayout/>,
        children:[

        ],
        errorElement:<ErrorPage/>
    }
])

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(<RouterProvider router={AppRoute}/>)