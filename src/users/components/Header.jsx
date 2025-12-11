import React, { useEffect, useState } from 'react'
import { FaAddressCard, FaBars, FaFacebook, FaInstagram, FaPowerOff, FaUser } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


function Header() {

  const [listStatus,setListStatus] = useState(false)
  const [dp,setDp] = useState("")
  const [token,setToken] = useState("")
  const [dropDown,setDropDown] = useState(false)

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      const userToken = sessionStorage.getItem("token")
      setToken(userToken)
      const user = JSON.parse(sessionStorage.getItem("user"))
      setDp(user.picture)
    }
  },[token])


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
      {/* login btn link tag*/}
      {
        !token ?
        <Link to={'/login'} className='ms-2 border rounded py-1 px-2 hover:bg-black hover:text-white flex items-center'><FaUser className='me-1'/>Login</Link>
        :
        <div className="relative inline-block text-left">
          <button onClick={()=>setDropDown(!dropDown)} className="w-full bg-white px-3 py-2 shadow hove:bg-gray-50">
            <img width={'40px'} height={'40px'} style={{borderRadius:'50%'}} src={dp?dp:"/public/images.jpeg"} alt="" />
          </button>
          {
            dropDown &&
            <div className="absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-lg origin-top-right ring-1 ring-black/5 focus:outline:hidden">

          <Link to={'/user/profile'} className='px-4 py-2 text-sm text-gray-700 flex items-center'><FaAddressCard className='me-2'/>Profile</Link>

          <button className='px-4 py-2 text-gray-700 flex items-center'><FaPowerOff className='me-2'/>Logout</button>
          </div>
          }
        </div>
      }
    </div>
    </div>
    {/*header-lower part link and menu + login button */}
    <nav className='w-full p-2 bg-black text-white justify-center items-center'>
      {/* menu and login */}
      <div className="flex justify-between items-center text-2xl md:hidden">
        {/* menu bar btn */}
        <button onClick={menuBtnClick}> <FaBars/></button>
        {/* login link */}
        {
        !token ?
        <Link to={'/login'} className='ms-2 border rounded py-1 px-2 hover:bg-black hover:text-white flex items-center'><FaUser className='me-1'/>Login</Link>
        :
        <div className="relative inline-block text-left">
          <button onClick={()=>setDropDown(!dropDown)} className="w-full bg-white px-3 py-2 shadow hove:bg-gray-50">
          <img width={'40px'} height={'40px'} style={{borderRadius:'50%'}} src={dp?dp:"/public/images.jpeg"} alt="" />
          </button>
          {
            dropDown &&
            <div className="absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-lg origin-top-right ring-1 ring-black/5 focus:outline:hidden">

          <Link to={'/user/profile'} className='px-4 py-2 text-sm text-gray-700 flex items-center'><FaAddressCard className='me-2'/>Profile</Link>

          <button className='px-4 py-2 text-gray-700 flex items-center'><FaPowerOff className='me-2'/>Logout</button>
          </div>
          }
        </div>
      }
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