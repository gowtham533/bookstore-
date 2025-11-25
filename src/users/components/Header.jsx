import React, { useState } from 'react'
import { FaBars, FaFacebook, FaInstagram, FaUser } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


function Header() {

  const [listStatus,setListStatus] = useState(false)

  const menuBtnClick = ()=>{
    setListStatus(!listStatus)
  }
  return (
    <>
    {/*header-upper part - title and login */}
    <div className='grid grid-cols-3 p-3'>
    {/* logo with title */}
    <div className="flex ietms-center">
      <img width={'70px'} height={'70px'} src="/public/book logo-photoroom.png" alt="logo" />
      <h1 className="text-2xl font-bold md:hidden">Book Store</h1>
    </div>
    {/* title */}
    <div className="md:flex justify-center items-center hidden">
      <h1 className="text-3xl font-bold">Book Store</h1>
    </div>
    {/* login */}
    <div className="md:flex justify-end items-center hidden">
       {/* insta fb X */}
      <FaInstagram/>
      <FaFacebook className='mx-2'/>
      <FaXTwitter/>
      <Link to={'/login'} className='ms-2 border rounded py-1 px-2 hover:bg-black hover:text-white flex items-center'><FaUser className='me-1'/>Login</Link>
    </div>
    </div>
    {/*header-lower part link and menu + login button */}
    <nav className='w-full p-2 bg-black text-white justify-center items-center'>
      {/* menu and login */}
      <div className="flex justify-between items-center text-2xl md:hidden">
        {/* menu bar btn */}
        <button onClick={menuBtnClick}> <FaBars/></button>
        {/* login link */}
        <Link to={'/login'} className='ms-4 border rounded py-1 px-2 hover:bg-black hover:text-white flex items-center'><FaUser className='me-1'/>Login</Link>
      </div>
      {/* ul-links */}
      <ul className={listStatus?"flex flex-col":"md:flex justify-center items-center hidden"}>
        <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/'} className='md:mx-4'>HOME</Link></li>
        <li className='md:mx-4 my-3 md:my-0'><Link to={'/books'} className='md:mx-4'>BOOKS</Link></li>
        <li className='md:mx-4 mb-3 md:mb-0'><Link to={'/contact'} className='md:mx-4'>ABOUT</Link></li>
      </ul>
    </nav>
    </>
  )
}

export default Header