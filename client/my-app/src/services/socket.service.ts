export const connectToServer = (socket:any,email:string,room:string) =>{
    if(localStorage.getItem(`${email}${room}`) === null || localStorage.getItem(`${email}${room}`) === 'false'){
        socket.emit('leave-room',room)
        socket.emit('new-user', room)
        localStorage.setItem(`${email}${room}`,'true')
    }
}