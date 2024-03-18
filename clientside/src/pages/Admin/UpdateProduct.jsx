import AdminMenu from "../../components/layout/Adminmenu";
import Layout from "../../components/layout/layout";
import axios from "axios";
import { toast } from "react-toastify";
import { useState,useEffect, useRef } from "react";
import { useNavigate,useParams} from "react-router-dom";
import { Select } from "antd";
const { Option } = Select;

const UpdateProduct=()=>{
    let navigate=useNavigate();
    const params = useParams();
    const [categories,setcategories]=useState([]);
    const [category,setCategory]=useState("");
    const [photo,setphoto]=useState("");
    const [name,setname]=useState("");
    const [description,setdescription]=useState("");
    const [price,setprice]=useState("");
    const [quantity,setquantity]=useState("");
    const [shipping,setshipping]=useState("");
    const [id,setid]=useState("");
    //get single product
  const getSingleProduct=async ()=>{
    try{
   // const {data}=await axios.get(`${import.meta.env.REACT_APP_API}/api/v1/product/get-product/${params.slug}`);
   const { data } = await axios.get(`${import.meta.env.REACT_APP_API}/api/v1/product/get-product-by-slug/${params.slug}`);

    console.log(data.product);
    setid(data.product._id);
    setname(data.product.name);
    setdescription(data.product.description);
    setprice(data.product.price);
    setphoto(data.product.photo)
    setquantity(data.product.quantity)
    setshipping(data.product.shipping)
    setCategory(data.product.category._id)
    }catch (error){
        console.log(error);
    }
  }

  useEffect(()=>{
    getSingleProduct();
  },[])
  
    //get all category
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
  
    useEffect(()=>{
      getAllcategory();
    },[]); 
  
    const handleUpdate=async(e)=>{
    e.preventDefault();
    try{
    const productData=new FormData();
    productData.append("name",name);
    productData.append("description",description);
    productData.append("price",price);
    productData.append("quantity",quantity);
    productData.append("photo",photo);
    productData.append("category",category);
    const {data}=axios.put(`${import.meta.env.REACT_APP_API}/api/v1/product/update-product/:${id}`,productData)
    if(data?.success){
      toast.error(data?.message);
      }else{
      toast.success("Product Updated Successfully");
      navigate("/dashboard/admin/products");
    }  
  }catch (error){
      console.log(error);
      toast.error("something went wrong");
    }
    }

//Delete Product
const handleDelete=async()=>{
  let answer=window.prompt('Are you sure you want to delete this product ?');
  if(!answer) return;
try{
    const {data}=await axios.delete(`${import.meta.env.REACT_APP_API}/api/v1/product/delete-product/${id}`)
    toast.success('Product deleted successfully');
    navigate('/dashboard/admin/products');
}catch (error){
  console.log(error);
  toast.error('something went wrong');
}
}


 return(
    <Layout>
        <div className="row">
          <div className="col-md-3">
             <AdminMenu/>
          </div>
          <div className="col-md-9">
            <hi>Update Product</hi>
             <div className="m-1 w-75">
             

             <Select
                bordered={false}
                placeholder="Select a category"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
                  setCategory(value);
                }}
                value={category}
              >
                {categories?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
     


                 
             <div className="mb-3">
                <label className="btn btn-secondary ">
                  {photo?photo.name : "Upload Photo"} 
                  <input type="file"
                         name="photo"
                         accept="image/*"
                         onChange={(e)=>setphoto(e.target.files[0])}
                         hidden/>
                </label>
              </div>

              <div className="mb-3">
                {photo ? (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(photo.data)}
                      alt="product_photo"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                ) : (
                  <div className="text-center">
                    <img
                      src={`${import.meta.env.REACT_APP_API}/api/v1/product/product-photo/${id}`}
                      alt="product_photo"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                )}
              </div>








                <div className="mb-3">
                  <input
                    type="text"
                    value={name}
                    placeholder="write a name"
                    className="form-control"
                    onChange={(e)=>setname(e.target.value)}  
                    />    
                </div>

                <div className="mb-3">
                <textarea
                  type="text"
                  value={description}
                  placeholder="write a description"
                  className="form-control"
                  onChange={(e) => setdescription(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <input
                  type="number"
                  value={price}
                  placeholder="write a Price"
                  className="form-control"
                  onChange={(e) => setprice(e.target.value)}
                />
              </div>

               <div className="mb-3">
                 <input
                   type="number"
                   value={quantity}
                   placeholder="write a quantity"
                   className="form-control"
                   onChange={(e) => setquantity(e.target.value)}
                 />
               </div>
               <div className="mb-3">
                 <select
                   bordered={false}
                   placeholder="Select Shipping "
                   size="large"
                   showSearch
                   className="form-select mb-3"
                   onChange={(value) => {
                     setshipping(value);
                   }}
                   value={shipping?"Yes":"No"}
                 >

                 <option value="0">No</option>
                   <option value="1">Yes</option>
                 </select>
               </div>
               <div className="mb-3">
                 <button className="btn btn-secondary col-md-3" onClick={handleUpdate}>
                  UPDATE PRODUCT
                 </button>
                 </div>
                 <div className="mb-3">
                 <button className="btn btn-danger col-md-3" onClick={handleDelete}>
                  DELETE PRODUCT
                 </button>
                 </div>




             </div>
           </div>
         </div>
     </Layout>
 );
 };

 export default UpdateProduct;
/*import React, { useState, useEffect } from "react";
 import Adminmenu from "../../components/layout/Adminmenu";
   import Layout from "../../components/layout/layout";
 import { toast } from "react-toastify";
import axios from "axios";
import { Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";
const { Option } = Select;

const UpdateProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState("");
  const [id, setId] = useState("");

  //get single product
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.REACT_APP_API}/api/v1/product/get-product/${params.slug}`
      );
  console.log(data);
      setName(data.product.name);
      setId(data.product._id);
      setDescription(data.product.description);
      setPrice(data.product.price);
      setPrice(data.product.price);
      setQuantity(data.product.quantity);
      setShipping(data.product.shipping);
      setCategory(data.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleProduct();
    //eslint-disable-next-line
  }, []);
  //get all category
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

  //create product function
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      photo && productData.append("photo", photo);
      productData.append("category", category);
      const { data } = axios.put(
        `${import.meta.env.REACT_APP_API}/api/v1/product/update-product/${id}`,
        productData
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Updated Successfully");
        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  //delete a product
  const handleDelete = async () => {
    try {
      let answer = window.prompt("Are You Sure want to delete this product ? ");
      if (!answer) return;
      const { data } = await axios.delete(
        `${import.meta.env.REACT_APP_API}/api/v1/product/delete-product/${id}`
        
      );
      console.log(data);
      toast.success("Product DEleted Succfully");
      navigate("/dashboard/admin/products");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Dashboard - Create Product"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <Adminmenu />
          </div>
          <div className="col-md-9">
            <h1>Update Product</h1>
            <div className="m-1 w-75">
              <Select
                bordered={false}
                placeholder="Select a category"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
                  setCategory(value);
                }}
                value={category}
              >
                {categories?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
              <div className="mb-3">
                <label className="btn btn-outline-secondary col-md-12">
                  {photo ? photo.name : "Upload Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>
              <div className="mb-3">
                {photo ? (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="product_photo"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                ) : (
                  <div className="text-center">
                    <img
                      src={`${import.meta.env.REACT_APP_API}/api/v1/product/product-photo/${id}`}
                      alt="product_photo"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  placeholder="write a name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  value={description}
                  placeholder="write a description"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <input
                  type="number"
                  value={price}
                  placeholder="write a Price"
                  className="form-control"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  value={quantity}
                  placeholder="write a quantity"
                  className="form-control"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <Select
                  bordered={false}
                  placeholder="Select Shipping "
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setShipping(value);
                  }}
                  value={shipping ? "yes" : "No"}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <div className="mb-3">
                <button className="btn btn-primary" onClick={handleUpdate}>
                  UPDATE PRODUCT
                </button>
              </div>
              <div className="mb-3">
                <button className="btn btn-danger" onClick={handleDelete}>
                  DELETE PRODUCT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UpdateProduct;

*/
