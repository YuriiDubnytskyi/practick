import React,{useState, useEffect} from 'react';
import socketIOClient from 'socket.io-client'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addMess, removeMess,addNotification} from "../../store/actions/actions";
import { useHistory } from 'react-router-dom';
import {updateMess} from "../../api/userApi"
import {connectToServer} from '../../services/socket.service'
import './Chat.css'

//const socket = io.connect('http://localhost:5000')
interface IMainProps {
    auth:any
}

const Chat: React.FunctionComponent<IMainProps> = (props:any) => {
    //const [endpoint,setEndpoint] = useState(`https://practick.herokuapp.com/`)
    const [endpoint,setEndpoint] = useState(`localhost:5000`)
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
        updateMess({room:props.roomChat,mess:data})
        setMess('')
    }
   
    useEffect(()=>{
        connectToServer(socket,props.userInf.email,props.roomChat)
    },[])

    
    useEffect(()=>{
        socket.on('chat-message', (data:any) => {
            console.log("heredata"+arrmess)
            console.log("herererere888888888888888888888888"+history)
            if(window.location.pathname === '/chat'){
                if(data.email !== props.userInf.email){
                    props.addMess({mess:data.message,name:data.name})
                }
            }else{
                props.addNotification(data.room)
                alert("You have SMS from"+data.name)
               
            }
        })
    })
        
    const leaveRoom = () => {
        props.removeMess()
        history.push('/main')
    }
    
    return (
        //Start-----------
        <div className='ChatRoom'>
            <div className='BChat'>
                <button className='BEChat' onClick={leaveRoom}>EXIT CHAT</button>
            </div>
            <p className='NameChatRoom'>{props.roomChat}</p>
            {props.mess.map((el:any)=>{ 
                return <p className=''>{el.name} -- {el.mess}</p>    
            })}
            <div>
            <input className='Message' placeholder='Type a message' value={mess} onChange={(e:any)=>setMess(e.target.value)}/>
            <button className='BSend' onClick={sendMsg}>Send</button>
            </div>
        </div>
        //End-------------------
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
            addMess,removeMess,addNotification
        }, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Chat);