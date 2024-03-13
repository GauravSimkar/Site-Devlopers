import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx'
import Contact from './pages/contact.jsx'
import CartPages from './pages/CartPages.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify'

const router=createBrowserRouter([
  { path:'/', element:<App/>,
    children:[
    {path:'/' , element:<Home/>,},
    {path:'/About',element:<About/>},
    {path:'/Contact',element:<Contact/>},
    {path:'/Cartpage',element:<CartPages/>},
    {path:'/privacy-policy',element:<PrivacyPolicy/>},
    {path:'*',element:<PageNotFound/>}, 
  ],},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 react-work
     <RouterProvider router={router}/>
    <App />
    <ToastContainer/> 
  </React.StrictMode>,
)
