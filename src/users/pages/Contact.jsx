import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaPhone, FaTelegramPlane } from 'react-icons/fa'
import { IoIosMailOpen } from 'react-icons/io'
import { FaLocationDot } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <>
    <Header/>
      <div>
        <h1 className='text-center my-5 font-bold text-3xl'>CONTACT</h1>
        <p className='text-justify mx-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nesciunt ullam animi consequatur, tenetur reiciendis! Fugit soluta sint beatae assumenda reprehenderit id dicta voluptate sapiente esse! Repellat officiis dignissimos ab?
        Nobis dolorum praesentium quis laudantium adipisci exercitationem possimus odio nemo sunt voluptatibus nulla nisi dignissimos officia reprehenderit culpa eum tenetur rerum, delectus sint. Debitis rem officiis modi blanditiis quibusdam eligendi!</p>
        {/* icons */}
        <div className='md:flex justify-evenly items-center mx-15 my-15'>
          <div className='flex justify-center items-center'>
            <Link to={''} className='rounded items-center justify-center flex bg-gray-400 m-3' style={{width:"50px",height:"50px",borderRadius:"50%"}}><FaLocationDot className='text-2xl'/></Link>
           <p> 123 Main street,<br />Apt 4B,Anytown, CA 91234</p>
          </div>

          <div className='flex justify-center items-center'><Link to={''} className='rounded items-center justify-center flex bg-gray-400 m-3' style={{width:"50px",height:"50px",borderRadius:"50%"}}><FaPhone className='text-2xl'/></Link>
          <p>+91 9544236364</p>
          </div>
          

           <div className='flex justify-center items-center'><Link to={''} className='rounded items-center justify-center flex bg-gray-400 m-3' style={{width:"50px",height:"50px",borderRadius:"50%"}}><IoIosMailOpen className='text-2xl'/></Link>
           <p>bookstore534@gmail.com</p>
           </div>
        </div>
        {/* box */}
        <div className='md:grid grid-cols-2 mx-15 my-10 md:px-30 mt-5 md:mt-0'>
         <div className='flex justify-center items-center'>
            <div className='rounded bg-gray-400 p-5 flex justify-center items-center flex-col' style={{width:"500px"}}>
            <h3 className='text-center font-bold mb-3'>Send Me Message</h3>
            <input type="text" placeholder='Name' className='bg-white placeholder-gray-400 w-100 p-1 mb-3 rounded'/>
            <input type="text" placeholder='Email' className='bg-white placeholder-gray-400 w-100 p-1 mb-3 rounded'/>
            <textarea type="text" placeholder='Message' className='bg-white placeholder-gray-400 w-100 p-1 rounded' style={{height:"130px"}}/>
            <button className='bg-black text-white w-100 mt-3 rounded p-2'>Send</button>
            </div>
         </div>
          {/* map */}
          <div className='flex justify-center items-center'>
            <img width={'500px'} src="/public/map.png" alt="" />
          </div>
        </div>
      </div>
    <Footer/>
    </>
  )
}

export default Contact