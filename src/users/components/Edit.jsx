import React, { useEffect, useState } from 'react'
import { FaEdit, FaPen } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import serverURL from '../../services/serverURL'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { editUserAPI } from '../../services/allAPIs'



function Edit() {

const [offCanvas,setOffCanvas] = useState(false)
const [userDetails,setuserDetails] = useState({
  id:"",username:"",password:"",role:"",bio:"",picture:""
})
const [confirmPassword,setConfirmPassword] = useState("")
const [existingPicture,setExistingPicture] = useState("")
const [preview,setPreview] = useState("")
const [passwordMatch,setPasswordMatch] = useState(true)
const navigate = useNavigate()

useEffect(()=>{
  if(sessionStorage.getItem("user")){
    const user = JSON.parse(sessionStorage.getItem("user"))
    setuserDetails({...userDetails,id:user._id,username:user.username,role:user.role,bio:user.bio})
    setExistingPicture(user.picture)
  }
},[])

const checkPasswordMatch = (data)=>{
  setConfirmPassword(data)
  userDetails.password == data ? setPasswordMatch(true):setPasswordMatch(false)
}

const handleUploadPicture = (imgFile)=>{
  setuserDetails({...userDetails,picture:imgFile})
  const url = URL.createObjectURL(imgFile)
  setPreview(url)
}

const resetForm = ()=>{
  const user = JSON.parse(sessionStorage.getItem("user"))
  setuserDetails({...userDetails,id:user._id,username:user.username,password:"",role:user.role,bio:user.bio})
  setPreview("")
  setConfirmPassword("")
  setPasswordMatch(true)
}

const handleProfileUpdate = async ()=>{
  const {username,password,bio,id} = userDetails
  if(!username || !password || !bio || !confirmPassword){
    toast.info("please fill the form completely")
  }else{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Authorization":`Bearer ${token}`
      }
      const reqBody = new FormData()
      for(let key in userDetails){
        if(key != "picture"){
          reqBody.append(key,userDetails[key])
        }else{
          preview ? reqBody.append("picture",userDetails.picture):reqBody.append("picture",existingPicture)
        }
      }
      const result = await editUserAPI(id,reqBody,reqHeader)
      if(result.status==200){
        toast.success("profile upadted successfullt...please login with  new password!!!")
        setTimeout(() => {
          navigate('/login')
        }, 2000);
      }else{
        console.log(result);
        toast.error("something went wrong")
      }
    }
  }
}

  return (
    <>
        <button onClick={()=>setOffCanvas(true)} className="flex items-center justify-center text-blue-600 border rounded p-2"><FaEdit className='me-2'/>EDIT</button>
        {/* offcanvas */}
        
        {
          offCanvas &&
          <div>
            <div className="fixed inset-0 bg-gray-500/75 w-full h-full">
            </div>
            <div className="bg-white h-full w-90 fixed top-0 left-0">
                {/* header */}
                <div className="bg-black p-3 flex justify-between">
                  <h3 className='text-xl'>Update profile</h3>
                  <button onClick={()=>setOffCanvas(false)}><FaX className='text-white'/></button>
                </div>
                {/* body */}
                <div className="flex justify-center items-center flex-col my-5">
                  {/* image */}
                  <label htmlFor="uploadimg">
                  <input onChange={e=>handleUploadPicture(e.target.files[0])} type="file" id='uploadimg' hidden />
                  {
                    existingPicture ?
                    <img width={'100px'} style={{borderRadius:"50%"}} src={preview?preview:existingPicture.startsWith("https://lh3.googleusercontent.com/")?existingPicture:`${serverURL}/uploads/${existingPicture}`} alt="" />
                    :
                    <img width={'100px'} style={{borderRadius:"50%"}} src={preview?preview:"/public/user.png"} alt="" />
                  
                  }
                  
                  </label>
                  <button style={{marginTop:'-20px',borderRadius:'50%'}}  className='bg-yellow-300 p-3 text-white rounded ms-20'><FaPen/></button>
                  {/* name */}
                  <div className="mt-10 w-full px-5">
                    <input value={userDetails.username} onChange={e=>setuserDetails({...userDetails,username:e.target.value})} type="text" placeholder='username' className='border border-gray-400 p-2 rounded w-full'/>
                  </div>
                  {/* password */}
                  <div className="mt-5 w-full px-5">
                    <input value={userDetails.password} onChange={e=>setuserDetails({...userDetails,password:e.target.value})}  type="password" placeholder='New password' className='border border-gray-400 p-2 rounded w-full'/>
                  </div>
                  {/*confirm password */}
                  <div className="mt-5 w-full px-5">
                    <input value={confirmPassword} onChange={e=>checkPasswordMatch(e.target.value)} type="password" placeholder='confirm password' className='border border-gray-400 p-2 rounded w-full'/>
                  </div>
                  {
                    !passwordMatch && 
                    <div className='mb-3 w-full px-5 font-bold text-red-600'>*confirm password must match with new password</div>
                  }
                  {/* bio */}
                  <div className="mt-5 w-full px-5">
                    <input value={userDetails.bio} onChange={e=>setuserDetails({...userDetails,bio:e.target.value})}  type="text" placeholder='Bio' className='border border-gray-400 p-2 rounded w-full'/>
                  </div>
                  {/* button */}
                  <div className="mb-3 flex justify-end mt-5">
                    <button onClick={resetForm} className="px-3 py-2 rounded bg-red-600 text-white me-3">RESET</button>
                    <button onClick={handleProfileUpdate} className="px-3 py-2 rounded bg-green-600 text-white" disabled={!passwordMatch?true:false}>UPDATE</button>
                  </div>
                </div>
            </div>
        </div>
        }
        <ToastContainer
      position="top-right"
      autoClose={2000}
      theme='colored'/>
    </>
  )
}

export default Edit