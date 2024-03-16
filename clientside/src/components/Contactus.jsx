import React from 'react'
import './Contactus.css'
import Layout from './layout/layout'
import { Link } from 'react-router-dom'
const Contactus = () => {
  return (
    <Layout>
    <div>

<div class="container">
    <div class="content">
      <div class="left-side">
        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <Link  className="topic" to="/google-map">Address</Link>

          <div class="text-one">Mnnit Prayagraj</div>
          <div class="text-two">Teliyarganj</div>
        </div>
        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div>
          <div class="text-one">+0098 9893 5647</div>
          <div class="text-two">+0096 3434 5678</div>
        </div>
        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div>
          <div class="text-one">codinglab@gmail.com</div>
        </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Send Us Your Feedback</div>
      <form action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="access_key" value="206125ed-e261-4eef-8233-f6f0959537a7"/>
        <div class="input-box">
          <input type="text" name='Name '    placeholder="Enter your name" required/>
        </div>
        <div class="input-box">
          <input type="text" name='Email' placeholder="Enter your email" required/>
        </div>
        <div class="input-box message-box">
          <input type='textarea' name='Message' placeholder='Enter your feedback' required></input>
        </div>
       <button class="button" type='Submit'> Send Now</button>
      </form>
    </div>
    </div>
  </div>

    </div>
    </Layout>
  )
}

export default Contactus