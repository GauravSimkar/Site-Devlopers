import React, { useState } from 'react'
import Layout from '../../components/layout/layout'
import {toast} from 'react-toastify'
import axios from 'axios';  //for network request
import './login.css';

 function Login() {
  const [email ,setemail]=useState("");
  const [password ,setPassword]=useState("");

  const handleemailChange=(event)=>{
    setemail(event.target.value);
  };
  const handlepasswordChange=(event)=>{
    setPassword(event.target.value);
  };
  const handleSubmit= async(event)=>{
    event.preventDefault();
    console.log(event);
   try{   //to handle the response and error
  const res=await  axios.post(`${import.meta.env.REACT_APP_API}/api/v1/auth/login`,{email,password,});
  
  if(res.data.success){
    toast.success(res.data.message);
    //tauqeer work for navigation
  }
  else{
    toast.error(res.data.message);
  }
  
   }
   catch(error){ 
    console.log(error.response.data)
    toast.error(error.response.data.message);
   }
    
    };
  return (
    <>
    <div class="wrapper">
    <header>Login Form</header>
    <form action="#" onSubmit={handleSubmit}>
      <div class="field email">
        <div class="input-area">
          <input type="text" placeholder="Email Address"onChange={handleemailChange} value={email}></input>
          <i class="icon fas fa-envelope"></i>
          <i class="error error-icon fas fa-exclamation-circle"></i>
        </div>
        <div class="error error-txt">Email can't be blank</div>
      </div>
      <div class="field password">
        <div class="input-area">
          <input type="password" placeholder="Password"onChange={handlepasswordChange} value={password}></input>
          <i class="icon fas fa-lock"></i>
          <i class="error error-icon fas fa-exclamation-circle"></i>
        </div>
        <div class="error error-txt">Password can't be blank</div>
      </div>
      <div class="pass-txt"><a href="#">Forgot password?</a></div>
      <input type="submit" value="Login"></input>
    </form>
    <div class="sign-txt">Not yet login <a href="#">Signup now</a></div>
  </div>
    </>
  )
}
export default Login;
