import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBackward, FaCamera, FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaX } from 'react-icons/fa6'

function View() {

const [modalStatus,setModalStatus] = useState(false)

  return (
    <>
      <Header/>
      <div className="md:m-10 m-5">
        <div className="shadow border rounded p-5 border-gray-400">
          <div className="md:grid grid-cols-4 gap-x-10">
            {/* image */}
            <div className="col-span-1">
              <img className='w-full' src="/public/shopping.webp" alt="" />
            </div>
            {/* book details column */}
            <div className="col-span-3">
              <div className="flex justify-between items-center mt-5 md:mt-0">
                <h1 className="text-2xl font-black">Book Title</h1>
                <button onClick={()=>setModalStatus(true)} className="text-gray-400"><FaEye/></button>
              </div>
              <p className="my-3 text-blue-700">- Author</p>
              <div className="md:grid grid-cols-3 gap-5 my-10">
                <p className='font-bold'>Publisher :</p>
                <p className='font-bold'>Language :</p>
                <p className='font-bold'>No of pages :</p>
                <p className='font-bold'>Original price :</p>
                <p className='font-bold'>ISNB :</p>
                <p className='font-bold'>Category :</p>
                <p className='font-bold'>Seller :</p>
              </div>
              <div className="md:my-10 my-4">
                <p className="font-bold text-lg">
                  Abstract
                </p>
              </div>
              <div className="flex justify-end">
                <Link to={'/books'} className='bg-blue-700 p-3 mx-5 text-white flex justify-center items-center rounded'><FaBackward className='me-2'/>Back</Link>
                <button className='bg-green-700 p-3 rounded text-white'>Buy $300</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal */}
      
      {
        modalStatus &&
        <div onClick={()=>setModalStatus(false)} className="relative z-10">
        <div className="bg-gray-500/75 fixed inset-0">
        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-white rounded-2xl md:w-250 w-100">
            {/* modal title */}
            <div className="bg-black text-white p-3 flex jusify-center items-center">
              <h3>Book image</h3>
              <FaX className='ms-2'/>
            </div>
            {/* modal body */}
            <div className="relative p-5">
              <p className="text-blue-600 flex items-center"><FaCamera className='me-2'/>Camera click of the books in the hand of seller</p>
              {/* book images in row */}
              <div className="md:flex flex-wrap my-4">
                <img className='md:w-75 w-25 md:me-2 mb-3 md:mb-0' src="/public/shopping.webp" alt="" />
                <img className='md:w-75 w-25 md:me-2 mb-3 md:mb-0' src="/public/shopping.webp" alt="" />
                <img className='md:w-75 w-25 md:me-2 mb-3 md:mb-0' src="/public/shopping.webp" alt="" />
              </div>
              
            </div>
          </div>
        </div>
        </div>
      </div>
      }
      
      <Footer/>
    </>
  )
}

export default View