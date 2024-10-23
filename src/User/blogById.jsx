import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'


function BlogDetails() {
  const [data, setData] = useState([])
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    axios.get(`http://localhost:5000/articles/${id}`).then(res => setData(res.data))
  }, [])

  return (
    <div className=" ms-7 border max-w-sm  p-6 bg-white shadow-md rounded mt-32">
      <h1 className="text-2xl font-semibold text-center mb-4 text-gray-800">{data.title}</h1>
      <p className="text-sm text-gray-500 text-right mb-2">{data.date}</p>
      <div className="text-gray-700 ">
        <p>{data.content}</p>
      </div>
      <div className="text-center mt-6">
        <button
          onClick={() => navigate('/') }
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Back
        </button>
      </div>
    </div>
  )
}

export default BlogDetails



