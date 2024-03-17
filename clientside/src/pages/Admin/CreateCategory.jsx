import { toast } from "react-toastify";
import CategoryForm from "../../components/Form/CategoryForm";
import Adminmenu from "../../components/layout/Adminmenu";
import { useState,useEffect } from "react";
import axios from "axios";
import Layout from "../../components/layout/layout";
import Modal from 'react-bootstrap/Modal';
let CreateCategory=()=>{
    let [categories,setcategories]=useState([]);
    let [name,setname]=useState("");
    let [visible,setvisible]=useState(false);
    let [selected,setselected]=useState(null);
    let [updatename,setupdatename]=useState("");
    
    let getAllcategory=async()=>{
        try{
        const {data}=await axios.get(`${import.meta.env.REACT_APP_API}/api/v1/category/get-category`);
            if(data?.success){
            setcategories(data.category);
        }
        } catch (error){
          console.log(error);
          toast.error("Something went wrong in getting category");  
        }
      }

    let handleonSubmit=async(event)=>{
        event.preventDefault();
        try{
        const {data}=await axios.post(`${import.meta.env.REACT_APP_API}/api/v1/category/create-category`,{name});
        if(data?.success){
            toast.success(`${name} is created`);
            getAllcategory();
            setname("");
        }else{
            toast.error(data.message);
        }
        }catch (error){
            console.log(error);
            toast.error("Something went wrong in input form");
        }
    }
  useEffect(()=>{
    getAllcategory();
  },[]); 

  //update category
  let handleupdate=async(event)=>{
    event.preventDefault();
    try{
        let {data}=await axios.put(`${import.meta.env.REACT_APP_API}/api/v1/category/update-category/${selected._id}`,{name:updatename});
        if(data?.success){
            toast.success(`${selected.name}} is updated to ${updatename}`);
            setselected(null);
            setupdatename("");
            setvisible(false);
            getAllcategory();
        }else{
            toast.error(data.message);
        }
    }catch (error){
        console.log(error);
        toast.error("Something went wrong in input form");
      
    }
  }
  //Delete category
  let handledelete=async(id,Name)=>{
    try{
        let {data}=await axios.delete(`${import.meta.env.REACT_APP_API}/api/v1/category/delete-category/${id}`);
        if(data?.success){
            toast.success(`${Name} is deleted from category`);
            getAllcategory();
        }else{
            toast.error(data.message);
        }
    }catch (error){
        console.log(error);
        toast.error("Something went wrong in input form");
    }
  }

    return(
<Layout>
    <div className="row">
    <div className="col-md-3">
        <Adminmenu/>
    </div>
    <div className="col-md-9">
        <h1>Manage Category</h1>
    <div className="p-3 w-50">
      <CategoryForm handleonSubmit={handleonSubmit} value={name} setvalue={setname}/>
    </div>
    <div className="m-3 w-75">
     <table class="table ">
        <thead>
            <tr>
            <th scope="col">Name</th>
            <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            {categories.map((c)=>{
                <tr>
                    <td key={c._id}>{c.name}</td>
                    <td>
                        <button type="button" className="btn btn-secondary ms-2"
                         onClick={()=>{setvisible(true);
                                      setupdatename(c.name);
                                      setselected(c)}}>Edit</button>
                        <button type="button" className="btn btn-danger ms-2"
                         onClick={()=>handledelete(c.id,c.name)}>Delete</button>
                    </td>
                    </tr>
            })} 
            </tbody>
        </table>
        </div>
       <Modal onHide={()=>setvisible(false)}  visible={true}>
        <Modal.Header closeButton>
            <h3>Update category</h3>
        </Modal.Header>
        <Modal.Body>
            <CategoryForm value={updatename} setvalue={setupdatename} handleonSubmit={handleupdate}/>
            </Modal.Body>
        </Modal>
        </div>
        </div>
</Layout>
    );
}

export default CreateCategory;