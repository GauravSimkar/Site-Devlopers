import { createContext,useEffect,useState} from "react";

export const Authcontext=createContext({
   user:null,
   token:""
});

const AuthcontextProvider=({children})=>{
   const [auth,setauth]=useState(Authcontext);
   useEffect(()=>{
     const data=JSON.parse(localStorage.getItem('auth'));
     if(data){
     setauth({...auth,
        user:data.user,
        token:data.token
     });
    }},[]);
return(
    <Authcontext.Provider value={[auth,setauth]}>
        {children}
    </Authcontext.Provider>
);  
}

export default AuthcontextProvider;