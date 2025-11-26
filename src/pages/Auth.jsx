import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Auth({insideRegister}) {
  const [viewPassword,setViewPassowrd] = useState(false)

  // const toggleViewPassword = ()=>{
  //   setViewPassowrd(!viewPassword)
  // }
  return (
    <>
      <div className='w-full min-h-screen flex justify-center items-center flex-col bg-[url(https://img.freepik.com/free-vector/geometric-gradient-futuristic-background_23-2149116406.jpg?semt=ais_hybrid&w=740&q=80)] bg-cover bg-center'>
      <div className="p-10">
        <h2 className="text-3xl font-bold text-white text-center">BOOK STORE</h2>
        <div style={{width:'400px'}} className="bg-black text-white p-5 flex flex-col justify-center items-center my-5">
          <div style={{width:"100px",height:"100px",borderRadius:"50%"}} className="border mb-5 flex justify-center items-center">
          <FaUser className='text-3xl'/>
          </div>
          <h2 className='text-2xl'>{insideRegister?"Register":"Login"}</h2>
          <form className="my-5 w-full">
            {/* username */}
            {
              insideRegister &&
              <input type="text" placeholder='Username' className='bg-white text-black placeholder-gray-400 w-full p-2 rounded mb-0'/>
            }
            {/* email */}
            <input type="text" placeholder='Email ID' className='bg-white text-black placeholder-gray-400 w-full p-2 rounded my-5'/>
            {/* password */}
            <div className="flex items-center">
              <input type={viewPassword?"text":"password"} placeholder='password' className='bg-white text-black placeholder-gray-400 w-full p-2 rounded mb-5' />
              {
                viewPassword ?
              <FaEyeSlash className='text-gray-400 cursor-pointer' style={{marginLeft:'-30px',marginTop:'-20px'}} onClick={()=>setViewPassowrd(!viewPassword)}/>
                :
              <FaEye className='text-gray-400 cursor-pointer' style={{marginLeft:'-30px',marginTop:'-20px'}} onClick={()=>setViewPassowrd(!viewPassword)}/>
              }
              
              
            </div>

            {/* forgot password */}
            {
              insideRegister &&
              <div className="flex justify-between mb-5">
                <p className="text-xs text-orange-300">Never share your password with others</p>
                <button className='text-xs underline'>Forgot password</button>
              </div>
            }
            {/* login/register button */}
            <div className="text-center">
              {
                insideRegister ?
                <button className='bg-green-700 w-full rounded p-2'>Register</button>
                :
                <button className='bg-green-700 w-full rounded p-2'>Login</button>
              }
            </div>
            {/* google authentication */}
            <div className="my-5 text-center">
              {
                insideRegister ?
                <p className="text-blue-600">Already have an account ?<Link to={'/login'} className='underline ms-5'>Login</Link></p>
                :
                <p className='text-blue-600'>Are you a new User ?<Link to={'/register'} className='underline ms-5'>Register</Link></p>
              }
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  )
}

export default Auth