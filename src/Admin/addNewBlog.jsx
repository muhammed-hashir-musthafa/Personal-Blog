import React, { useState } from 'react'

function AdminAddBlog() {

  const [val, setVal] = useState("")
  const [list, setList] = useState([])

  const handleClick = () => {
    setList(val)
  }
  return (
    <div>
      <h1 className='font-bold text-center mt-5 text-2xl text-yellow-700'>Add New Article</h1>
      <div>
        <form action="" className='border-2 p-32 m-10'>
          <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">Article Title</label>
          <input type="text" onChange={(e) => setVal(e.target.value)} value={val} className="block w-full rounded-md border-0 py-1.5 pl-3 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" /><br />
          <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">Publishing Date</label>
          <input type="date" onChange={(e) => setVal(e.target.value)} value={val} className="block w-full rounded-md border-0 py-1.5 pl-3 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" /><br />
          <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">Content</label>
          <textarea type="text" onChange={(e) => setVal(e.target.value)} value={val} className="block w-full rounded-md border-0 py-1.5 pl-3 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" /><br />
          <button onClick={handleClick} className='bg-green-700 text-white rounded px-3 py-2'>Publish</button>
        </form>
      </div>
    </div>
  )
}

export default AdminAddBlog


// export default function Example() {
//   return (
//     <div>
//       <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
//         Price
//       </label>
//       <div className="relative mt-2 rounded-md shadow-sm">
//         <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//           <span className="text-gray-500 sm:text-sm">$</span>
//         </div>
//         <input
//           id="price"
//           name="price"
//           type="text"
//           placeholder="0.00"
//           className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//         />

//       </div>
//     </div>
//   )
// }
