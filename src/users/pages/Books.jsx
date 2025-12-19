import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { getAllBooksPageAPI } from '../../services/allAPIs'
import { searchContext } from '../../contextAPI/ShareContext'

function Books() {

  const {searchKey,setSearchKey} = useContext(searchContext)
  const [categoryList,setCategoryList] = useState(false)
  const [token,setToken] = useState("")
  const [allBooks,setAllBooks] = useState([])
  const [allCategory,setAllCategory] = useState([])
  const [tempAllBooks,setTempAllBooks] = useState([])

  console.log(allBooks);

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      const userToken = sessionStorage.getItem("token")
      setToken(userToken)
      getAllBooks(userToken)
    }
  },[searchKey])

  const getAllBooks = async (token)=>{
    const reqHeader = {
     "Authorization":`Bearer ${token}`
    }
    const result = await getAllBooksPageAPI(reqHeader,searchKey)
    if(result.status==200){
      setAllBooks(result.data)
      setTempAllBooks(result.data)
      const tempAllCategory = result.data?.map(item=>item.category)
      const tempCategorySet = new Set(tempAllCategory)
      console.log([...tempCategorySet]);
      setAllCategory([...tempCategorySet])
      
    }else{
      console.log(result);
    }
  }

  const filterBooks = (category)=>{
    if(category=="all"){
      setAllBooks(tempAllBooks)
    }else{
      setAllBooks(tempAllBooks?.filter(item=>item.category==category))
    }
  }

  return (
    <>
    <Header/>
      
      {
        token ?
        <>
    {/* Login book */}
    <div className="flex justify-center items-center flex-col">
      {/* heading */}
      <h1 className="text-3xl font-bold my-8">COLLECTIONS</h1>
      {/* search box */}
      <div className="flex my-5">
        <input value={searchKey} onChange={e=>setSearchKey(e.target.value)} type="text" placeholder='Search by Title' className="border border-gray-400 w-90 p-2" />
        <button className="bg-black text-white p-2">Search</button>
      </div>
    </div>
    {/* book and filter row */}
      <div className="md:grid grid-cols-4 md:px-20 p-5 mb-10">
        {/* filter */}
        <div className="col-span-1">
          {/* filter title */}
          <div className="flex justify-between">
            <h1 className="text-3xl font-semibold">Filter</h1>
            <button onClick={()=>setCategoryList(!categoryList)} className='text-2xl md:hidden'><FaBars/></button>
          </div>
          {/* filter option */}
          <div className={categoryList?"block":"md:block hidden"}>
            {/* category 1 */}
            <div className='mt-3'>
              <input onClick={()=>filterBooks("all")} type="radio" name='filter' id='all'  />
              <label htmlFor="all" className='ms-1 text-xl'>All</label>
            </div>
            {/* category list */}
            {
              allCategory?.map((category,index)=>(
                <div key={index} className='mt-2'>
              <input onClick={()=>filterBooks(category)} type="radio" name='filter' id={category}  />
              <label htmlFor={category} className='ms-1 text-xl'>{category}</label>
            </div>
              ))
            }
          </div>
        </div>
        {/* book row */}
        <div className="col-span-3">
          <div className="md:grid grid-cols-4 mt-5 md:mt-0">
            {/* single book card 1*/}
            {
              allBooks?.length>0 ?
                allBooks?.map(book=>(
                  <div key={book?._id} className="shadow rounded mx-3 p-4 mb-5 md:mb-0">
            <img height={'300px'} width={'300px'} src={book?.imageURL} alt="" />
            <div className="flex justify-center items-center mt-4 flex-col">
              <h3 className="text-blue-600 font-bold text-lg">{book?.author}</h3>
              <h4 className="text-lg">{book.title.slice(0,9)}....</h4>
              <Link to={`/books/${book?._id}/view`} className='bg-black py-2 px-2 mt-3 text-white rounded w-30 text-center'>View</Link>
            </div>
          </div>
                ))
                :
                <p className='font-bold text-center'>Book not Found!!!.....</p>
            }
          </div>
        </div>
      </div>
      </>
      
      :
  
  <div>
    {/* not login book */}
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <img src="/public/lock.webp" alt="lock" width={'270px'}/>
      <p className='text-xl font-bold my-15'>please <Link to={'/login'} className='underline text-blue-500'>login</Link> to explore more!!!</p>
    </div>
  </div>  
  }
  
    
    <Footer/>
    </>
  )
}

export default Books