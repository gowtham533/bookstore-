import React from 'react'
import { FaArrowRight, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Footer() {
  return (
    <>
      <div className='md:grid grid-cols-3 flex bg-emerald-700'>
        {/* about us */}
        <div className='text-justify mx-5 my-3'>
          <h1 className='text-3xl font-bold my-3'>ABOUT US</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde totam harum excepturi porro facere ad voluptate blanditiis. Ratione incidunt laborum adipisci placeat, perspiciatis sapiente, rerum nesciunt fugiat ducimus, blanditiis voluptatem.
          Nam consequatur recusandae maiores necessitatibus! Natus, velit nemo! Sequi molestiae voluptatem numquam atque nemo dolorum cumque obcaecati quidem voluptas facere corrupti eos, consequatur reprehenderit minus ea esse. Amet, doloribus quae!</p>
        </div>
        {/* news letter */}
        <div className='md:mt-3 mx-6'>
          <h1 className='text-3xl font-bold my-3'>NEWS LETTER</h1>
          <p>Stay updated with our latest trends</p>
          <input type="text" className='w-100 bg-white p-2' placeholder='Email ID'/>
          <button className='bg-yellow-500 p-3'><FaArrowRight/></button>
        </div>
        {/* follow us */}
        <div className='md:mt-3'>
          <h1 className='text-3xl font-bold my-3'>FOLLOW US</h1>
          <p>Let us be social</p>
          <div className='flex items-center'>
            <FaInstagram className='mx-2'/>
            <FaXTwitter/>
            <FaFacebook className='mx-2'/>
            <FaLinkedin/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer