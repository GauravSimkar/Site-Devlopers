import { createContext,useState,useContext} from "react";
 const Searchcontext=createContext();
  




const SearchcontextProvider=({children})=>{
   const [auth,setauth]=useState({
    keyword:"",
    results:[],
   });
  
return(
    <Searchcontext.Provider value={[auth,setauth]}>
        {children}
    </Searchcontext.Provider>
);  
}
//custom hook
const useSearch=()=>useContext(Searchcontext);
export {useSearch, SearchcontextProvider};
