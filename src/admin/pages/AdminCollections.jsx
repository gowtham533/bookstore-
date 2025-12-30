import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import Footer from '../../components/Footer'
import { getAllAdminBooksAPI, getAllAdminUsersAPI, updateBookStatusAPI } from '../../services/allAPIs'
import serverURL from '../../services/serverURL'
import { ToastContainer, toast } from 'react-toastify';



function AdminCollections() {

const [tab,setTab] = useState(1)
const [allBooks,setAllBooks] = useState([])
const [allUsers,setAllUsers] = useState([])

console.log(allBooks);
console.log(allUsers);


useEffect(()=>{
  const token = sessionStorage.getItem("token")
  if(token){
    if(tab == 1){
      getAllBooks(token)
    }else if(tab == 2){
      getAllUsers(token)
    }
  }
},[tab])

const getAllBooks = async (token)=>{
  const reqHeader = {
    "Authorization" : `Bearer ${token}`
  }
  const result = await getAllAdminBooksAPI(reqHeader)
  if(result.status == 200){
    setAllBooks(result.data)
  }else{
    console.log(result);
    
  }
}

const getAllUsers = async (token)=>{
  const reqHeader = {
    "Authorization" : `Bearer ${token}`
  }
  const result = await getAllAdminUsersAPI(reqHeader)
  if(result.status==200){
    setAllUsers(result.data)
  }else{
    console.log(result);
    
  }
}

const updateBookStatus = async (id)=>{
  const token = sessionStorage.getItem("token")
  if(token){
  const reqHeader = {
    "Authorization": `Bearer ${token}`
  }
  const result = await updateBookStatusAPI(id,reqHeader)
  if(result.status==200){
    toast.success("Book status updated successfully...!")
    getAllBooks(token)
  }else{
    console.log(result);
  }
  }
}

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
            {
              allBooks?.length>0 ?
                allBooks?.map(book=>(
                  <div key={book?._id} className="shadow rounded mx-3 p-4">
                    <img height={'300px'} width={'300px'} src={book?.imageURL} alt="" />
                    <div className="flex justify-center items-center mt-4 flex-col">
                      <h3 className="text-blue-600 font-bold text-lg">{book?.author}</h3>
                      <h4 className="text-lg">{book?.title}</h4>
                      <h4>rs {book?.discountPrice}</h4>
                      {
                        book?.status !="approved"?
                        <button onClick={()=>updateBookStatus(book._id)} className='bg-green-600 mt-3 p-2 text-white'>APPROVE</button>
                        :
                        <img width={'80px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw0Hs8M-odo4GNAKcsqW3xOZGLnqED0eFmiA&s" alt="" />
                      }
                    </div>
                  </div>
                ))
              :
              <p>Loading.....</p>
            }
          </div>
        }
        {
          tab==2 &&
          <div className='md:grid grid-cols-4 w-full my-5'>
            {/* duplicate user card */}
            {
              allUsers?.length>0 ?
                allUsers?.map(user=>(
                  <div className="rounded bg-gray-200 p-3 text-wrap">
              <p className="text-red-600 font-bold">ID : {user?._id}</p>
              <div className="flex items-center text-wrap mt-2">
                {/* user imng */}
                <img width={'80px'} style={{borderRadius:"50%"}} src={user?.picture?user?.picture.startsWith("https://lh3.googleusercontent.com/")?user?.picture:`${serverURL}/uploads/${user.picture}`:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReGNqJq-DTdqDhAVxKgTe6i2YVK8w3GLvR1Q&s"} alt="" />
                {/* content */}
                <div className="ms-5">
                  <h4 className="font-bold text-xl">{user?.username}</h4>
                  <p>{user?.userMail}</p>
                </div>
              </div>
            </div>
                ))
              :
              <p>loading....</p>
            }
          </div>
        }
      </div>
      </div>
      <Footer/>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme='colored' />
    </>
  )
}

export default AdminCollections