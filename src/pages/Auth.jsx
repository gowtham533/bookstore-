import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { googleLoginAPI, loginAPI, registerAPI } from "../services/allAPIs"
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'



function Auth({insideRegister}) {
  const navigate = useNavigate()
  const [viewPassword,setViewPassowrd] = useState(false)

  // store data from form
  const [userDetails,setUserDetails] = useState({
    username:"", email:"", password:""
  })
  // console.log(userDetails);

  const handleRegister = async (e)=>{
    e.preventDefault()
    const {username, password, email} = userDetails
    if(username && password && email){
        // toast.success('API call')
        try{
          const result = await registerAPI(userDetails)
          console.log(result);
          if(result.status==200){
            toast.success("registration successful")
            setUserDetails({username:"",email:"", password:""})
            navigate('/login')
          }else if(result.status==409){
            toast.warning(result.response.data)
            setUserDetails({username:"",email:"", password:""})
            navigate('/login')
          }else{
            console.log(result);
            toast.error("something went wrong")
            setUserDetails({username:"",email:"", password:""})
          }
          
        }catch(err){
          console.log(err);
        }
    }else{
        toast.info("please fill the form completely")
    }

  }

  const handleLogin = async(e)=>{
    e.preventDefault()
    const {email,password} = userDetails
    if(email && password){
      // toast.success("api call")
      try{
        // api call
        const result = await loginAPI(userDetails)
        console.log(result);
        if(result.status==200){
          toast.success("login successfull..!!!")
          sessionStorage.setItem("token",result.data.token)
          sessionStorage.setItem("user",JSON.stringify(result.data.user))
          setTimeout(()=>{
            if(result.data.user.role=='admin'){
              navigate('/admin/home')
            }else{
              navigate('/')
            }
          },2500)
        }else if(result.status==401 || result.status==404){
          toast.warning(result.response.data)
          userDetails({username:"", email:"", password:""})
        }else{
          toast.error("something went wrong..!!!")
          userDetails({})
        }
      }catch(err){
        console.log(err);
      }
    }else{
         toast.info("please fill the form completely")
      }
  }

  const handleGoogleLogin = async(credentialResponse)=>{

    console.log("inside handlegooglelogin");
    console.log(credentialResponse);
    const decode = jwtDecode(credentialResponse.credential)
    console.log(decode);
    // email, name ,picture
    const result = await googleLoginAPI({username:decode.name,email:decode.email,password:'googlePassword',picture:decode.picture})
    if(result.status==200){
          toast.success("login successfull..!!!")
          sessionStorage.setItem("token",result.data.token)
          sessionStorage.setItem("user",JSON.stringify(result.data.user))
          setTimeout(()=>{
            if(result.data.user.role=='admin'){
              navigate('/admin/home')
            }else{
              navigate('/')
            }
          },2500)
        }else{
          toast.error("something went wrong..!!!")
          userDetails({})
        }
    
    
  }

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
              <input onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})} value={userDetails.username} type="text" placeholder='Username' className='bg-white text-black placeholder-gray-400 w-full p-2 rounded mb-0'/>
            }
            {/* email */}
            <input onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})} value={userDetails.email} type="text" placeholder='Email ID' className='bg-white text-black placeholder-gray-400 w-full p-2 rounded my-5'/>
            {/* password */}
            <div className="flex items-center">
              <input onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})} value={userDetails.password} type={viewPassword?"text":"password"} placeholder='password' className='bg-white text-black placeholder-gray-400 w-full p-2 rounded mb-5' />
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
                <button onClick={handleRegister} type='button' className='bg-green-700 w-full rounded p-2'>Register</button>
                :
                <button onClick={handleLogin} type='button' className='bg-green-700 w-full rounded p-2'>Login</button>
              }
            </div>
            {/* google authentication */}
            <div className="text-center my-5">
              {
                !insideRegister && <p>-------------or-------------</p>
              }
              {
                !insideRegister &&
                <div className='my-5 flex justify-center items-center w-full'>
                  <GoogleLogin
                    onSuccess={credentialResponse => {
                      handleGoogleLogin(credentialResponse)
                    }}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                  />
                </div>
              }
            </div>
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
      {/* toast */}
      <ToastContainer
      position="top-right"
      autoClose={2000}
      theme='coloured'/>
    </>
  )
}

export default Auth