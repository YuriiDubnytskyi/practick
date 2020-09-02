//ChatItem
export const findUser = (userAll:{
    email: string,
    family_name?: string,
    name?: string,
    nickname?: string,
    __v: number,
    _id: string
}[],users:string)  => {
    const findUserName = userAll.filter((el:any)=> el.email === users )
    return findUserName.length === 0 ?'': findUserName[0].name
}
//About

type TshowData = {
    email: string,
    family_name: string,
    name: string,
    nickname: string,
    __v?: number,
    _id?: string,
    id?: string,
    status?:number
}
export const filterUserData = (obg:TshowData,idd:boolean = false) => {
    let userId
    if(idd){
        userId=obg.id
    }else{  
        userId=obg._id
    }
    return {name:obg.name,email:obg.email,nickname:obg.nickname,family_name:obg.family_name,id:userId}
}