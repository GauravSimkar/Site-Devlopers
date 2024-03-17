import { Link } from "react-router-dom"; 
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { PiShoppingBagOpenFill } from "react-icons/pi";

const Usermenu=()=>{
    const [a,seta]=useState(1);
   // const makeLink=(p)=>{
       
  //  }
    const handleLink=(position)=>{
        seta(position);
    }

    useEffect(() => {
        const links = document.querySelectorAll('.sidebar-link span');
        links.forEach((link, index) => {
            link.classList.remove('active-link');
            if (index + 1 === a) {
                link.classList.add('active-link');
            }
        });
    }, [a]);


    
return(

    <div className="sidebar-container">
        <h5>User Pannel</h5>
        <div className="sidebar-link">
        <span className={a===1 ?'active-link':''} onClick={()=>handleLink(1)}>
            <Link to="/dashboard/user/profile"><FaUserCircle  className="a-icon" />Your Profile</Link>
        </span>
        <span className={a===2 ? 'active-link':''}  onClick={()=>handleLink(2)}>
            <Link to="/dashboard/user/order"  ><PiShoppingBagOpenFill className="a-icon" />Your orders</Link>
        </span>
        </div>
    </div>
);
}

export default Usermenu;

/*

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Adminmenu = () => {
    const [activeLink, setActiveLink] = useState(1);

    const handleLink = (position) => {
        setActiveLink(position);
    }

    useEffect(() => {
        const links = document.querySelectorAll('.sidebar-link span');
        links.forEach((link, index) => {
            link.classList.remove('active-link');
            if (index + 1 === activeLink) {
                link.classList.add('active-link');
            }
        });
    }, [activeLink]);

    return (
        <div className="sidebar-container">
            <h5>Admin Panel</h5>
            <div className="sidebar-link">
                <span onClick={() => handleLink(1)} className={activeLink === 1 ? 'active-link' : ''}>
                    <Link to="/dashboard/admin/profile">
                        Admin Profile
                    </Link>
                </span>
                <span onClick={() => handleLink(2)} className={activeLink === 2 ? 'active-link' : ''}>
                    <Link to="/dashboard/admin/create-category">
                        Create Category
                    </Link>
                </span>
                <span onClick={() => handleLink(3)} className={activeLink === 3 ? 'active-link' : ''}>
                    <Link to="/dashboard/admin/create-product">
                        Create Product
                    </Link>
                </span>
                <span onClick={() => handleLink(4)} className={activeLink === 4 ? 'active-link' : ''}>
                    <Link to="/dashboard/admin/users">
                        Users
                    </Link>
                </span>
            </div>
        </div>
    );
}

export default Adminmenu;

*/