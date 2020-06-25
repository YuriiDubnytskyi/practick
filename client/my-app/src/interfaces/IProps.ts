//Components
export interface IChatItemProps {
    data:{
        users:string[]|[],
        room:string,
        messages:{
            mess:string,
            name:string
        }[]|[]
    },
    chatGo:Function,
    userInf:{
        id:string,
        name?:string,
        email:string,
        nickname?:string,
        family_name?:string,
        isAuth:boolean
    },
    userAll:{
        email: string,
        family_name?: string,
        name?: string,
        nickname?: string,
        __v: number,
        _id: string
    }[]|[],
    notification:({
        [key:string]:number
    })[]
}