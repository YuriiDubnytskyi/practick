export type TcreateUser = {
    email:string,
    nickname:string,
    name:string,
    family_name:string
    
}


export type TupdateUser = {
    id?:string,
    name:string,
    nickname:string,
    family_name:string
}

export type TcreateOrSearchChat = {
    id1:string,
    id2:string
}

export type TupdateMess = {
    room:string,
    mess:{
        email:string,
        mess:string
    }[]
}

export type TcreateNotifi = {
    email:string,
    room:string
}

export type TaddNotifi = {
    email:string,
    room:string
}
