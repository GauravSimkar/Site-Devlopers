// import { useContext,useState,useEffect } from "react";
// import {Cartcontext}  from '../components/contextAPI/Cartcontext'
// import Layout from "../components/layout/layout";
// import { Authcontext } from "../components/contextAPI/Authcontext";
// import { useNavigate } from "react-router-dom";
// import DropIn from "braintree-web-drop-in-react";
// import axios from 'axios';

// let  CartPages=()=>{
//     const navigate=useNavigate();
//     const {renderCart,removeFromCart}=useContext(Cartcontext);
//     const [auth]=useContext(Authcontext);
//     const [clientToken,setClientToken]=useState("");
//     const [instance,setInstance]=useState("");
//     const [loading,setLoading]=useState(false);

//     const quantity=renderCart.length;
//     function totalcost(){
//       let tcost=0;
//       renderCart.forEach((item)=>{
//       tcost+=item.price;  
//     });
//     return tcost;
//     }
// //get payment gateway token
// const getToken=async ()=>{
//     try{
//     const {data}=await axios.get(`${import.meta.env.REACT_APP_API}/api/v1/product/braintree/token`);
//     setClientToken(data?.clientToken)
//     } catch (error){
//         console.log(error);
//     }
// } 

// useEffect(()=>{
// if(auth?.token)
// getToken();
// },[auth?.token]);

// console.log(clientToken);

// const handlePayment=async ()=>{
//   try{
//     // console.log("I ma here");
//     // console.log("The rendercart is",renderCart);
//     setLoading(true);
//     const {nonce}=await instance.requestPaymentMethod();
//     // console.log("The nonce is ",renderCart);
//     // console.log("i am here");
//     const {data}=await axios.post(`${import.meta.env.REACT_APP_API}/api/v1/product/braintree/payment`,{
//         nonce,
//         renderCart,
//     });
//     // console.log("I am here");
//     setLoading(false);
//     // console.log("I am here");
//     const newCart=cart.filter((cartitem)=>auth?.user&&auth?.user?.id!==cartitem.user_id);
//     localStorage.setItem('cart',JSON.stringify(newCart));
//     navigate("/dashboard/user/orders");
//     totalcost.success("Payment Completed Successfully");
//   } 
//   catch(error){
//      console.log(error);
//      setLoading(false);
//      totalcost.error('payment failed');
//   } 
// }

//     return( 
//     <Layout>
//             <center>
//     <h1 style={{color:"#04146B",['margin-top']:"2rem"}}>CartPage:({quantity})</h1>
//      <div className="row">
//         <div className="col-md-6 d-flex flex-wrap ml-3">
//             <>
//                {renderCart.map((p)=> (
//             <div key={p.id}  className="card m-2 mb-6" style={{ width: "22rem" ,['margin']:'20px'}}>             
//                     <img src={`${import.meta.env.REACT_APP_API}/api/v1/product/product-photo/${p.photo_id}`} className="card-img-top" style={{width:'22rem',height:'16rem'}} alt={p. name}/>
//                    <div className="card-body mb-0">          
//                         <h6 style={{['font-size']:'20px'}} className="card-title">{p.name}</h6>
//                         <p className="card-text">{p.description}</p>
//                         <p className="card-text">Cost:<span style={{color:"#48C11B"}}>${p.price}</span></p>
//                         <button className="btn btn-danger col-md-12" onClick={()=>removeFromCart(p.id)}>Remove</button>
//                    </div>
//                </div>
//                 ))}
//           </>
//             </div>
//             <div className="col-md-6">
//             <div   className="card m-2" style={{ width: "30rem" }}>             
//                    <div className="card-body">          
//                         <h5 className="card-title">Order Summary</h5>
//                         <p className="card-text">Total Items: {quantity}</p>
//                         <p className="card-text">Total Cost:<span style={{color:"#48C11B"}}>${totalcost()}</span> </p>
//                    {auth?.token?
//                       <button className="btn btn-warning col-md-12">Place your order</button>
                     
//                            :<button className="btn btn-warning col-md-12" onClick={()=>navigate('/login',{state:'/Cartpage'})}>Please login to checkout</button>
                          
//                }
//                           </div>
//              <div className="mt-4">
                
//                 <DropIn options={{
//                         authorization:clientToken,
//                         paypal:{
//                             flow:"vault",
//                         }
//                         }}
//                         onInstance={instance=>setInstance(instance)}
//                         />

//                 <button className="btn btn-success mb-3 col-md-5" onClick={handlePayment}
//                 disabled={!instance||loading}>{loading?"Processing...":"Make payment"}</button>
                                   
//                  </div> 
//                </div>
//             </div>
//             </div>  
//         </center>
//     </Layout>
//     );
// }

// export default CartPages;


import { useContext, useState, useEffect } from "react";
import { Cartcontext } from "../components/contextAPI/Cartcontext";
import Layout from "../components/layout/layout";
import { Authcontext } from "../components/contextAPI/Authcontext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import DropIn from 'braintree-web-drop-in-react';
import { FaRupeeSign } from "react-icons/fa";

let CartPages = () => {
  const navigate = useNavigate();
  const { cart,renderCart, removeFromCart, setCart } = useContext(Cartcontext);
  const [auth] = useContext(Authcontext);
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState(null);
  const [loading, setLoading] = useState(false);

  const quantity = renderCart.length;

  function totalCost() {
    return renderCart.reduce((acc, item) => acc + item.price, 0);
  }

  // Get payment gateway token
  const getToken = async () => {
    //console.log("I am sdfakjshfdhkas")
    try {
      //console.log("I am sdfakjshfdhkas")
      const { data } = await axios.get(
        `${import.meta.env.REACT_APP_API}/api/v1/product/braintree/token`
      );
      setClientToken(data?.clientToken);
    } catch (error) {
      console.log("Error fetching token:", error);
      toast.error("Failed to get payment token. Please try again.");
    }
  };

  useEffect(() => {
    if (auth?.token) {
      getToken();
    }
  }, [auth?.token]);

 
  //payment integration
  const handlePayment = async () => {
    try {
      //console.log("The rendercart is ",renderCart);
      setLoading(true);
      const { nonce } = await instance.requestPaymentMethod();
      //console.log("The nonce is ",renderCart);
     
      const { data } = await axios.post(`${import.meta.env.REACT_APP_API}/api/v1/product/braintree/payment`, {
        nonce,
        renderCart,
      });
      
      setLoading(false);
     
      localStorage.removeItem("cart");
      const newCart=cart.filter((cartitem)=>auth?.user&&auth?.user?.id!==cartitem.user_id);//! tha
      console.log(newCart);
      setCart(newCart);
      console.log(cart);
      console.log('imhere');
      localStorage.setItem('cart',JSON.stringify(newCart));
     
      // setRenderCart([]);
      navigate("/dashboard/user/order");
      toast.success("Payment Completed Successfully ");
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error('payment failed')
    }
  };

  return (
    <Layout>
      
      <center>
        <h1 style={{ color: "#04146B", marginTop: "2rem" }}>
          CartPage:({quantity})
        </h1>
        <div className="row">
          <div className="col-md-6 d-flex flex-wrap ml-3">
            {renderCart.map((p) => (
              // <div
              //   key={p.id}
              //   className="card m-2 mb-6"
              //   style={{ width: "22rem", margin: "20px" }}
              // >
              //   <img
              //     src={`${
              //       import.meta.env.REACT_APP_API
              //     }/api/v1/product/product-photo/${p.photo_id}`}
              //     className="card-img-top"
              //     style={{ width: "22rem", height: "16rem" }}
              //     alt={p.name}
              //   />
              //   <div className="card-body mb-0">
              //     <h6 style={{ fontSize: "20px" }} className="card-title">
              //       {p.name}
              //     </h6>
              //     <p className="card-text">{p.description}</p>
              //     <p className="card-text">
              //       Cost:<span style={{ color: "#48C11B" }}>${p.price}</span>
              //     </p>
              //     <button
              //       className="btn btn-danger col-md-12"
              //       onClick={() => removeFromCart(p.id)}
              //     >
              //       Remove
              //     </button>
              //   </div>
              // </div>
              <div className="col m-3" key={p._id}>
              <div className="card m-2 "style={{ ['width']: "18rem",["border-radius"]:"10px",['background-color']:'#FEFCFF',['height']:"500px",['position']: 'relative'}}>
              <img
                  src={`${
                    import.meta.env.REACT_APP_API
                  }/api/v1/product/product-photo/${p.photo_id}`}
                  className="card-img-top"
                  style={{height:"210px"}}
                  alt={p.name}
               />
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
                    <button style={{ ['width']: "94%",['position']: 'absolute',['top']:'430px',['left']:'4px' }}
                    className="btn btn-danger col-md-12"
                    onClick={() => removeFromCart(p.id)}
                  >
                    Remove
                  </button>
          </div>
                </div>
              </div>
            </div>
            ))}
          </div>
          <div className="col-md-6">
            <div className="card m-2" style={{ width: "30rem" }}>
              <div className="card-body">
                <h5 className="card-title">Order Summary</h5>
                <p className="card-text">Total Items: {quantity}</p>
                <p className="card-text">
                  Total Cost:
                  <span style={{ color: "#48C11B" }}><FaRupeeSign />{totalCost()}</span>
                </p>
                {auth?.token ? (
                  <button className="btn btn-warning col-md-12">
                    Place your order
                  </button>
                ) : (
                  <button
                    className="btn btn-warning col-md-12"
                    onClick={() => navigate("/login", { state: "/Cartpage" })}
                  >
                    Please login to checkout
                  </button>
                )}
              </div>
              <div className="mt-2">
                {!clientToken || !renderCart.length ? (
                  " "
                ) : (
                  <>
                    <DropIn
                      options={{
                        authorization: clientToken,
                        paypal: {
                          flow: "vault",
                        },
                      }}
                      onInstance={(instance) => setInstance(instance)}
                    />

                    <button
                      className="btn btn-success mb-3 col-md-5"
                      onClick={handlePayment}
                      disabled={!instance || loading}
                    >
                      {loading ? "Processing..." : "Make payment"}
                    </button>
                  </>
                )}
              </div>

            
            </div>
          </div>
        </div>
      </center>

    </Layout>
    
  
  );
};

export default CartPages;