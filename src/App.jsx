import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './User/home';
import BlogDetails from './User/blogById';
import AdminDash from './Admin/dashboard';
import AdminBlog from './Admin/blogPage';
import AdminAddBlog from './Admin/addNewBlog';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/article/:id' element={<BlogDetails />} />
          <Route path='/admin' element={<AdminDash />} />
          <Route path='/admin/blog' element={<AdminBlog />} />
          <Route path='/admin/addblog' element={<AdminAddBlog />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
