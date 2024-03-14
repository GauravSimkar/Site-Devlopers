import React, { useState } from 'react'

import {toast} from 'react-toastify'
import axios from 'axios';  //for network request
import './forgetpassword.css';
import Layout from '../../components/layout/layout';


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
    <Layout>
    <div class="wrapper">
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
    
  </div>
    </Layout>
    

  
  )
}
export default Forgetpassword;