import React, { useState } from 'react'

import {ToastContainer, toast} from 'react-toastify'
// import axios from 'axios';  //for network request
import './forgetpassword.css';
import Layout from '../../components/layout/layout';
import axios from 'axios'; 

 function Forgetpassword () {

  const [email ,setemail]=useState("");

  const [newpassword ,setnewPassword]=useState("");
  const [answer ,checkanswer]=useState("");
  const handleemailChange=(event)=>{
    setemail(event.target.value);
  };
  const handleresetpasswordChange=(event)=>{
    setnewPassword(event.target.value);
  };
  const handleanswerChange=(event)=>{
    checkanswer(event.target.value);
  };
  const handleSubmit= async(event)=>{
    event.preventDefault();
    console.log(event);
   try{   //to handle the response and error
  const res=await  axios.post(`${import.meta.env.REACT_APP_API}/api/v1/auth/forget-password`,{email,newpassword,answer});
  console.log(res);
  
  if(res.data.success){
    toast.success(res.data.message);
    //navigation to login page tauqeer work
  }
  else{
    toast.error(res.data.message);
  }
  
   }
   catch(error){ 
  //   console.log(error.response.data)
  console.log(error);
    toast.error("something Went Wrong");
   }
    
    };
  return (
    <>
    {/* <div class="wrapper">
    <header>Reset Password</header>
    <form action="#" onSubmit={handleSubmit}>
      <div class="field email">
        <div class="input-area">
          <input type="text" placeholder="Email Address" onChange={handleemailChange} value={email}></input>
          <i class="icon fas fa-envelope"></i>
          <i class="error error-icon fas fa-exclamation-circle"></i>
        </div>
        <div class="error error-txt">Email can't be blank</div>
        <div class="input-area">
          <input type="text" placeholder="Your Answer Address"onChange={handleanswerChange} value={answer}></input>
          <i class="icon fas fa-envelope"></i>
          <i class="error error-icon fas fa-exclamation-circle"></i>
        </div>
      </div>
      <div class="field password">
        <div class="input-area">
          <input type="password" placeholder=" New Password"onChange={handleresetpasswordChange} value={newpassword}></input>
          <i class="icon fas fa-lock"></i>
          <i class="error error-icon fas fa-exclamation-circle"></i>
        </div>
        <div class="error error-txt">Password can't be blank</div>
      </div>
     <input type="submit" value="Reset"></input>
    </form>
    
  </div> */}
 {/* <div class="center">
         <input type="checkbox" id="show"></input>
         <label for="show" class="show-btn">View Form</label>
         <div class="container">
            <label for="show" class="close-btn fas fa-times" title="close"></label>
            <div class="text">
               Login Form
            </div>
            <form action="#">
               <div class="data">
                  <label>Email or Phone</label>
                  <input type="text" required></input>
               </div>
               <div class="data">
                  <label>Password</label>
                  <input type="password" required></input>
               </div>
               <div class="forgot-pass">
                  <a href="#">Forgot Password?</a>
               </div>
               <div class="btn">
                  <div class="inner"></div>
                  <button type="submit">login</button>
               </div>
               <div class="signup-link">
                  Not a member? <a href="#">Signup now</a>
               </div>
            </form>
         </div>
      </div> */}
{/* <center class="container">
      <div class="wrapper">
        <div class="title"><span>Reset Password</span></div>
        <form action="#">
          <div class="row">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="Email"onChange={handleemailChange} value={email} required></input>
          </div>
          <div class="row">
            <i class="fas fa-lock"></i>
            
            <input type="password" placeholder=" Your Answer"onChange={handleanswerChange} value={answer} required></input>
          </div>
          <div class="row">
            <i class="fas fa-lock"></i>
            
            <input type="password" placeholder=" New Password" onChange={handleresetpasswordChange} value={newpassword} required></input>
          </div>
          
          <div class="row button">
            <input type="submit" value="Reset"></input>
          </div>
         
        </form>
      </div>
    </center> */}
     <div class="login-box">
        <h2>Reset Password</h2>
        <form action="#" onSubmit={handleSubmit}>
            <div class="user-box">
                <input type="text" onChange={handleemailChange} value={email}  required></input>
                <label>Email</label>
            </div>
            <div class="user-box">
                <input type="text" onChange={handleanswerChange} value={answer} required></input>
                <label>Your Answer</label>
            </div>
                <div class="user-box">
                <input type="password" onChange={handleresetpasswordChange} value={newpassword} required></input>
                <label> New Password</label>
            </div>
            <input class="nice" type="submit" value="Reset"></input>
            
        </form>
    </div>
        <ToastContainer/>
     </>



    
  
  )
}
export default Forgetpassword;