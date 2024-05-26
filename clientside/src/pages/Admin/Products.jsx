/*import Layout from "../../components/layout/layout";
import Adminmenu from "../../components/layout/Adminmenu";
import axios from "axios";
import { useState,useEffect } from "react";
import { toast } from "react-toastify";
import { useParams ,Link} from "react-router-dom";
const Products=()=>{
    const [products,setProducts]=useState([]);
const getAllProducts=async ()=>{
        try{
        const {data}=await axios.get(`${import.meta.env.REACT_APP_API}/api/v1/product/getmyproduct`);
        setProducts(data.products);
        } catch (error){
            console.log(error);
            toast.error("Something went ");
        }
    };

    useEffect(()=>{
        getAllProducts();
    },[]);

    return(
       <Layout>
         <div className="row">
            <div className="col-md-3">
            <Adminmenu/>
         </div>
         <div className="col-md-9 d-flex">
            <h1 className='text-center'>All Products List</h1>
        <div className="d-flex">
            {
                products.map((p)=>{
                    <Link key={p._id} to={`/dashboard/admin/product/${p.slug}`}>
                <div key={p._id} className="card m-2" style="width: 18rem;">
                    <img src={`${import.meta.env.REACT_APP_API}/api/v1/product-photo/${p._id}`} class="card-img-top" alt={p.name}/>
                    <div className="card-body">
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-text">{p.description}</p>
                      <a href="#" className="btn btn-primary"></a>
                    </div>
                  </div>
                  </Link>
                })   
            }
        </div>
         </div>
         </div>
       </Layout> 
    );
}

export default Products;
*/

// Products component

import Layout from "../../components/layout/layout";
import Adminmenu from "../../components/layout/Adminmenu";
import axios from "axios";
import { useState,useEffect } from "react";
import { toast } from "react-toastify";
import { useParams ,Link} from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";


const Products = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.REACT_APP_API}/api/v1/product/getmyproduct`);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout>
      <div className="row">
        <div className="col-md-3">
          <Adminmenu />
        </div>
        <div className="col-md-9 ">
          <h1 className='text-center'>All Products List </h1>
          <div className="d-flex flex-wrap">
            {products.map((p) => (
                         <div className="card m-2" style={{ ['width']: "18rem",["border-radius"]:"10px",['background-color']:'#FEFCFF	'}}>
                        <img src={`${import.meta.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`} className="card-img-top" 
                  style={{height:"210px"}} alt={p.name}/>
                  <hr style={{['border-width']:"3px",['margin-bottom']:"0px"}}/>

                  <div className="card-body"  style={{height:"200px"}}>
                  <span style={{['font-size']:"20px",['font-weight']:"500",['display']:"-webkit-box",
                  ['-webkit-line-clamp']:"2",
                  ['-webkit-box-orient']:"vertical",
                  ['overflow']:"hidden",
                  ['margin-bottom']:"-1px"}} 
                  className="card-title">{p.name}</span>
                  <p style={{['margin-bottom']:"3px",["color"]:"#008000"}}className="card-text"><FaRupeeSign />{p.price}</p>

                  <p style={{['margin-bottom']:"0px",["font-size"]:"14px",['font-weight']:"400"}} className="card-text">{p.description.substring(0, 150)}</p>
                  
                </div>
                </div>
                  ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;



//{/*   <Link key={p._id} to={`/dashboard/admin/product/${p.slug}`}>*/} 
