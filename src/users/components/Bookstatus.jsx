import React, { useEffect, useState } from 'react'
import { getAllUserBooksAPI,removeBookAPI } from '../../services/allAPIs'


function Bookstatus() {

    const [userBooks,setUserBooks] = useState([])
    console.log(userBooks);
    

    useEffect(()=>{
        getUserUploadBooks()
    },[])
    

    const getUserUploadBooks = async ()=>{
        const token = sessionStorage.getItem("token")
        if(token){
            const reqHeader = {
                "Authorization":`Bearer ${token}`
            }
            const result = await getAllUserBooksAPI(reqHeader)
            if(result.status==200){
                setUserBooks(result.data)
            }else{
                console.log(result);
            }
        }
    }

    const deleteBook = async (id)=>{
        const token = sessionStorage.getItem("token")
        if(token){
            const reqHeader = {
                "Authorization":`Bearer ${token}`
            }
            const result = await removeBookAPI(id,reqHeader)
            if(result.status==200){
                getUserUploadBooks()
            }else{
                console.log(result);
            }
        }
    }

  return (
    <>
        <div className="rounded shadow p-10 mx-5 my-20">
        {/* book div duplicate */}
        {
            userBooks?.length>0?
                userBooks?.map(book=>(
                    <div className="bg-gray-200 p-5 rounded">
            <div className="md:grid grid-cols-[3fr_1fr]">
                <div>
                    <h2 className="text-2xl">{book?.title}</h2>
                    <h2 className="text-xl">{book?.author}</h2>
                    <h2 className="text-lg text-red-500">Rs {book?.discountPrice}</h2>
                    <p className='text-justify'>{book?.abstract}</p>
                    <div className="flex mt-5">
                        {/* pending */}
                        {/* approved */}
                        {/* sold */} 
                        {
                            book?.status=="pending" ?
                            <img src="/public/pending.jpg" width={'120px'} alt="" />
                            : book?.status=="approved" ?
                            <img src="/public/approved.jpeg" width={'120px'} alt="" />
                            :
                            <img src="/public/sold.png" width={'120px'} alt="" />
                        }
                    </div>
                </div>
                <div className="px-4 mt-4 md:mt-0">
                    <img className='w-100' src={book?.imageURL}  alt="" />
                    <div className='flex justify-end'><button onClick={()=>deleteBook(book._id)} className='p-2 bg-red-500 text-white  mt-5'>DELETE</button></div>
                </div>
            </div>
        </div>
                ))
            :
            <div className='text-center my-5 font-bold'>
                Book are not uploaded yet!!!
            </div>
        }
        </div>
    </>
  )
}

export default Bookstatus