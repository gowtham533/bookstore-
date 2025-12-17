import commonAPI from "./commonAPI"
import serverURL from "./serverURL"

// register API - called bu auth when register button is clicked

export const registerAPI = async (userDetails)=>{
   return await commonAPI("POST",`${serverURL}/register`,userDetails)
}

// login api
export const loginAPI = async (userDetails)=>{
   return await commonAPI("POST",`${serverURL}/login`,userDetails)
}

// google login
export const googleLoginAPI = async (userDetails)=>{
   return await commonAPI("POST",`${serverURL}/google/sign-in`,userDetails)
}

// /user/book/add - addbook api: called by sellbook componeent when add book btn clicked
export const addBookAPI = async (reqBody,reqHeader)=>{
   return await commonAPI("POST",`${serverURL}/user/book/add`,reqBody,reqHeader)
}