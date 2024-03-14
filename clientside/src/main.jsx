import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx';
import Register from './pages/Auth/Register.jsx'
import Login from './pages/Auth/login.jsx'
import Aboutus from './components/Aboutus.jsx'
import Contactus from './components/Contactus.jsx'
import CartPages from './pages/CartPages.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import Error from './components/Error.jsx'
import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const router=createBrowserRouter([
  { path:'/', element:<App/>,
    children:[
    {path:'/' , element:<Home/>,},
    {path:'/register', element:<Register/>},
    {path:'/login',element:<Login/>},
    {path:'/Aboutus',element:<Aboutus/>},
    {path:'/Contactus',element:<Contactus/>},
    {path:'/Cartpage',element:<CartPages/>},
    {path:'/privacy-policy',element:<PrivacyPolicy/>},
    {path:'*',element:<Error/>}, 
  ],},
]);

const bcolor=document.getElementById('root');
bcolor.style.background='#F3E4CB ';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
    <App />
    <ToastContainer/> 
  </React.StrictMode>,
)
