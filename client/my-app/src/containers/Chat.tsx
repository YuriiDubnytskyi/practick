import React,{useState, useEffect} from 'react';

import socketIOClient from 'socket.io-client'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addMess, removeMess} from "../store/actions/actions";
import Header from '../components/Header';
import { userInfo } from 'os';
import { useHistory } from 'react-router-dom';
import {updateMess} from "../api/userApi"


//const socket = io.connect('http://localhost:5000')
interface IMainProps {
    auth:any
}

const Chat: React.FunctionComponent<IMainProps> = (props:any) => {
    const [endpoint,setEndpoint] = useState('localhost:5000')

    const [mess,setMess] = useState('')
    const [arrmess,setArrmess] = useState<any>([])
    let history = useHistory();
    const socket = socketIOClient(endpoint);

    const sendMsg =()=>{
        console.log("room"+props.roomChat)
        const socket = socketIOClient(endpoint);
        props.addMess({mess,name:props.userInf.name})
        socket.emit('send-chat-message', props.roomChat, mess, props.userInf.email, props.userInf.name)
        let data = props.mess
        data.push({mess,name:props.userInf.name})
        console.log('66666666666666666666666')
        updateMess({room:props.roomChat,mess:data})
        setMess('')
    }
   
    useEffect(()=>{
        
        if(localStorage.getItem(props.userInf.email) === 'false'){
            socket.emit('new-user', props.roomChat)
            localStorage.setItem(props.userInf.email,'true')
        }
    },[])
    // useEffect(()=>{
    //     socket.on('user-connected', (data:any) => {
    //         localStorage.setItem(data.room,'true')
    //     })
    // })
    useEffect(()=>{
        socket.on('chat-message', (data:any) => {
            console.log("heredata"+arrmess)
            if(data.email !== props.userInf.email){
                props.addMess({mess:data.message,name:data.name})
            }
        })
    })
        
    const leaveRoom = () => {
        //updateMess({room:props.roomChat,mess:props.mess})
        props.removeMess()
        history.push('/main')
    }
    
    return (
        <div>
            <button onClick={leaveRoom}></button>
            {props.roomChat}
            {props.mess.map((el:any)=>{ 
                return <p>{el.name} -- {el.mess}</p>    
            })}
            <input value={mess} onChange={(e:any)=>setMess(e.target.value)}/>
            <button onClick={sendMsg}>Send</button>
        </div>
    )

};


const mapStateToProps = ( state:{user:any,users:any,messages:any,room:any} ) => {
    return {
        userInf:state.user,
        userAll:state.users.users,
        mess:state.messages.messages,
        roomChat:state.room.room
    }
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        dispatch,
        ...bindActionCreators({
            addMess,removeMess
        }, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Chat);