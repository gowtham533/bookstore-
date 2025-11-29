import React from 'react'
import { FaPowerOff } from 'react-icons/fa'

function AdminHeader() {
  return (
    <>
      <div className='flex justify-between items-center p-3 md:px-20'>
        {/* login with title */}
        <div className="flex ietms-center">
        <img width={'70px'} height={'70px'} src="/public/book logo-photoroom.png" alt="logo" />
        <h1 className="text-2xl font-bold md:hidden">Book Store</h1>
      </div>
        {/* logout */}
        <button className='bg-black px-3 py-2 rounded text-white flex items-center hover:bg-white hover:text-black'><FaPowerOff className='me-2'/>Logout</button>
      </div>
      {/* header lower part */}
      <div className="bg-black p-2 items-center justify-center flex">
        <marquee>
          <p className='text-white'>Welcome, Admin! You're all set to manage and monitor the system. Let's get into work</p>
          </marquee>
      </div>
    </>
  )
}

export default AdminHeader