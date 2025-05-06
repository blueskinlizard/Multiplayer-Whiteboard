import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import routes from "./Router/Routes.jsx"
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter(routes);
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)