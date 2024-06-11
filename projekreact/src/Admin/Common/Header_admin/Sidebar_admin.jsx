import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar_admin.css';
import profilePic from "../../../Assets/img/Pengertian-Freelancer.png";

const Sidebar = ({ openSidebarToggle }) => {
    return (
        <div className={`sidebar-admin ${openSidebarToggle ? 'sidebar-open' : ''}`}>
            <div className="profile-admin">
                <img src={profilePic} alt="Profile Picture" className="profile-pic-admin" />
                <div className="profile-info-admin">
                    <h2>Daniel</h2>
                    <p>Administrator</p>
                </div>
            </div>
            <div className="menu-admin">
                <Link to="/admin/beranda" className="menu-item-admin">Beranda</Link>
                <Link to="/admin/admins" className="menu-item-admin">Admin</Link>
                <Link to="/admin/products" className="menu-item-admin">Product</Link>
                <Link to="/admin/users" className="menu-item-admin">Users</Link>
                <Link to="/logout" className="menu-item-admin">Logout</Link>
            </div>
        </div>
    );
};

export default Sidebar;
