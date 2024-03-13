import React, { useState } from 'react'
import Layout from '../../components/layout/layout'
import  './Register.css'

function Register  () {
  const [name ,setName]=useState("");

  const [email ,setemail]=useState("");
  const [password ,setPassword]=useState("");
  const [password1 ,setpassword1]=useState("");
  const [phone ,setphone]=useState("");
  const [address,setaddress]=useState("");
  const handlenameChange=(event)=>{
    setName(event.target.value);
  };
  const handleemailChange=(event)=>{
    setemail(event.target.value);
  };
  const handlepasswordChange=(event)=>{
    setPassword(event.target.value);
  };
  const handlepassword1Change=(event)=>{
    setpassword1(event.target.value);
  };
  const handlephoneChange=(event)=>{
    setphone(event.target.value);
  };
  const handleaddressChange=(event)=>{
    setaddress(event.target.value);
  };
  const handleSubmit=(event)=>{
  event.preventDefault();
  console.log(name,email,password,password1,address,phone);
  }

  return (
    <>
 <div class="wrapper">
    <h2>Registration</h2>
    <form action="#" onSubmit={handleSubmit}>
      <div className="input-box">
        <input type="text"onChange={handlenameChange} placeholder="Enter your name" required value={name} ></input>
      </div>
      <div className="input-box">
        <input type="text"onChange={handleemailChange} placeholder="Enter your email" required value={email}></input>
      </div>
      <div className="input-box">
        <input type="password"onChange={handlepasswordChange} placeholder="Create password" required value={password}></input>
      </div>
      <div className="input-box">
        <input type="password"onChange={handlepassword1Change} placeholder="Confirm password" required value={password1}></input>
      </div>
      <div className="input-box">
        <input type="text"onChange={handlephoneChange} placeholder="Phone Number" required value={phone}></input>
      </div>
      <div className="input-box">
        <input type="text"onChange={handleaddressChange} placeholder="Address" required  value={address}></input>
      </div>
      <div className="policy">
        <input type="checkbox"></input>
        <h3>I accept all terms & condition</h3>
      </div>
      <div className="input-box button">
        <input type="Submit" value="Register Now"></input>
      </div>
      <div className="text">
        <h3>Already have an account? <a href="#">Login now</a></h3>
      </div>
    </form>
  </div>
    </>
  )
}
export default Register;