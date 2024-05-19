 import React from 'react'
 import { useSearch } from '../contextAPI/search'
// import { set } from 'mongoose';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
 export const Searchinput = () => {
  
     const [values,setvalues]=useSearch();
    // const navigate=useNavigate();
   const handleonsubmit=async (e)=>{

     e.preventdefault()
     try{
     const {data}= await axios.get(`${import.meta.env.REACT_APP_API}/api/v1/product/search/${values.keyword}`);
     console.log(data);
     setvalues({...values,results:data});
    //  navigate('/search');
    console.log(e);
     }
     
     catch(error){
        console.log(error);
     }

   }

     return(
      <div>
  <form class="d-flex" role="search" onSubmit={handleonsubmit}>
  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={values.keyword} onChange={(e)=>setvalues({...values, keyword:e.target.value})} />
  <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
 </div>
   )
   
 };
 export default Searchinput;
 