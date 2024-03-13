import React from 'react'
import {Link} from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti";

function Header () {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light" >
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <Link className="navbar-brand nav-heading" to="#"><TiShoppingCart className="nav-head-icon" />ECOMMERCE APP</Link>
    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
      <li className="nav-item ">
        <Link  className="nav-link page-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link   className="nav-link page-link" to="#">Category</Link>
      </li>
      <li className="nav-item">
        <Link  className="nav-link page-link" to="/register">Register</Link>
      </li>
      
      <li className="nav-item">
        <Link  className="nav-link page-link" to="/login">Login</Link>
      </li>
      <li className="nav-item">
        <Link  className="nav-link page-link" to="/Cartpage">Cart(0)</Link>
      </li>
    </ul>   
  </div>
</nav>
    </>
  )
}
export default Header;
