 import React from 'react'
 import { useSearch } from '../contextAPI/search'
// import { set } from 'mongoose';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Searchinput = () => {
  
     const [values,setvalues]=useSearch();
     const navigate=useNavigate();



     const handleonsubmit=async (e)=>{
      e.preventDefault();
      console.log('i am here')
  // e.preventdefault();
    console.log(e);
   
     try{
     const {data}= await axios.get(`${import.meta.env.REACT_APP_API}/api/v1/product/search/${values.keyword}`);
     console.log(data);
     setvalues({...values,results:data});
    navigate('/search');
    
     }
     
     catch(error){
        console.log(error);
     }

   };

     return(
      <div>
  <form class="d-flex" style={{['margin-right']:'150px'}} role="search" onSubmit={handleonsubmit}>
  <input className="form-control me-2" type="search"  style={{['width']:'370px'}} placeholder="Search" aria-label="Search" value={values.keyword} onChange={(e)=>setvalues({...values, keyword:e.target.value})} />
  <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
 </div>
   );
   
 };
 export default Searchinput;
 