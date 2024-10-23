import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './User/home';
import BlogDetails from './User/blogById';
import AdminDash from './Admin/dashboard';
import AdminBlog from './Admin/blogPage';
import AdminAddBlog from './Admin/addNewBlog';
import Sidebar from './Admin/sidebar';
import EditBlog from './Admin/EditBlog';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/article/:id' element={<BlogDetails />} />
          <Route path='/admin' element={<Sidebar />}>
            <Route path='/admin' element={<AdminDash />} />
            <Route path='/admin/blog' element={<AdminBlog />} />
            <Route path='/admin/addblog' element={<AdminAddBlog />} />
            <Route path='/admin/editblog/:id' element={<EditBlog />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
