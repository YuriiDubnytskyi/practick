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