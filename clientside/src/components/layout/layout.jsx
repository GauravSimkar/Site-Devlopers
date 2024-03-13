import React from 'react'
import Header from './Header';
import Footer from './footer';
import styles from'./layout.module.css'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
 function  Layout  ({children}) {
  return (
    <>
    <Header/>
  <main className={styles.layout}>{children}
  <ToastContainer/>
  </main>   
    <Footer/>
    </>
    
  )
}
export default Layout;
