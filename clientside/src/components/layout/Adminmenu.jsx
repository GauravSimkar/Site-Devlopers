// import Layout from "./layout";
// import { FcManager } from "react-icons/fc";
// import { BsCartPlus } from "react-icons/bs";
// import { IoIosCreate } from "react-icons/io";
// import { FaUsersLine } from "react-icons/fa6";
// import { Link, NavLink } from "react-router-dom"; 
// import { useEffect, useState } from "react";
// import { FaShoppingBag } from "react-icons/fa";
// import { MdOutlineSystemUpdateAlt } from "react-icons/md";


// const Adminmenu=()=>{
// const [a,seta]=useState(1);
// return(
//     <div className="sidebar-container">
//         <h5>Admin Pannel</h5>
//         <div className="sidebar-link">

//         <span className={a===1 ?'active-link':''}>
//             <Link to="/dashboard/admin/profile"  onClick={()=>seta(1)}><FcManager className="a-icon" />Admin Profile</Link>
//             </span>
//           <span className={a===2 ? 'active-link':''}>
//             <Link to="/dashboard/admin/create-category"  onClick={()=>seta(2)}><IoIosCreate className="a-icon" />Create Category</Link>
//             </span>
//            <span className={a===3 ? 'active-link':''}>
//             <Link to="/dashboard/admin/create-product"  onClick={()=>seta(3)}><BsCartPlus  className="a-icon"/>Create Product</Link>
//             </span>
//             <span className={a===4 ? 'active-link':''}>
//             <Link to="/dashboard/admin/update-product/:slug"  onClick={()=>seta(4)}><MdOutlineSystemUpdateAlt  className="a-icon"/>Update Product</Link>
//             </span>
//             <span className={a===5 ? 'active-link':''}>
//             <Link to="/dashboard/admin/products"  onClick={()=>seta(5)}><FaShoppingBag  className="a-icon"/>Products</Link>
//             </span>
//             <span className={a===6 ? 'active-link':''}>
//               <Link to="/dashboard/admin/users"  onClick={()=>seta(6)}><FaUsersLine className="a-icon" />Users</Link>
//             </span>
//         </div>
//     </div>
// );
// }

// export default Adminmenu;


import React from "react";
import { NavLink } from "react-router-dom";
const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group dashboard-menu">
          <h4>Admin Panel</h4>
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action"
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="list-group-item list-group-item-action"
          >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/admin/products"
            className="list-group-item list-group-item-action"
          >
            Products
          </NavLink>
          <NavLink
            to="/dashboard/admin/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
          {/* <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action"
          >
            Users
          </NavLink> */}
        </div>
      </div>
    </>
  );
};

export default AdminMenu;