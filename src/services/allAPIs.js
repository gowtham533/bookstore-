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

// /user/:id/edit - put request by edit when update btn clicked
export const editUserAPI = async (id,reqBody,reqHeader)=>{
   return await commonAPI("PUT",`${serverURL}/user/${id}/edit`,reqBody,reqHeader)
}

// /admin-books/all : admin bookpage api : called by admin resources component when page loads - authorized user
export const getAllAdminBooksAPI = async (reqHeader)=>{
   return await commonAPI("GET",`${serverURL}/admin-books/all`,{},reqHeader)
}

// /admin-users/all : get rqst by admin collection componentcwhen tab 2 is open
export const getAllAdminUsersAPI = async (reqHeader)=>{
   return await commonAPI("GET",`${serverURL}/admin-users/all`,{},reqHeader)
}

// books/693fac254859e870f6d0b1ed/update : put rqst by admincollection when aprroved button clicked
export const updateBookStatusAPI = async (id,reqHeader)=>{
   return await commonAPI("PUT",`${serverURL}/books/${id}/update`,{},reqHeader)
}

// /books/:id - delete rqst by bookstatus component when delete button clicked
export const removeBookAPI = async (id,reqHeader)=>{
   return await commonAPI("DELETE",`${serverURL}/books/${id}`,{},reqHeader)
}

// /books/:id/buy put request by view component when buy btn clicked
export const purchaseBookAPI = async (id,reqHeader)=>{
   return await commonAPI("PUT",`${serverURL}/books/${id}/buy`,{},reqHeader)
}
