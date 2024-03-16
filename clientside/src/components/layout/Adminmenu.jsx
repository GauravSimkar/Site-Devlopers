import Layout from "./layout";
import { FcManager } from "react-icons/fc";
import { BsCartPlus } from "react-icons/bs";
import { IoIosCreate } from "react-icons/io";
import { FaUsersLine } from "react-icons/fa6";
import { Link } from "react-router-dom"; 
import { useState } from "react";

const Adminmenu=()=>{
    const [a,seta]=useState(1);
    const handleLink=(position)=>{
        seta(position);
    }
return(
    <div className="sidebar-container">
        <h5>Admin Pannel</h5>
        <div className="sidebar-link">
        <span className={a===1 && 'active-link'}>
            <Link to="/dashboard/admin/profile"  onClick={()=>handleLink(1)}><FcManager className="a-icon" />Admin Profile</Link>
            </span>
        <span className={a===2 && 'active-link'}>
            <Link to="/dashboard/admin/create-category"  onClick={()=>handleLink(2)}><IoIosCreate className="a-icon" />Create Category</Link>
            </span>
        <span className={a===3 && 'active-link'}>
            <Link to="/dashboard/admin/create-product"  onClick={()=>handleLink(3)}><BsCartPlus  className="a-icon"/>Create Product</Link>
            </span>
        <span className={a===4 && 'active-link'}>
            <Link to="/dashboard/admin/users"  onClick={()=>handleLink(4)}><FaUsersLine className="a-icon" />Users</Link>
            </span>
        </div>
    </div>
);
}

export default Adminmenu;