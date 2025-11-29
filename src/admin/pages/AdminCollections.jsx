import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import Footer from '../../components/Footer'

function AdminCollections() {

const [tab,setTab] = useState(1)

  return (
    <>
      <AdminHeader/>
      <div className='md:grid grid-cols-5'>
      <div className="col-span-1">
      <AdminSidebar/>
      </div>
      <div className="col-span-4 p-10">
        <h1 className="my-10 text-center text-2xl font-bold">All Collections</h1>
        {/* tabs */}
        <div className="flex my-5 justify-center items-center">
          <p onClick={()=>setTab(1)} className={tab==1?"text-blue-600 font-bold rounded border-t border-l border-r p-3 text-blue-600":"border-b font-bold border-gray-400 text-xl p-3"}>Books</p>

          <p onClick={()=>setTab(2)} className={tab==2?"text-blue-600 font-bold rounded border-t border-l border-r p-3 text-blue-600":"border-b font-bold border-gray-400 text-xl p-3"}>Users</p>
        </div>
        {/* tab contents */}
        {
          tab==1 &&
          <div className='md:grid grid-cols-4 w-full my-5'>
            {/* duplicate book card */}
            <div className="shadow rounded mx-3 p-4">
            <img height={'300px'} width={'300px'} src="/public/shopping.webp" alt="" />
            <div className="flex justify-center items-center mt-4 flex-col">
              <h3 className="text-blue-600 font-bold text-lg">Author</h3>
              <h4 className="text-lg">title</h4>
              <h4>$ price</h4>
              <button className='bg-green-600 mt-3 p-2 text-white'>APPROVED</button>
            </div>
          </div>
          </div>
        }
        {
          tab==2 &&
          <div className='md:grid grid-cols-4 w-full my-5'>
            {/* duplicate user card */}
            <div className="rounded bg-gray-200 p-3 text-wrap">
              <p className="text-red-600 font-bold">ID : Leomessi10</p>
              <div className="flex items-center text-wrap mt-2">
                {/* user imng */}
                <img width={'80px'} style={{borderRadius:"50%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReGNqJq-DTdqDhAVxKgTe6i2YVK8w3GLvR1Q&s" alt="" />
                {/* content */}
                <div className="ms-5">
                  <h4 className="font-bold text-xl">NAME</h4>
                  <p>leomessi10@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
      </div>
      <Footer/>
    </>
  )
}

export default AdminCollections