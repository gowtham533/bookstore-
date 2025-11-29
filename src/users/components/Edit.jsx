import React, { useState } from 'react'
import { FaEdit, FaPen } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'


function Edit() {

const [offCanvas,setOffCanvas] = useState(false)

  return (
    <>
        <button onClick={()=>setOffCanvas(true)} className="flex items-center justify-center text-blue-600 border rounded p-2"><FaEdit className='me-2'/>EDIT</button>
        {/* offcanvas */}
        
        {
          offCanvas &&
          <div>
            <div className="fixed inset-0 bg-gray-500/75 w-full h-full">
            </div>
            <div className="bg-white h-full w-90 fixed top-0 left-0">
                {/* header */}
                <div className="bg-black p-3 flex justify-between">
                  <h3 className='text-xl'>Update profile</h3>
                  <button onClick={()=>setOffCanvas(false)}><FaX className='text-white'/></button>
                </div>
                {/* body */}
                <div className="flex justify-center items-center flex-col my-5">
                  {/* image */}
                  <label htmlFor="uploadimg">
                  <input type="file" id='uploadimg' hidden />
                  <img width={'200px'} style={{borderRadius:"50%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReGNqJq-DTdqDhAVxKgTe6i2YVK8w3GLvR1Q&s" alt="" />
                  </label>
                  <button style={{marginTop:'-20px',borderRadius:'50%'}}  className='bg-yellow-300 p-3 text-white rounded ms-20'><FaPen/></button>
                  {/* name */}
                  <div className="mt-10 w-full px-5">
                    <input type="text" placeholder='username' className='border border-gray-400 p-2 rounded w-full'/>
                  </div>
                  {/* password */}
                  <div className="mt-5 w-full px-5">
                    <input type="text" placeholder='New password' className='border border-gray-400 p-2 rounded w-full'/>
                  </div>
                  {/* bio */}
                  <div className="mt-5 w-full px-5">
                    <input type="text" placeholder='Bio' className='border border-gray-400 p-2 rounded w-full'/>
                  </div>
                  {/* button */}
                  <div className="mb-3 flex justify-end mt-5">
                    <button className="px-3 py-2 rounded bg-red-600 text-white me-3">RESET</button>
                    <button className="px-3 py-2 rounded bg-green-600 text-white">UPDATE</button>
                  </div>
                </div>
            </div>
        </div>
        }
    </>
  )
}

export default Edit