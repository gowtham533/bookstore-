import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaCircleCheck } from 'react-icons/fa6'
import { FaEdit } from 'react-icons/fa'
import Edit from '../components/Edit'
import Bookstatus from '../components/Bookstatus'
import Sellbook from '../components/Sellbook'
import Purchase from '../components/Purchase'

function Profile() {

const [tab,setTab] = useState(1)

  return (
    <>
     <Header/>
      {/* black div */}
      <div style={{height:'200px'}} className="bg-black"></div>
      {/* profile img */}
      <div style={{width:'230px',height:'230px',borderRadius:'50%',marginLeft:'70px',marginTop:'-130px'}} className="bg-white p-3">
        <img width={'200px'} style={{borderRadius:"50%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReGNqJq-DTdqDhAVxKgTe6i2YVK8w3GLvR1Q&s" alt="" />
      </div>
      {/* name with edit */}
      <div className="md:flex justify-between items-center m-5">
        <h1 className="text-2xl font-bold ms-10 flex items-center md:mx-0">USERNAME <FaCircleCheck className='text-blue-400 ms-4'/></h1>
        <Edit/>      
        </div>
      <p className="text-justify m-10">
        A Library Store user is someone who values easy access to books, reading materials, and knowledge resources. They can browse through a wide collection of genres, search for titles, check availability, and manage their borrowing history from a single, user-friendly dashboard. The profile allows users to save favourite books, receive personalized recommendations, track due dates, and get notifications for new arrivals. Whether they are students, avid readers, or casual book lovers, the Library Store profile helps them stay organized and enjoy a seamless reading experience.
      </p>
      {/* tabs with contents */}
      <div className="md:px-40 flex justify-center items-center font-medium text-lg my-8">
        <p onClick={()=>setTab(1)} className={tab==1?'text-blue-600 border-gray-400 cursor-pointer border-t border-l border-r rounded p-5':'border-gray-400 cursor-pointer rounded border-b p-5'}>sell books</p>

      <p onClick={()=>setTab(2)} className={tab==2?'text-blue-600 border-gray-400 cursor-pointer border-t border-l border-r rounded p-5':'border-gray-400 cursor-pointer rounded border-b p-5'}> books status</p>

      <p onClick={()=>setTab(3)} className={tab==3?'text-blue-600 border-gray-400 cursor-pointer border-t border-l border-r rounded p-5':'border-gray-400 cursor-pointer rounded border-b p-5'}>purchase</p>
      </div>
      {/* contents */}
      {
        tab ==1 &&
        
        <Sellbook/>
        }

      {tab==2 &&
      <Bookstatus/>
      }
      {tab==3 &&
      <Purchase/>
      }
     <Footer/> 
    </>
  )
}

export default Profile