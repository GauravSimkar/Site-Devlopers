// import { toast } from "react-toastify";
// import CategoryForm from "../../components/Form/CategoryForm";
// import Adminmenu from "../../components/layout/Adminmenu";
// import { useState,useEffect } from "react";
// import axios from "axios";
// import Layout from "../../components/layout/layout";
// import Modal from 'react-bootstrap/Modal'
// //  import useCategory from "../../hooks/useCategory";
// let CreateCategory=()=>{
//     let [categories,setcategories]=useState([]);
//     let [name,setname]=useState("");
//     let [visible,setvisible]=useState(false);
//     let [selected,setselected]=useState(null);
//     let [updatename,setupdatename]=useState("");
    
//     let getAllcategory=async()=>{
//         try{
//         const {data}=await axios.get(`${import.meta.env.REACT_APP_API}/api/v1/category/get-category`);
//             if(data?.success){
//             setcategories(data.category);
//         }
//         } catch (error){
//           console.log(error);
//           toast.error("Something went wrong in getting category");  
//         }
//       }
     
        
      
//         //get cat
//         // const getcategories = async () => {
//         //   try {
//         //     const { data } = await axios.get(`${import.meta.env.REACT_APP_API}/api/v1/category/get-category`);
//         //     setcategories(data?.category);
//         //   } catch (error) {
//         //     console.log(error);
//         //   }
//         // };
      
//         useEffect(() => {
//           useCategory();
//         }, []);
      

    
      

//     let handleonSubmit=async(event)=>{
//         event.preventDefault();
//         try{
//         const {data}=await axios.post(`${import.meta.env.REACT_APP_API}/api/v1/category/create-category`,{name});
//         if(data?.success){
//             toast.success(`${name} is created`);
//             useCategory();
//             setname("");
//         }else{
//             toast.error(data.message);
//         }
//         }catch (error){
//             console.log(error);
//             toast.error("Something went wrong in input form");
//         }
//     }
//   useEffect(()=>{
//     useCategory();
//   },[]); 

  
//   let handleupdate=async(event)=>{
//     event.preventDefault();
//     try{
//         let {data}=await axios.put(`${import.meta.env.REACT_APP_API}/api/v1/category/update-category/${selected._id}`,{name:updatename});
//         if(data?.success){
//             toast.success(`${selected.name}} is updated to ${updatename}`);
//             setselected(null);
//             setupdatename("");
//             setvisible(false);
//             useCategory();
//         }else{
//             toast.error(data.message);
//         }
//     }catch (error){
//         console.log(error);
//         toast.error("Something went wrong in input form");
      
//     }
//   }

//   //Delete category
//   let handledelete=async(id,Name)=>{
//     try{
//         let {data}=await axios.delete(`${import.meta.env.REACT_APP_API}/api/v1/category/delete-category/${id}`);
//         if(data?.success){
//             toast.success(`${Name} is deleted from category`);
//             useCategory();
//         }else{
//             toast.error(data.message);
//         }
//     }catch (error){
//         console.log(error);
//         toast.error("Something went wrong in input form");
//     }
//   }

//     return(
//      <Layout>  
//     <div className="row">
//     <div className="col-md-3">
//         <Adminmenu/>
//     </div>
//     <div className="col-md-9">
//         <h1>Manage Category</h1>
//     <div className="p-3 w-50">
//       <CategoryForm handleonSubmit={handleonSubmit} value={name} setvalue={setname}/>
//     </div>
//     <div className="m-3 w-75">
//      <table class="table ">
//         <thead>
//             <tr>
//             <th scope="col">Name</th>
//             <th scope="col">Actions</th>
//             </tr>
//         </thead>
//         <tbody>
//             {categories?.map((c)=>(
//                 <>
//                 <tr>
//                     <td key={c._id}>{c.name}</td>
//                     <td>
//                         <button type="button" className="btn btn-secondary ms-2"
//                          onClick={()=>{setvisible(true);
//                                       setupdatename(c.name);
//                                       setselected(c)}}>Edit</button>
//                         <button type="button" className="btn btn-danger ms-2"
//                          onClick={()=>{handledelete(c._id)}}>Delete</button>
//                     </td>
//                     </tr>
//                     </>
//               )) }
//             </tbody>
//         </table>
//         </div>
//        <Modal onHide={()=>setvisible(false)}  visible={true}>
//         <Modal.Header closeButton>
//             <h3>Update category</h3>
//         </Modal.Header>
//         <Modal.Body>
//             <CategoryForm value={updatename} setvalue={setupdatename} handleonSubmit={handleupdate}/>
//             </Modal.Body>
//         </Modal>
//         </div>
//         </div>
//         </Layout>
//     );
                                              
//                          }
// export default CreateCategory;


import React, { useEffect, useState } from "react";
import  {toast} from 'react-toastify'
 import Layout from "../../components/layout/layout";
 import Adminmenu from "../../components/layout/Adminmenu";
import axios from "axios";
import CategoryForm from "../../components/Form/CategoryForm";
// import { Modal } from "antd";
import {Modal,ModalHeader} from "reactstrap";
const CreateCategory = () => {
 
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(num);
  const [updatedName, setUpdatedName] = useState("");
  //handle Form
  var num=selected;
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${import.meta.env.REACT_APP_API}/api/v1/category/createmycategory`, {
        name,
      });
      if (data?.success) {
        toast.success(`${name} is created`);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      // toast.error("somthing went wrong in input form");
    }
  };

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.REACT_APP_API}/api/v1/category/get-category`);
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  //update category
  const handleUpdate = async (categoryname,value) => {
    // console.log(categoryname);
    //  e.preventDefault();
    
    try {
      const { data } = await axios.put(
        `${import.meta.env.REACT_APP_API}/api/v1/category/update-category/${value}`,
        { name: categoryname }
      );
      if (data?.success) {
        toast.success(`${updatedName} is updated`);
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //delete category
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.REACT_APP_API}/api/v1/category/delete-category/${pId}`
      );
      if (data.success) {
        toast.success(`category is deleted`);

        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  
  const Updatecatogory=(value)=>{
   var categoryname= prompt('Enter Your Name?');
  //  console.log(categoryname);
    handleUpdate(categoryname,value);
  }

  return (
    <Layout title={"Dashboard - Create Category"}>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <Adminmenu />
          </div>
          <div className="col-md-9">
            <h1>Manage Category</h1>
            <div className="p-3 w-50">
              <CategoryForm
                handleSubmit={handleSubmit}
                value={name}
                setValue={setName}
              />
            </div>
            <div className="w-75">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories?.map((c) => (
                    <>
                    
                      <tr>
                        <td key={c._id}>{c.name}</td>
                        <td>
                          <button
                            className="btn btn-info"
                            onClick={() => {
                              // setVisible(true);
                                                       
                              Updatecatogory(c._id);
                              
                              //  setUpdatedName(c.name);
                              
                              // {visible&&<Modal/>}
                              
                            }}
                          >
                        Edit
                      
                           
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              handleDelete(c._id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
            {/* <Modal
              onCancel={() => setVisible(false)}
              footer={null}
              v={visible}
              >
            
              <CategoryForm
                value={updatedName}
                setValue={setUpdatedName}
                handleSubmit={handleUpdate}
              />
            </Modal> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;



