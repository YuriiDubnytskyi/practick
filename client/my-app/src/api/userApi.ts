import axios from "axios"

export const createUser = (user:any) => axios.post("/api/users/create",user).then((res:any)=>res)

export const isUserExist = (email:any) => 
    axios.get("/api/users/search/"+email,email).then( (res)=>{
    console.log("resultFull"+res)
    return res
})

export const updateUser = (userData:any) => axios.put("/api/users/updateUser",userData).then((res)=>res.data)

export const deleteUserAcount = (id:any) => axios.delete("/api/users/deleteUser/"+id,id).then((res)=>res.status)

export const getUsers = () => axios.get("/api/users/getAll").then((res)=>res.data)

export const createOrSearchChat = (id1:any,id2:any) => axios.get("/api/rooms/getRoom/"+id1+"/"+id2).then((res)=>res.data)
