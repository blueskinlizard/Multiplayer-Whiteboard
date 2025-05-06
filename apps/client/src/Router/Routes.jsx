import SignUp from "../Pages/Signup"
import SharePage from "../Pages/SharePage"
import Home from "../Pages/Home"
import WhiteboardPage from "../Pages/WhiteboardPage"
import App from "../App"
const routes = [
    {
        path: '/home',
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
    },
    {
        path: '/',
        element: <App />
    }
]
export default routes