export interface IStoreRedux {
    user:IUserRedux,
    users:IUsersRedux,
    messages:IMessagesRedux,
    room:IRoomRedux,
    notifications:INotificationRedux
}

export interface IUserRedux {
    id:string,
    name:string,
    email:string,
    nickname:string,
    family_name:string,
    isAuth:boolean,
    id_notifications:string
}
export interface IUsersRedux {
    users:{
        email: string,
        family_name?: string,
        name?: string,
        nickname?: string,
        id_notifications:string,
        __v: number,
        _id: string
    }[]|[]
}
export interface IMessagesRedux {
    messages:{
        mess:string,
        email:string
    }[]|[]
}
export interface IRoomRedux {
    room:string
}
export interface INotificationRedux {
    notifications:{
        [key:string]:number
    }[]|[]
}
