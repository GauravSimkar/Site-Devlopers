import { useEffect,useState,useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Checkbox,Radio } from 'antd';
import {Prices} from '../components/prices';
import axios from "axios";
// import {toast} from "react-toastify"
import Layout from '../components/layout/layout';
// import {AiOutlineReload} from "react-icons/ai";
// import Categories from './Categories';
import { Cartcontext } from '../components/contextAPI/Cartcontext';
import { FaRupeeSign } from "react-icons/fa";

const ShopNow=()=>{
  
  const {addToCart}=useContext(Cartcontext);  
  const [products,setProducts]=useState([]);
  const [categories,setCategories]=useState([]);
  const [checked,setChecked]=useState([]);
  const [radio,setRadio]=useState([]);
  const [total,setTotal]=useState(0);
  const [page,setPage]=useState(1);

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
    getTotal();
  },[]);

const getAllProducts=async()=>{
  try{
    const {data}=await axios.get(`${import.meta.env.REACT_APP_API}/api/v1/product/product-list/${page}`);
    setProducts(data?.products);
  } catch (error){
    console.log(error);
  }
};

const getTotal = async () => {
  try {
    const { data } = await axios.get(`${import.meta.env.REACT_APP_API}/api/v1/product/product-count`);
    setTotal(data?.total);
  } catch (error) {
    console.log(error);
  }
};


//filter by category

const handleFilter=(value,id)=>{
  let all=[...checked];
  if(value){
    all.push(id);
  }else{
    all=all.filter((c)=>c!==id);
  }
  setChecked(all);
};


useEffect(() => {
  if (!checked.length || !radio.length) getAllProducts();
}, [checked.length, radio.length]);


useEffect(() => {
  if (checked.length || radio.length) filterProduct();
}, [checked, radio]);

const filterProduct = async () => {
  try {
    const { data } = await axios.post(`${import.meta.env.REACT_APP_API}/api/v1/product/filter-product`,{checked,radio})
  
    setProducts(data?.products);
  } catch (error) {
    console.log(error);
  }
};

return(
   <Layout>
        <div className='row p-4 '>
              <div className='col-md-2 mt-5 filter'>
               <h4 className='text-center'>Filter by category</h4>
               <div className="d-flex flex-column">
                 {categories?.map(c=>(
                   <Checkbox key={c._id} onChange={(e)=> handleFilter(e.target.checked,c._id)}>
                     {c.name}
                   </Checkbox>
))}
               </div>
               <h4 className='text-center'>Filter By Price</h4> 
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
               <div className='d-flex flex-column'>
                <button className='btn btn-danger col-md-8 ' style={{width:"120px",height:"40px"}}
                onClick={()=>window.location.reload()}>
                  RESET FILTER
                </button>
               </div>

              </div>

         {/* <div className='col-md-9'>
          <h1 className='text-center'>All Products</h1>
          <div className="d-flex flex-wrap">
              {products.map((p)=>(
                      <div className="card m-2" style={{ width: "18rem" }}>             
                      <img src={`${import.meta.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`} className="card-img-top"        alt={p.name}/>
                   <div className="card-body">          

                        <h5 className="card-title">{p.name}</h5>
                        <p className="card-text">{p.description.substring(0,30)}</p>
                        <p className="card-text">{p.price}</p>
                
                           <button tupe="button" clsssName="btn btn-danger btn-outline-dark btn-lg px-4 col-md-10" 
                           onClick={()=> addToCart(p.name,p.price,p.description,p._id)}
                           >Add to Cart</button>                         
                   </div>
            </div>
            ))}
       </div>

      </div>  */}
         <div className='col-md-9'>
  {/* {JSON.stringify(radio,null,4)} */}
  <h1 className='text-center'>All Products</h1>
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
    {products.map((p) => (
      <div className="col m-3" key={p._id}>
        <div className="card m-2 "style={{ ['width']: "18rem",["border-radius"]:"10px",['background-color']:'#FEFCFF',['height']:"500px",['position']: 'relative'}}>
          <img src={`${import.meta.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={p.name} style={{height:"210px"}} />
          <hr style={{['border-width']:"3px",['margin-bottom']:"0px"}}/>
          <div className="card-body" style={{height:"200px"}}>
            <span style={{['font-size']:"20px",['font-weight']:"500",['display']:"-webkit-box",
            ['-webkit-line-clamp']:"2",
            ['-webkit-box-orient']:"vertical",
            ['overflow']:"hidden",['margin-bottom']:"-1px"}} 
            className="card-title">{p.name}</span>
             <p style={{['margin-bottom']:"3px",["color"]:"#008000"}} className="card-text"><FaRupeeSign />{p.price}</p>
            <p style={{['margin-bottom']:"0px",['font-weight']:"400",["font-size"]:"14px"}} className="card-text">{p.description.substring(0, 150)}</p>
          
            
            <div className="mt-auto">
      <button style={{ ['width']: "94%",['position']: 'absolute',['top']:'430px',['left']:'4px' }} type="button" className="btn btn-danger btn-outline-dark  col-sm-6" onClick={() => addToCart(p.name, p.price, p.description, p._id)}>
        Add to Cart
      </button>
    </div>
          </div>
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





