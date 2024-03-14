import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti";
import { Authcontext } from '../contextAPI/Authcontext';
function Header () {
  let [auth,setauth]=useContext(Authcontext);
  let handlelogout=()=>{
    setauth({
      ...auth,user:null,token:""
    });
    localStorage.removeItem('auth');
   // toast.success("Logout Successfully");
  }
  return (
<nav className="navbar navbar-expand-lg pg-link bg-light nav-head" >
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <Link className="navbar-brand ecommerce" to="#"><span className='head-icon'><TiShoppingCart/></span> E-commerce App</Link>
    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <Link   className="nav-link pg-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link  className="nav-link pg-link" to="/category">Category</Link>
      </li>
      { !auth.user ?<><li className="nav-item">
                       <Link  className="nav-link pg-link" to="/register">Register</Link>
                      </li>
                      <li className="nav-item">
                        <Link  className="nav-link pg-link" to="/login">Login</Link>
                      </li>
                      </>
                      :<li className="nav-item">
                          <Link onClick={handlelogout}  className="nav-link pg-link" to="/">LogOut</Link>
                       </li>
          }
      <li className="nav-item">
        <Link  className="nav-link pg-link" to="/Cartpage">Cart(0)</Link>
      </li>
    </ul>
  </div>
</nav>
);
}

export default Header;
/*
import './header.css'
function Header () {
  return (
   <>
   <div class="hero">
         <nav>
      <div class="nav__content">
        <div class="logo"><a href="#">Mitchell</a></div>
        <label for="check" class="checkbox">
          <i class="ri-menu-line"></i>
        </label>
        <input type="checkbox" name="check" id="check" />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Create"></Link></li>
          <li><Link to="/Register"></Link>Register</li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="">Cart(0)</Link></li>
        </ul>
      </div>
    </nav>
    <section class="section">
      <div class="section__container">
        <div class="content">
          <p class="subtitle">HELLO</p>
          <h1 class="title">
            I'm <span>Mitchell<br />a</span> Web Developer
          </h1>
          <p class="description">
            Welcome to my web developer portfolio! I'm Mitchell, a skilled and
            creative web developer with a passion for creating beautiful,
            responsive, and user-friendly websites. I've worked on a variety of
            web projects, ranging from personal blogs to e-commerce platforms.
          </p>
          <div class="action__btns">
            <button class="hire__me">Hire Me</button>
            <button class="portfolio">Portfolio</button>
          </div>
        </div>
        <div class="image">
          <img src="https://media.istockphoto.com/id/1295274245/photo/random-multicolored-spheres-computer-generated-abstract-form-of-large-and-small-balls-3d.jpg?s=612x612&w=0&k=20&c=q7NOl28YxIIOqKu6em50VlKrg6ISFyVww_nLOCr5W_A=" alt="profile" />
        </div>
      </div>
    </section>
    </div>

    </>
  )
}
export default Header;
*/
