import { useEffect,useContext,useState } from "react"
import { Authcontext } from "../contextAPI/Authcontext"
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from '../Spinner.jsx'
const PrivateRouter=()=>{
   const [ok,setok]=useState(false);
   let [auth,setauth]=useContext(Authcontext);
   useEffect(()=>{
     const authcheck=async()=>{
     const res=await axios.get(`${import.meta.env.REACT_APP_API}/api/v1/auth/user-auth`);

     console.log(res.data);
     if(res.data.ok){
       console.log(`we are in${res.data.ok}`);
        setok(true);
     }else{
      console.log(`we are in else ${res.data.ok}`);
        setok(false);
     }
     };
     if(auth?.token) authcheck();
   },[auth?.token]);
   return(
      <>
      {ok? <Outlet/>:<Spinner path={""}/>}
      </> 
      );

}

export default PrivateRouter;