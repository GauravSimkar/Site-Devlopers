import React from 'react'
import Layout from '../components/layout/layout';
import styles from './About.module.css' 

function About () {
  return (
    <Layout>
    <div class={styles.container}>
    <div class={styles.content}>
      <div class="left-side">
        <div class={styles.details}>
          <i class="fas fa-map-marker-alt"></i>
          <div class={styles.topic}>Address</div>
          <div class="text-one">Surkhet, NP12</div>
          <div class="text-two">Birendranagar 06</div>
        </div>
        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class={styles.topic}>Phone</div>
          <div class="text-one">+0098 9893 5647</div>
          <div class="text-two">+0096 3434 5678</div>
        </div>
        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class={styles.topic}>Email</div>
          <div class="text-one">codinglab@gmail.com</div>
          <div class="text-two">info.codinglab@gmail.com</div>
        </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Send us a message</div>
        <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
      <form action="#">
        <div class="input-box">
          <input type="text" placeholder="Enter your name"></input>
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your email"></input>
        </div>
        <div class="input-box message-box">
          
        </div>
        <div class="button">
          <input type="button" value="Send Now" ></input>
        </div>
      </form>
    </div>
    </div>
  </div>
    </Layout>
  )
}
export default About;
