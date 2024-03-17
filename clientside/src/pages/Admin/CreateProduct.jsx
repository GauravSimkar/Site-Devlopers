import Adminmenu from "../../components/layout/Adminmenu";
import Layout from "../../components/layout/layout";
import axios from "axios";
import { toast } from "react-toastify";
import { useState,useEffect } from "react";
let CreateProduct=()=>{
   
  const [categories,setcategories]=useState([]);
  const [photo,setphoto]=useState("");
  const [price,setprice]=useState("");
  const [description,setdescription]=useState("");
  const [shippping,setshipping]=useState("");
  const [quantity,setquantity]=useState("");
  const [name,setname]=useState("");
  const [category,setcategory]=useState("");
  

  let getAllcategory=async()=>{
    try{
    const {data}=await axios.get(`${import.meta.env.REACT_APP_API}/api/v1/category/get-category`);
    console.log(data.category);
        if(data?.success){
        setcategories(data?.category);
    }
    } catch (error){
      console.log(error);
      toast.error("Something went wrong in getting category");  
    }
  }

  useEffect(()=>{
    getAllcategory();
  },[]); 


    return(
  <Layout>        
    <div className="row">
          <div className="col-md-3">
             <Adminmenu/>
          </div>
          <div className="col-md-9">
            Create Product
          <div className="m-1 w-75">
            <select placeholder="Enter category " className=" mb-3"
              /*onChange={(value)=>{setcategory(value)}}*/>
                 {
                  categories.map((c)=>{
                    <option key={c._id} value={c.name}>{c.name}</option>
                  })
                 }
              </select>
            </div>
          </div>
        </div>
    </Layout>


    );
}
export default CreateProduct;
