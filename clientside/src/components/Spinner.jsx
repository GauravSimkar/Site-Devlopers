import { useEffect,useState } from "react";
import { useNavigate , useLocation } from "react-router-dom";

const Spinner=()=>{
    const [count,setcount]=useState(5);
    let navigate=useNavigate();
    let location=useLocation();
    useEffect(()=>{
        let interval=setInterval(()=>{
        let newCount=count;
        setcount(newCount-1);
        },1000);
        count===0 && navigate('/login',{
            state:location.pathname
        });
        return ()=>clearInterval(interval);
    },[count,navigate]);
    return(
        <>
           <div class="d-flex flex-column justify-content-center spinner">
             <div><h1 style={{fontSize:"30px"}}>Redirecting you in {count} seconds</h1></div>
             <div class="spinner-border" role="status" style={{width:"3rem",height:"3rem"}}>
               <span class="visually-hidden" >Loading...</span>
             </div>
           </div>
        </>
    ); 
}

export default Spinner;