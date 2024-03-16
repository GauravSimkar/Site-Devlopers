import Layout from "./layout";
import { Link } from "react-router-dom"; 
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { PiShoppingBagOpenFill } from "react-icons/pi";

const Usermenu=()=>{
    const [a,seta]=useState(1);
    const handleLink=(position)=>{
        seta(position);
    }
return(
 <Layout>
    <div className="sidebar-container">
        <h5>User Pannel</h5>
        <div className="sidebar-link">
        <span className={a===1 && 'active-link'}>
            <Link to="/dashboard/user/profile"  onClick={()=>handleLink(1)}><FaUserCircle  className="a-icon" />Your Profile</Link>
        </span>
        <span className={a===2 && 'active-link'}>
            <Link to="/dashboard/user/order"  onClick={()=>handleLink(2)}><PiShoppingBagOpenFill className="a-icon" />Your orders</Link>
        </span>
        </div>
    </div>
</Layout>
);
}

export default Usermenu;