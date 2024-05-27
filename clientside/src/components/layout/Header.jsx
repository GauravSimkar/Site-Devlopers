import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti";
import { Authcontext } from '../contextAPI/Authcontext';
import useCategory from '../../hooks/useCategory';
import { Cartcontext } from '../contextAPI/Cartcontext';
import Searchinput from '../Form/searchinput';
// import './header.css'
function Header () {
  let [auth,setauth]=useContext(Authcontext);
  const {renderCart}=useContext(Cartcontext);
  const categories=useCategory()
  let handlelogout=()=>{
    setauth({
      ...auth,user:null,token:""
    });
    localStorage.removeItem('auth');
   // toast.success("Logout Successfully");
   }
  return (
<nav className="navbar navbar-expand-lg pg-link bg-light nav-head" >
  {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}
  <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <Link className="navbar-brand ecommerce" to="#"><span className='head-icon'><TiShoppingCart/></span> E-commerce App</Link>
    {/* <Link to="/" className="navbar-brand">
              🛒 Ecommerce App
            </Link> */}
    <ul className="navbar-nav ms-auto mt-2 mt-lg-0 ml-3">
      <Searchinput></Searchinput>
      <li className="nav-item active">
        <Link   className="nav-link pg-link" to="/">Home</Link>
      </li>
      <li className="nav-item dropdown ">
  <Link className="nav-link dropdown-toggle bg-grey pg-link rounded " to={"/categories"}   data-bs-toggle="dropdown" >
    Category
  </Link>
  <ul className="dropdown-menu dropdown-menu-dark">
    <li>
    <Link className="dropdown-item " to={"/categories"}  >All Categories</Link>
    </li>
  {categories?.map((c)=>(
    <li key={c._id}>
      <Link className="dropdown-item " to={`/category/${c.slug}`}  >{c.name}</Link>
      
    </li>
  ))}  
   </ul>
    
  
</li>
      { !auth.user ?<><li className="nav-item">
                       <Link  className="nav-link pg-link" to="/register">Register</Link>
                      </li>
                      <li className="nav-item">
                        <Link  className="nav-link pg-link" to='/login'>Login</Link>
                      </li>
                      </>
                      :
                      <>
                      <li class="nav-item dropdown">
                      <Link href="#"  class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        {auth?.user?.name}
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-dark">
                        <li><Link className="dropdown-item" to={`/dashboard/${auth?.user?.role===1?"admin":"user"}`}>Dashboard</Link></li>
                        <li><Link onClick={handlelogout} className="dropdown-item" to="/">LogOut</Link></li>
                      </ul>
                    </li>
                     {auth?.user?.role!==1&&<li className="nav-item">
                     <Link  className="nav-link pg-link" to="/Cartpage">Cart({renderCart.length})</Link>
                  </li>}
                   </>

          }
          
             
    </ul>
  </div>
</nav>
);
}

export default Header;

/*<li className="nav-item">
                          <Link  className="nav-link pg-link" to="/login">LogOut</Link>
                       </li>*/

/*
import './header.css'
import useCategory from './../../hooks/useCategory';
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



// import React from "react";
// import { NavLink, Link } from "react-router-dom";
// import { useAuth } from "../../context/auth";
// import toast from "react-hot-toast";
// import SearchInput from "../Form/SearchInput";
// import useCategory from "../../hooks/useCategory";
// import { useCart } from "../../context/cart";
// import { Badge } from "antd";

// const Header = () => {
//   const [auth, setAuth] = useAuth();
//   const [cart] = useCart();
//   const categories = useCategory();
//   const handleLogout = () => {
//     setAuth({
//       ...auth,
//       user: null,
//       token: "",
//     });
//     localStorage.removeItem("auth");
//     toast.success("Logout Successfully");
//   };
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
//         <div className="container-fluid">
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarTogglerDemo01"
//             aria-controls="navbarTogglerDemo01"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>
//           <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
//             <Link to="/" className="navbar-brand">
//               🛒 Ecommerce App
//             </Link>
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//               <SearchInput />
//               <li className="nav-item">
//                 <NavLink to="/" className="nav-link ">
//                   Home
//                 </NavLink>
//               </li>
//               <li className="nav-item dropdown">
//                 <Link
//                   className="nav-link dropdown-toggle"
//                   to={"/categories"}
//                   data-bs-toggle="dropdown"
//                 >
//                   Categories
//                 </Link>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <Link className="dropdown-item" to={"/categories"}>
//                       All Categories
//                     </Link>
//                   </li>
//                   {categories?.map((c) => (
//                     <li>
//                       <Link
//                         className="dropdown-item"
//                         to={`/category/${c.slug}`}
//                       >
//                         {c.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </li>

//               {!auth?.user ? (
//                 <>
//                   <li className="nav-item">
//                     <NavLink to="/register" className="nav-link">
//                       Register
//                     </NavLink>
//                   </li>
//                   <li className="nav-item">
//                     <NavLink to="/login" className="nav-link">
//                       Login
//                     </NavLink>
//                   </li>
//                 </>
//               ) : (
//                 <>
//                   <li className="nav-item dropdown">
//                     <NavLink
//                       className="nav-link dropdown-toggle"
//                       href="#"
//                       role="button"
//                       data-bs-toggle="dropdown"
//                       style={{ border: "none" }}
//                     >
//                       {auth?.user?.name}
//                     </NavLink>
//                     <ul className="dropdown-menu">
//                       <li>
//                         <NavLink
//                           to={`/dashboard/${
//                             auth?.user?.role === 1 ? "admin" : "user"
//                           }`}
//                           className="dropdown-item"
//                         >
//                           Dashboard
//                         </NavLink>
//                       </li>
//                       <li>
//                         <NavLink
//                           onClick={handleLogout}
//                           to="/login"
//                           className="dropdown-item"
//                         >
//                           Logout
//                         </NavLink>
//                       </li>
//                     </ul>
//                   </li>
//                 </>
//               )}
//               <li className="nav-item">
//                 <NavLink to="/cart" className="nav-link">
//                   <Badge count={cart?.length} showZero offset={[10, -5]}>
//                     Cart
//                   </Badge>
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Header;