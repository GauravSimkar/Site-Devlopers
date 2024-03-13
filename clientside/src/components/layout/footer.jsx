import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {Link} from 'react-router-dom';
import styles from './footer.module.css'

 function Footer () {
  return (
    <>
    <footer>
    <div className={styles.container}>
      <center className={styles.contact}>
        <Link to="/Aboutus">About Us</Link>
        <Link to='/privacy-policy'>Privacy Policy</Link>
        <Link to='/Contactus'>Contact</Link>
      </center >
        <center className={styles.facebook}>
          <a href ='#'><FaFacebookSquare /></a>
          <a href ='#'></a><FaInstagramSquare />
          <a href ='#'></a><FaWhatsappSquare />
          <a href ='#'></a><FaSquareTwitter />
        </center>
        <center className={styles.copyrighttext}>
          <p>Copyright &copy; 2024 Online Tutorials.All Right Reserver</p>
        </center>
         </div>
    </footer>
    </>
    
  )
}
export default Footer;