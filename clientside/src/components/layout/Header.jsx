import React from 'react'
import styles from'./header.module.css'
import {Link} from 'react-router-dom'

function Header () {
  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light" >
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <Link className="navbar-brand" to="#">E-commerce</Link>
    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <Link  className="nav-link" to="/">Home </Link>
      </li>
      <li className="nav-item">
        <Link  className="nav-link" to="/sign-up">Signup</Link>
      </li>
      
      <li className="nav-item">
        <Link  className="nav-link" to="login">Login</Link>
      </li>
      <li className="nav-item">
        <Link  className="nav-link" to="/Cartpage">Cart(0)</Link>
      </li>


    </ul>
    
  </div>
</nav>
    </>
  )
}
export default Header;
