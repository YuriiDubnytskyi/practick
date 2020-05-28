import React,{useState, useEffect} from 'react';
import socketIOClient from 'socket.io-client'
    
//const socket = io.connect('http://localhost:5000')
interface IMainProps {
    room:any,
    name:any
}

const Chat: React.FunctionComponent<IMainProps> = (props:any) => {
    const [endpoint,setEndpoint] = useState('localhost:5000')

    const [mess,setMess] = useState('')
    const [arrmess,setArrmess] = useState<any>([])

    const socket = socketIOClient(endpoint);

    const sendMsg =()=>{
        console.log("room"+props.room)
        const socket = socketIOClient(endpoint);
        setArrmess([...arrmess,mess])
        socket.emit('send-chat-message', props.room, mess)
        setMess('')
    }
    useEffect(()=>{
        socket.emit('new-user', props.room, props.name)
    },[])
       
        socket.on('chat-message', (data:any) => {
            console.log("heredata"+data)
            setArrmess([...arrmess,data.message])
        })
    
    return (
        <div>
            {props.room}
            {arrmess.map((el:any)=>{ 
                return <p>{el}</p>    
            })}
            <input value={mess} onChange={(e:any)=>setMess(e.target.value)}/>
            <button onClick={sendMsg}>Send</button>
        </div>
    )
};




export default Chat;