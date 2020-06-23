import axios from "axios"
import {
    TcreateOrSearchChat,
    TcreateUser,
    TdeleteUserAcount,
    TgetChatMessages,
    TgetChatUsers,
    TisUserExist,
    TupdateMess,
    TupdateUser
} from './userApiTypes'

export const createUser = (user:TcreateUser) => axios.post("/api/users/create",user).then((res:any) => res)

export const isUserExist = (email:string) => 
    axios.get("/api/users/search/"+email).then( (res)=>{
    console.log("resultFull"+res)
    return res
})

export const updateUser = (userData:TupdateUser) => axios.put("/api/users/updateUser",userData).then((res) => res.data)

export const deleteUserAcount = (id:string|undefined) => axios.delete("/api/users/deleteUser/"+id).then((res) => res.status)

export const getUsers = () => axios.get("/api/users/getAll").then((res)=>res.data)

export const createOrSearchChat = ({id1,id2}:TcreateOrSearchChat) => axios.get("/api/rooms/getRoom/"+id1+"/"+id2).then((res) => res.data)

export const getChatUsers = (email:string) => axios.get("/api/rooms/getRoomsUsers/"+email).then((res) => res.data)

export const getChatMessages = (room:string) => axios.get("/api/rooms/getRoomsMessages/"+room).then((res) => res.data[0].messages)

export const updateMess = (messData:TupdateMess) => axios.put("/api/rooms/updateMess",messData).then((res) => res.data)