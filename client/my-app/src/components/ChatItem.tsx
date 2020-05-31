import React,{useState, useEffect} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addRoom,addInitMess} from "../store/actions/actions";
import { useHistory } from 'react-router-dom';
import socketIOClient from 'socket.io-client'

interface IChatItemProps {
    data:any
}

const ChatItem: React.FunctionComponent<IChatItemProps> = (props:any) => {
    const [item,setItem] = useState<any>([])
    const [message,setMess] = useState<any>([])
    const [room,setRoom] = useState<any>('')
    let history = useHistory();

    useEffect(()=>{
        setRoom(props.data.room)
        setMess(props.data.messages)
        
    },[])
    const [endpoint,setEndpoint] = useState('localhost:5000')
    const socket = socketIOClient(endpoint);

    useEffect(()=>{
        socket.on('chat-message', (data:any) => {
            console.log("heredata11"+data)      
        })
    })

    const chatGo = () => {
        props.addInitMess(message)
        console.log("hereMess"+props.data)
        props.addRoom(room)
        history.push('/chat')
    }
    return (
        <div>
           <p>{room}</p>
           <button onClick={chatGo}>Go Chat</button>
        </div>
    )
};

const mapStateToProps = ( state:{user:any,users:any,messages:any} ) => {
    return {
        userInf:state.user,
        userAll:state.users.users,
        mess:state.messages.messages,
        
    }
};
const mapDispatchToProps = (dispatch:any) => {
    return {
        dispatch,
        ...bindActionCreators({
            addInitMess,
            addRoom
        }, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChatItem);
