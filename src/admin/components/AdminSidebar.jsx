import React from 'react'
import { FaBookReader, FaHome } from 'react-icons/fa'
import { FaGears } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


function AdminSidebar() {
  return (
    <>
      <div className="bg-blue-100 md:min-h-screen h-fit md:flex flex-col text-center">
        {/* admin img */}
        <div className="my-10 flex  justify-center items-center">
        <img width={'200px'} style={{borderRadius:"50%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReGNqJq-DTdqDhAVxKgTe6i2YVK8w3GLvR1Q&s" alt="" />
      </div>
      {/* name */}
      <h1 className="text-xl font bold mb-5">NAME</h1>
      {/* links */}
      <div className="mt-10 flex flex-col justify-center items-center">
      <div className='mb-3'>
      <Link to={'/admin/home'} className='flex items-center'><FaHome className='me-2'/>Dashboard</Link>
      </div> 
      <div className='mb-3'>
      <Link to={'/admin/resources'} className='flex items-center'><FaBookReader className='me-2'/>Resources</Link>
      </div> 
      <div className='mb-3'>
      <Link to={'/admin/profile'} className='flex items-center'><FaGears className='me-2'/>Settings</Link>
      </div> 
      </div>
      </div>
    </>
  )
}

export default AdminSidebar