import React, { useEffect, useState } from 'react'
import { getUserBoughtBooksAPI } from '../../services/allAPIs';

function Purchase() {

    const [userBoughtBook,setUserBoughtBook] = useState([])
    console.log(userBoughtBook);

    useEffect(()=>{
        getUserBoughtBooks()
    },[])

    const getUserBoughtBooks = async ()=>{
        const token = sessionStorage.getItem("token")
        if(token){
            const reqHeader = {
                "Authorization":`Bearer ${token}`
            }
            const result = await getUserBoughtBooksAPI(reqHeader)
            if(result.status==200){
                setUserBoughtBook(result.data)
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
            userBoughtBook?.length>0?
                userBoughtBook?.map(book=>(
                    <div className="bg-gray-200 p-5 rounded">
            <div className="md:grid grid-cols-[3fr_1fr]">
                <div>
                    <h2 className="text-2xl">{book?.title}</h2>
                    <h2 className="text-xl">{book?.author}</h2>
                    <h2 className="text-lg text-red-500">{book?.discountPrice}</h2>
                    <p className='text-justify'>{book?.abstract}</p>
                    <div className="flex mt-5">
                    <img src="/public/purchase.png" alt="" />
                </div>
                </div>
                <div className="px-4 mt-4 md:mt-0">
                    <img className='w-100' src={book?.imagrURL}  alt="" />
                </div>
                </div>
            </div>
                ))
                :
                <p className='font-bold text-center'>No books are purchased yet..!!</p>
        }
        </div> 
    </>
  )
}

export default Purchase