import SignUp from "../Pages/Signup"
import SharePage from "../Pages/SharePage"
import Home from "../Pages/Home"
import WhiteboardPage from "../Pages/WhiteboardPage"
import App from "../App"
import CreateWhiteboard from "../Pages/CreateWhiteboard"
const routes = [
    {
        path: '/home',
        element: <Home/>
    },
    {
        path: '/whiteboard',
        //removed id for debugging, MAKE SURE TO REENEABLE /whiteboard/:id
        element: <WhiteboardPage />
    },
    {
        path: '/signup',
        element: <SignUp />
    },
    {
        path: '/share',
        element: <SharePage />
    },
    {
        path: '/',
        element: <App />
    },
    {
        path: '/create',
        element: <CreateWhiteboard />
    }
]
export default routes