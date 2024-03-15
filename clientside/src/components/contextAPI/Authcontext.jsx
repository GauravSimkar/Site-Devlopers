import { createContext,useEffect,useState} from "react";
import axios from "axios";
export const Authcontext=createContext({
   user:null,
   token:""
});

const AuthcontextProvider=({children})=>{
   const [auth,setauth]=useState(Authcontext);
   axios.defaults.headers.common["Authorization"]=auth?.token;
   useEffect(()=>{
     const data=JSON.parse(localStorage.getItem('auth'));
     if(data){
     setauth({...auth,
        user:data.user,
        token:data.token
     });
     //eslint-disable-next-line
    }},[]);
return(
    <Authcontext.Provider value={[auth,setauth]}>
        {children}
    </Authcontext.Provider>
);  
}

export default AuthcontextProvider;