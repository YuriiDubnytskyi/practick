export const findUser = (userAll:any,users:any)  => {
    const findUserName = userAll.filter((el:any)=> el.email === users )
    console.log(findUserName[0]+"9090909090909090909")
    return findUserName.length === 0 ?'': findUserName[0].name
}
        
        