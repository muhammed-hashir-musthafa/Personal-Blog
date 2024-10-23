import axios from 'axios'
import React, { useState } from 'react'

function AdminAddBlog() {

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [date, setDate] = useState("")
  const [list, setList] = useState([])



  const handleClick = (e) => {
    e.preventDefault()
    const newArticle = {
      title, content, date
    }

    axios.post("http://localhost:5000/articles", newArticle).then(res => {
      setList([...list, res.data])
      setContent("")
      setDate("")
      setTitle("")

    }).catch(err => console.error(err)
    )
  }
 
  return (
    <div>
      <h1 className='font-bold text-center mt-5 text-2xl text-yellow-700'>Add New Article</h1>
      <div>
        <form action="" className='border-2 p-32 m  -10'>
          <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">Article Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="block w-full rounded-md border-0 py-1.5 pl-3 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" /><br />
          <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">Publishing Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="block w-full rounded-md border-0 py-1.5 pl-3 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" /><br />
          <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">Content</label>
          <textarea type="text" value={content} onChange={(e) => setContent(e.target.value)} className="block w-full rounded-md border-0 py-1.5 pl-3 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" /><br />
          <button onClick={handleClick} className='bg-green-700 text-white rounded px-3 py-2'>Publish</button>
        </form>
      </div>
    </div>
  )
}

export default AdminAddBlog


