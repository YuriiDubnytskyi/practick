import {isUserExist} from "../api/userApi"

export const userAuth = async (profile:any) =>{
        console.log(!profile.email_vefified)
        if(profile.email_verified){
            return true            
        }else{
            return false
        }
}

export const getUser = async (email:string) =>{ 
    const result = await isUserExist(email)
    return await result.data
}