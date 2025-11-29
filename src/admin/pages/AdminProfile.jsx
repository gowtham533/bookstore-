import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import Footer from '../../components/Footer'
import { IoSettings } from 'react-icons/io5'
import { FaPen } from 'react-icons/fa'

function AdminProfile() {
  return (
  <>
      <AdminHeader/>
      <div className='md:grid grid-cols-5'>
      <div className="col-span-1">
      <AdminSidebar/>
      </div>
      <div className="col-span-4 p-10">
        <h1 className="font-bold text-3xl text-center my-5">Settings</h1>
        <div className="md:grid grid-cols-2 gap-10">
          {/* text */}
          <div>
            <h2 className=' text-xl font-bold mb-5'>Welcome to the Admin settigs panel</h2>
            <p className='text-justify mb-5'>
              The Admin Settings panel allows you to manage every part of your bookstore with ease. From updating store information to customizing the site’s appearance, all controls are organized for quick access. Use this section to manage books, users, payments, notifications, and overall store performance. Make changes anytime to keep your bookstore running smoothly.
              This is the central dashboard for configuring your online bookstore. Here you can adjust general settings, upload logos, manage categories, and control user permissions. All administrative tools are available in one place, ensuring a seamless and efficient management experience.
            <p className='font-bold mt-5 flex items-center'><IoSettings className='me-2'/> Account Settings</p>
            <p className='text-justify mt-2'>
              Here you can manage your personal account information and customize your profile settings. Update your name, email, phone number, and password to keep your account secure and up-to-date. You can also manage login preferences, enable two-step verification, and review your recent activity. Your account settings help ensure a personalized and secure experience across the platform.
            </p>
            </p>
          </div>
          <div className="flex justify-center items-center flex-col my-5">
                  {/* image */}
                  <label htmlFor="uploadimg">
                  <input type="file" id='uploadimg' hidden />
                  <img width={'200px'} style={{borderRadius:"50%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReGNqJq-DTdqDhAVxKgTe6i2YVK8w3GLvR1Q&s" alt="" />

                  <button style={{marginTop:'-20px',borderRadius:'50%'}}  className='bg-yellow-300 p-3 text-white rounded ms-20'><FaPen/></button>
                  </label>
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
      </div>
      <Footer/>
    </>
  )
}

export default AdminProfile