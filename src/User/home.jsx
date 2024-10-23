import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:5000/articles").then(res => setData(res.data))
  }, [])
  return (
    <div>
      <div>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Personal Blogs</h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {data.map((product) => (
                <div key={product.id} className="group relative border p-4 rounded bg-green-50">
                  <Link to={`article/${product.id}`}>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.title}
                        </h3>
                      </div>
                      <p className="text-sm font-medium text-gray-900">{product.date}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
