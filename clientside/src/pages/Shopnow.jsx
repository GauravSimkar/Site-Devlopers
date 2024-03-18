import { useEffect,useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Checkbox,Radio } from 'antd';
import {Prices} from '../components/prices';
import axios from "axios";
import {toast} from "react-toastify"
import Layout from '../components/layout/layout';
import {AiOutlineReload} from "react-icons/ai";
import Categories from './Categories';
import { Cartcontext } from '../components/contextAPI/Cartcontext';

const ShopNow=()=>{
  
  const {addToCart}=useContext(Cartcontext);  
  const [products,setProducts]=useState([]);
  const [categories,setCategories]=useState([]);
  const [checked,setChecked]=useState([]);
  const [radio,setRadio]=useState([]);

  const getAllCategory=async ()=>{
    try{
const {data}=await axios.get(`${import.meta.env.REACT_APP_API}/api/v1/category/get-category`);

if(data?.success){
  setCategories(data?.category);
}
    }
    catch (error){
      console.log(error);
    }
  };

  useEffect(()=>{
    getAllCategory();
  },[]);

const getAllProducts=async()=>{
  try{
    const {data}=await axios.get(`${import.meta.env.REACT_APP_API}/api/v1/product/getmyproduct`);
    setProducts(data?.products);
  } catch (error){
    console.log(error);
  }
};


//filter by category

const handleFilter=(value,id)=>{
  let all=[...checked];
  if(value){
    all.push(id);
  }else{
    all=all.filter(c=>c!==id)
  }
  setChecked(all);
}


useEffect(()=>{
  getAllProducts();
},[]);
//console.log( typeof categories);

//console.log(categories);
return(
   <Layout>
        <div className='row mt-3'>
              <div className='col-md-3'>
               <h4 className='text-center'>Filter by category</h4>
               <div className="d-flex flex-column">
                 {categories?.map((c)=>
                   <Checkbox key={c._id} onChange={(e)=> handleFilter(e.target.checked,c._id)}>
                     {c.name}
                   </Checkbox>
)}
               </div>
               <h4 className='text-center mt-4'>Filter By Price</h4> 
               <div className='d-flex flex-column'>
                   <Radio.Group onChange={e=>setRadio(e.target.value)}>
                      {Prices?.map(

                       p=>(
                         <div key={p._id}>
                           <Radio value={p.array}>{p.name}</Radio>
                         </div>
                       )
                      )}
                   </Radio.Group>
               </div>
              </div>

        <div className='col-md-9'>
          {JSON.stringify(radio,null,4)}
          <h1 className='text-center'>All Products</h1>
          <div className="d-flex flex-wrap">
              {products.map((p)=>(
                      <div className="card m-2" style={{ width: "18rem" }}>             
                      <img src={`${import.meta.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`} className="card-img-top"        alt={p. name}/>
                   <div className="card-body">          

                        <h5 className="card-title">{p.name}</h5>
                        <p className="card-text">{p.description}</p>
                        <p className="card-text">{p.price}</p>
                
                           <button tupe="button" clsssName="btn btn-success  px-4 col-md-12" 
                           onClick={()=> addToCart(p.name,p.price,p.description,p._id)}
                           >Add to Cart</button>                         
                   </div>
            </div>
            ))}
       </div>



      </div>


        </div>
 </Layout>
  
  );

}

export default ShopNow;





