import Adminmenu from "../../components/layout/Adminmenu";
import Layout from "../../components/layout/layout";
import axios from "axios";
import { toast } from "react-toastify";
import { useState,useEffect, useRef } from "react";
import SearchableSelect from "./SearchableSelect";
import { useNavigate,useParams} from "react-router-dom";

const UpdateProduct=()=>{
    let navigate=useNavigate();
    const [categories,setcategories]=useState([]);
    const [category,setcategory]=useState("");
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
    const {data}=await axios.get(`${import.meta.env.REACT_APP_API}/api/v1/product/get-product/${Params.slug}`);
    setid(data.product._id);
    setname(data.product.name);
    setdescription(data.product.description);
    setdescription(data.product.price)
    setdescription(data.product.quantity)
    setdescription(data.product.shipping)
    setdescription(data.product.category)
    }catch (error){
        console.log(error);
    }
  }

  useEffect(()=>{
    getSingleProduct();
  },[])
  
    //get all product
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
             <Adminmenu/>
          </div>
          <div className="col-md-9">
            Update Product
             <div className="m-1 w-75">
             
                <SearchableSelect options={categories} setcategory={setcategory} value={category}/>  
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
                {photo && (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="product-photo"
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