
export const connectToServer = (socket:any,email:any,room:any) =>{
    if(localStorage.getItem(`${email}${room}`) === null || localStorage.getItem(`${email}${room}`) === 'false'){
        socket.emit('new-user', room)
        console.log("11111111111111")
        localStorage.setItem(`${email}${room}`,'true')
    }
}