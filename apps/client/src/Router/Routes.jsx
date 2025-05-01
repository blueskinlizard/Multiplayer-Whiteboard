import SignUp from "../Pages/Signup"
import SharePage from "../Pages/SharePage"
import Home from "../Pages/Home"
import WhiteboardPage from "../Pages/WhiteboardPage"
const routes = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/whiteboard/:id',
        element: <WhiteboardPage />
    },
    {
        path: '/signup',
        element: <SignUp />
    },
    {
        path: '/share',
        element: <SharePage />
    }
]
export default routes