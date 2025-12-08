import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaSearch } from 'react-icons/fa'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'


function Home() {

  const navigate = useNavigate()
const [searchKey,setSearchKey] = useState("")

const handleSearch = ()=>{
  if(!searchKey){
    toast.warning("please provide a book title here")
  }else if(!sessionStorage.getItem("token")){
    toast.warning("please login to search books")
    setTimeout(() => {
      navigate('/login')
    }, 2500);
  }else if(sessionStorage.getItem("token") && searchKey){
    navigate('/books')
  }else{
    toast.error("something went wrong")
  }
}

  return (
    <>
      <Header/>
      <div>
      {/* landing part - search */}
      <div style={{height:'700px'}} className="flex justify-center items-center flex-col bg-[url(/background-image.png)] bg-cover text-white">
      <div style={{height:"700px",backgroundColor:"rgba(0,0,0,0.6"}} className="w-full flex justify-center items-center flex-col">
      <h1 className='text-5xl font-bold mb-2'>WONDERFUL GIFTS</h1>
      <p>Gifts Your Family and Friends a Book</p>
      {/* search */}
      <div className="mt-9 flex items-center">
        <input onChange={e=>setSearchKey(e.target.value)} type="text" className='bg-white rounded-3xl text-black w-100 placeholder-gray-500 p-2' placeholder='search books here' />
        <button onClick={handleSearch} className='text-gray-500' style={{marginLeft:"-40px"}}><FaSearch/></button>
      </div>
      </div>
      </div>
      {/* new arrival */}
      <section className="md:px-40 p-5 my-5 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">NEW ARRIVALS</h1>
        <h1 className="text-2xl">Explore Our Latest Collections</h1>
        {/* books row and col */}
        <div className="md grid grid-cols-4 w-full mt-10">
          {/* duplicated book card */}
          <div className="shadow rounded mx-3 p-4 mb-5 md:mb-0">
            <img height={'300px'} width={'300px'} src="/public/shopping.webp" alt="" />
            <div className="flex justify-center items-center mt-4 flex-col">
              <h3 className="text-blue-600 font-bold text-lg">Author</h3>
              <h4 className="text-lg">title</h4>
              <h4>$ price</h4>
            </div>
          </div>
          {/* duplicated book card */}
          <div className="shadow rounded mx-3 p-4">
            <img height={'300px'} width={'300px'} src="/public/shopping.webp" alt="" />
            <div className="flex justify-center items-center mt-4 flex-col">
              <h3 className="text-blue-600 font-bold text-lg">Author</h3>
              <h4 className="text-lg">title</h4>
              <h4>$ price</h4>
            </div>
          </div>
          {/* duplicated book card */}
          <div className="shadow rounded mx-3 p-4">
            <img height={'300px'} width={'300px'} src="/public/shopping.webp" alt="" />
            <div className="flex justify-center items-center mt-4 flex-col">
              <h3 className="text-blue-600 font-bold text-lg">Author</h3>
              <h4 className="text-lg">title</h4>
              <h4>$ price</h4>
            </div>
          </div>
          {/* duplicated book card */}
          <div className="shadow rounded mx-3 p-4">
            <img height={'300px'} width={'300px'} src="/public/shopping.webp" alt="" />
            <div className="flex justify-center items-center mt-4 flex-col">
              <h3 className="text-blue-600 font-bold text-lg">Author</h3>
              <h4 className="text-lg">title</h4>
              <h4>$ price</h4>
            </div>
          </div>
        </div>
        {/* all books link */}
        <div className="text-center my-5">
          <Link to={'/books'} className="p-3 rounded bg-black text-white">Explore More</Link>
        </div>
      </section>
      {/* author */}
      <section className="md:px-40 p-5 my-5 md:grid grid-cols-2 items-center">
        {/* author content */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">FEATURED AUTHORS</h1>
          <h1 className="text-2xl mb-6">Captivates with every word</h1>
          <p className='text-justify'>a passionate storyteller known for crafting engaging, easy-to-read narratives that blend creativity with clarity. With a strong interest in human emotions, everyday experiences, and imaginative worlds, the author focuses on writing that is both relatable and inspiring. Their work often reflects a balance between thoughtful insight and simple, captivating language—perfect for readers of all ages.</p>
          <p className='text-justify mt-5'>My writings are marked by a unique blend of authenticity and imagination, often exploring the subtle emotions and quiet moments that shape everyday life. Whether crafting short stories, reflective essays, or thought-provoking narratives, he emphasizes clarity, depth, and a natural flow that keeps readers engaged. Each piece carries a distinct voice—simple yet powerful—inviting readers to pause, reflect, and connect with the world in a more meaningful way.</p>
        </div>
        {/* author img */}
        <div className="p-5 flex justify-center items-center">
          <img className='w-full ms-5' src="/public/images.jpeg" alt="author" />
        </div>
      </section>
      {/* testimony */}
      <section className="md:px-40 p-5 my-5 flex flex-col items-center">
        <h1 className="text-3xl font-bold">TESTIMONIALS</h1>
        <h1 className="text-2xl">See what others are saying</h1>
        <div className="my-5 flex justify-center items-center flex-col">
        <img width={'200px'} style={{borderRadius:"50%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReGNqJq-DTdqDhAVxKgTe6i2YVK8w3GLvR1Q&s" alt="" />
        <h3 className='my-5 font-bold text-2xl'>Lucas Alexander</h3>
        <p className='text-justify italic'> <span className='font-bold me-2'>A passionate storyteller known for crafting</span>, easy-to-read narratives that blend creativity with clarity. With a strong interest in human emotions, everyday experiences, and imaginative worlds, the author focuses on writing that is both relatable and inspiring. Their work often reflects a balance between thoughtful insight and simple, captivating language—perfect for readers of all ages.</p>
        </div>
      </section>
      <ToastContainer
      position="bottom-center"
      autoClose={2000}
      theme='coloured'/>
      </div>
      <Footer/>
    </>
  )
}

export default Home