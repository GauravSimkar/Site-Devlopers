import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx';
import Aboutus from './components/Aboutus.jsx'
import Contactus from './components/Contactus.jsx'
import CartPages from './pages/CartPages.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const router=createBrowserRouter([
  { path:'/', element:<App/>,
    children:[
    {path:'/' , element:<Home/>,},
    {path:'/Aboutus',element:<Aboutus/>},
    {path:'/Contactus',element:<Contactus/>},
    {path:'/Cartpage',element:<CartPages/>},
    {path:'/privacy-policy',element:<PrivacyPolicy/>},
    {path:'*',element:<PageNotFound/>}, 
  ],},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
    <App />
    <ToastContainer/> 
  </React.StrictMode>,
)
