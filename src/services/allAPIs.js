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

// /books/home - homepage books api : called by hom component when page loads
export const getHomePageBooksAPI = async ()=>{
   return await commonAPI("GET",`${serverURL}/books/home`,{})
}

//  /books/all - bookpage api called by books component when page loads
export const getAllBooksPageAPI = async (reqHeader,searchKey)=>{
   return await commonAPI("GET",`${serverURL}/books/all?search=${searchKey}`,{},reqHeader)
}

// user-books/all - called by bookstatus when page loads - authorized user
export const getAllUserBooksAPI = async (reqHeader)=>{
   return await commonAPI("GET",`${serverURL}/user-books/all`,{},reqHeader)
}

// user-buy/all - called by bookstatus when page loads - authorized user
export const getUserBoughtBooksAPI = async (reqHeader)=>{
   return await commonAPI("GET",`${serverURL}/user-buy/all`,{},reqHeader)
}

//  /book/:id/view - get request by view when page loads
export const viewBookAPI = async (reqHeader,id)=>{
   return await commonAPI("GET",`${serverURL}/book/${id}/view`,{},reqHeader)
}