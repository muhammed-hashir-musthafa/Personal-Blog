import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AdminBlog() {
  const [data, setData] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    axios.get("http://localhost:5000/articles").then(res => setData(res.data))
  }, [])


  const deleteArticle = (id) => {
    axios.delete(`http://localhost:5000/articles/${id}`).then(() => {
      setData(data.filter((article) => id !== article.id))

    })
  }

  const editArticle = (id) => { 
    navigate(`/admin/editblog/${id}`)
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Articles</h2>


        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

          {data.map((product) => (
            <div key={product.id} className="group relative border p-4 rounded bg-green-50" >
              <div className="mt-4 flex justify-between">

                <h3 className="  font-bold text-xl text-gray-700">
                  <p aria-hidden="true" className=" inset-0" />
                  {product.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.date}</p>
              </div>
              <p className="text-sm font-normal text-gray-900">{product.content}</p>
              <div className='mt-3'>
                <button
                  onClick={() => deleteArticle(product.id)}
                  type="button"
                  className="me-3 bg-red-500 cursor-pointer text-white  mt-3 inline-flex w-full justify-center rounded-md  px-3 py-2 text-sm font-semibold   shadow-sm ring-1 ring-inset ring-red-700 hover:bg-red-700 sm:mt-0 sm:w-auto"
                >
                  Delete
                </button>
                <button
                  onClick={() => editArticle(product.id)}
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


export default AdminBlog
