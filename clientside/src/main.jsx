import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx';
import Register from './pages/Auth/Register.jsx'
import Login from './pages/Auth/login.jsx'
import Forgetpassword from './pages/Auth/forgetpassword.jsx'

// import Forgetpassword from './pages/Auth/forgetpassword.jsx'
//import Forgetpassword from './pages/Auth/forgetpassword.jsx'

import Aboutus from './components/Aboutus.jsx'
import Contactus from './components/Contactus.jsx'
import Dashboard from './pages/user/Dashboard.jsx'; 
import AdminDashboard from './pages/Admin/AdminDashboard.jsx';
import CartPages from './pages/CartPages.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import Error from './components/Error.jsx'
import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import GoogleMap from './components/GoogleMap.jsx';

import PrivateRouter from './components/Routes/Private.jsx';
import AdminPrivateRouter from './components/Routes/AdminPrivate.jsx';
import AdminProfile from './pages/Admin/AdmineProfile.jsx';
import CreateProduct from './pages/Admin/CreateProduct.jsx';
import CreateCategory from './pages/Admin/CreateCategory.jsx';
import Users from './pages/Admin/Users.jsx';
import Profile from './pages/user/Profile.jsx';
import Order from './pages/user/Order.jsx';

 
 import Categories from './pages/Categories.jsx'
import CategoryProduct from './pages/CategoryProduct.jsx';
import Products from './pages/Admin/Products.jsx'
import UpdateProduct from './pages/Admin/UpdateProduct.jsx'
// import 'antd/dist/reset.css'
import ShopNow from './pages/Shopnow.jsx';
import { SearchcontextProvider } from './components/contextAPI/search.jsx';


const router=createBrowserRouter([
  { path:'/', element:<App/>,
    children:[
    {path:'/' , element:<Home/>,},
    {path:'/dashboard',element:<PrivateRouter/>,children:[
    {path:"/dashboard/user" , element:<Dashboard/>},
    {path:"/dashboard/user/profile" , element:<Profile/>},
   
    {path:"/dashboard/user/order" , element:<Order/>},
    ]},
    {path:'/dashboard',element:<AdminPrivateRouter/>,children:[
    {path:"/dashboard/admin" , element:<AdminDashboard/>},
    {path:"/dashboard/admin/profile" , element:<AdminProfile/>},
    {path:"/dashboard/admin/create-product" , element:<CreateProduct/>},
    {path:"/dashboard/admin/create-category" , element:<CreateCategory/>},
    {path:"/dashboard/admin/products", element:<Products/>},
    {path:"/dashboard/admin/product/:slug", element:<UpdateProduct/>},

    {path:"/dashboard/admin/users" , element:<Users/>},
    ]},
    {path:"/shop-now" , element:<ShopNow/>},
    {path:"/Categories" , element:<Categories/>},
    {path:"/Category/:slug" , element:<CategoryProduct/>},
    {path:'/register', element:<Register/>},
    {path:'/login',element:<Login/>},
    // {path:'/forget-password',element:<Forgetpassword/>},

   {path:'/forget-password',element:<Forgetpassword/>},


   {path:'/forget-password',element:<Forgetpassword/>},

    {path:'/Aboutus',element:<Aboutus/>},
    {path:'/Contactus',element:<Contactus/>},
      {path:"/google-map",element:<GoogleMap/>
    },
    {path:'/Cartpage',element:<CartPages/>},
    {path:'/privacy-policy',element:<PrivacyPolicy/>},
    {path:'*',element:<Error/>}, 
 
  ],},
]);

const bcolor=document.getElementById('root');
bcolor.style.background= '#FAF7F0 '; 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchcontextProvider>

    
     <RouterProvider router={router}/>
        <App />
    <ToastContainer/> 
    </SearchcontextProvider>
  </React.StrictMode>,
)
