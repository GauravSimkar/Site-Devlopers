import React from 'react'
import Header from './Header';
import Footer from './footer';
import styles from'./layout.module.css'

 function  Layout  ({children}) {
  return (
    <>
    <Header/>
    <main className={styles.layout}>{children}</main>
    <Footer/>
    </>
    
  )
}
export default Layout;
