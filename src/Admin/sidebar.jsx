import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="flex">
             <div className="w-64 bg-gray-800 text-white fixed h-full">
                <nav className="pt-10">
                    <Link to="/admin" className="block px-4 py-2 hover:bg-gray-700">Dashboard</Link>
                    <Link to="/admin/addblog" className="block px-4 py-2 hover:bg-gray-700">Add Articles</Link>
                    <Link to="/admin/blog" className="block px-4 py-2 hover:bg-gray-700">Articles</Link>
                </nav>
            </div>

             <main className="flex-1 ml-64 p-6">
                <Outlet />
            </main>
        </div>
    );
}

export default Sidebar;
