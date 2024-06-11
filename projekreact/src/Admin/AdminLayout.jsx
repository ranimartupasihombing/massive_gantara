import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Common/Header_admin/Sidebar_admin';
import './AdminLayout.css'

const AdminLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="admin-layout">
            <Sidebar openSidebarToggle={sidebarOpen} />
            <div className={`admin-main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
                {/* Header component goes here */}
                <main className="admin-main">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
