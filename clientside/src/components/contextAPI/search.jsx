// import { createContext,useState,useContext} from "react";
//  const Searchcontext=createContext();
//  const SearchcontextProvider=({children})=>{
//    const [auth,setauth]=useState({
//     keyword:"",
//     results:[],
//    });
  
// return(
//     <Searchcontext.Provider value={[auth,setauth]}>
//         {children}
//     </Searchcontext.Provider>
// );  
// }
// //custom hook
// const useSearch=()=>useContext(Searchcontext);
// export {useSearch, SearchcontextProvider};
import { useState, useContext, createContext } from "react";

const SearchContext = createContext();
const SearchProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    keyword: "",
    results: [],
  });

  return (
    <SearchContext.Provider value={[auth, setAuth]}>
      {children}
    </SearchContext.Provider>
  );
};

// custom hook
const useSearch = () => useContext(SearchContext);

export { useSearch, SearchProvider };