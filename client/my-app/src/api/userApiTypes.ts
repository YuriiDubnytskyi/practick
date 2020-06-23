export type TcreateUser = {
    email:string,
    nickname:string,
    name:string,
    family_name:string
}

export type TisUserExist = {
    email:string
} 

export type TupdateUser = {
    id?:string,
    name:string,
    nickname:string,
    family_name:string
}

export type TdeleteUserAcount = {
    id:string
}

export type TcreateOrSearchChat = {
    id1:string,
    id2:string
}

export type TgetChatUsers = {
    email:string
}

export type TgetChatMessages = {
    room:string
}

export type TupdateMess = {
    room:string,
    mess:{
        name:string,
        mess:string
    }[]
}