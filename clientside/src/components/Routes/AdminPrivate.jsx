import { useEffect,useContext,useState } from "react"
import { Authcontext } from "../contextAPI/Authcontext"
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from '../Spinner.jsx'
const AdminPrivateRouter=()=>{
   const [ok,setok]=useState(false);
   let [auth,setauth]=useContext(Authcontext);
   useEffect(()=>{
     const authcheck=async()=>{
     const res=await axios.get(`${import.meta.env.REACT_APP_API}/api/v1/auth/admin-auth`);
     if(res.data.ok){
        setok(true);
     }else{
        setok(false);
     }
     };
     if(auth?.token) authcheck();
   },[auth?.token]);
   return( ok? <Outlet/>:<Spinner path={""}/>);
}

export default AdminPrivateRouter;