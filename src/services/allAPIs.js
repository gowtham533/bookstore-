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
