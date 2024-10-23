import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  const [blogCount, setBlogCount] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:5000/articles')
      .then(res => {
        setBlogCount(res.data.length);
      })

  }, []);

  return (
    <div className="  h-screen bg-gray-100">
      <header className="bg-white shadow p-4 items-center justify-between">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      </header>

      <main className="p-2">

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Dashboard Overview</h3>
          <Link to={'/admin/blog'}>
            <div className="bg-green-100 text-green-800 p-6 rounded-lg shadow-md w-52">
              <h4 className="text-2xl font-bold">Total Blogs</h4>
              <p className="text-3xl mt-2 font-bold ">{blogCount}</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
