import React,{useState,useEffect} from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import Footer from '../../components/Footer'
import { IoSettings } from 'react-icons/io5'
import { FaPen } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import serverURL from '../../services/serverURL'
import { editUserAPI } from '../../services/allAPIs'
import { toast, ToastContainer } from 'react-toastify'




function AdminProfile() {

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

const handleUploadPicture = (imgFile)=>{
  setuserDetails({...userDetails,picture:imgFile})
  const url = URL.createObjectURL(imgFile)
  setPreview(url)
}

const checkPasswordMatch = (data)=>{
  setConfirmPassword(data)
  userDetails.password == data ? setPasswordMatch(true):setPasswordMatch(false)
}

const resetForm = ()=>{
  const user = JSON.parse(sessionStorage.getItem("user"))
  setuserDetails({...userDetails,id:user._id,username:user.username,password:"",role:user.role,bio:user.bio})
  setPreview("")
  setConfirmPassword("")
  setPasswordMatch(true)
}

const handleProfileUpdate = async ()=>{
  const {username,password,bio} = userDetails
  if(!username || !password || !confirmPassword){
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
      <AdminHeader/>
      <div className='md:grid grid-cols-5'>
      <div className="col-span-1">
      <AdminSidebar/>
      </div>
      <div className="col-span-4 p-10">
        <h1 className="font-bold text-3xl text-center my-5">Settings</h1>
        <div className="md:grid grid-cols-2 gap-10">
          {/* text */}
          <div>
            <h2 className=' text-xl font-bold mb-5'>Welcome to the Admin settigs panel</h2>
            <p className='text-justify mb-5'>
              The Admin Settings panel allows you to manage every part of your bookstore with ease. From updating store information to customizing the site’s appearance, all controls are organized for quick access. Use this section to manage books, users, payments, notifications, and overall store performance. Make changes anytime to keep your bookstore running smoothly.
              This is the central dashboard for configuring your online bookstore. Here you can adjust general settings, upload logos, manage categories, and control user permissions. All administrative tools are available in one place, ensuring a seamless and efficient management experience.
            <p className='font-bold mt-5 flex items-center'><IoSettings className='me-2'/> Account Settings</p>
            <p className='text-justify mt-2'>
              Here you can manage your personal account information and customize your profile settings. Update your name, email, phone number, and password to keep your account secure and up-to-date. You can also manage login preferences, enable two-step verification, and review your recent activity. Your account settings help ensure a personalized and secure experience across the platform.
            </p>
            </p>
          </div>
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
                  {/* button */}
                  <div className="mb-3 flex justify-end mt-5">
                    <button onClick={resetForm} className="px-3 py-2 rounded bg-red-600 text-white me-3">RESET</button>
                    <button onClick={handleProfileUpdate} className="px-3 py-2 rounded bg-green-600 text-white" disabled={!passwordMatch?true:false}>UPDATE</button>
                  </div>
                </div>
        </div>
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

export default AdminProfile