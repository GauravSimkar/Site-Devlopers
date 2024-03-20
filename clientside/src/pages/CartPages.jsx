import { useContext,useState,useEffect } from "react";
import {Cartcontext}  from '../components/contextAPI/Cartcontext'
import Layout from "../components/layout/layout";
import { Authcontext } from "../components/contextAPI/Authcontext";
import { useNavigate } from "react-router-dom";
import DropIn from "braintree-web-drop-in-react";
import axios from 'axios';

let  CartPages=()=>{
    const navigate=useNavigate();
    const {cart,quantity,totalCost,removeFromCart}=useContext(Cartcontext);
    const [auth]=useContext(Authcontext);
    const [clientToken,setClientToken]=useState("");
    const [instance,setInstance]=useState("");
    const [loading,setLoading]=useState(false);
//get payment gateway token
const getToken=async ()=>{
    try{
    const {data}=await axios.get(`${import.meta.env.REACT_APP_API}/api/v1/product/braintree/token`);
    setClientToken(data?.clientToken)
    } catch (error){
        console.log(error);
    }
} 

useEffect(()=>{
getToken();
},[auth?.token]);

console.log(clientToken);
const handlePayment=()=>{
    
}

    return( 
    <Layout>
            <center>
    <h1 style={{color:"#04146B",['margin-top']:"2rem"}}>CartPage:({quantity})</h1>
     <div className="row">
        <div className="col-md-6 d-flex flex-wrap ml-3">
            <>
               {cart.map((p)=> (
            <div key={p.id}  className="card m-2 mb-6" style={{ width: "22rem" ,['margin']:'20px'}}>             
                    <img src={`${import.meta.env.REACT_APP_API}/api/v1/product/product-photo/${p.photo_id}`} className="card-img-top" style={{width:'22rem',height:'16rem'}} alt={p. name}/>
                   <div className="card-body mb-0">          
                        <h6 style={{['font-size']:'20px'}} className="card-title">{p.name}</h6>
                        <p className="card-text">{p.description}</p>
                        <p className="card-text">Cost:<span style={{color:"#48C11B"}}>${p.price}</span></p>
                        <button className="btn btn-danger col-md-12" onClick={()=>removeFromCart(p.id)}>Remove</button>
                   </div>
               </div>
                ))}
          </>
            </div>
            <div className="col-md-6">
            <div   className="card m-2" style={{ width: "30rem" }}>             
                   <div className="card-body">          
                        <h5 className="card-title">Order Summary</h5>
                        <p className="card-text">Total Items: {quantity}</p>
                        <p className="card-text">Total Cost:<span style={{color:"#48C11B"}}>${totalCost}</span> </p>
                   {auth?.token?
                      <button className="btn btn-warning col-md-12">Place your order</button>
                     
                           :<button className="btn btn-warning col-md-12" onClick={()=>navigate('/login',{state:'/Cartpage'})}>Please login to checkout</button>
                          
               }
                          </div>
             <div className="mt-4">
                
                <DropIn options={{
                        authorization:clientToken,
                        paypal:{
                            flow:"vault",
                        }
                        }}
                        onInstance={instance=>setInstance(instance)}
                        />

                <button className="btn btn-success mb-3 col-md-5" onClick={handlePayment}>Make payment</button>
                                   
                 </div> 
               </div>
            </div>
            </div>  
        </center>
    </Layout>
    );
}

export default CartPages;