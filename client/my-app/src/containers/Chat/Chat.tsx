import React,{useState, useEffect} from 'react';
import socketIOClient from 'socket.io-client'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addMess, removeMess,addNotification} from "../../store/actions/actions";
import { useHistory } from 'react-router-dom';
import {updateMess} from "../../api/userApi"
import {connectToServer} from '../../services/socket.service'
import './Chat.css'
import { userInfo } from 'os';

//const socket = io.connect('http://localhost:5000')
interface IMainProps {
    auth:any
}

const Chat: React.FunctionComponent<IMainProps> = (props:any) => {
    //const [endpoint,setEndpoint] = useState(`https://practick.herokuapp.com/`)
    const [endpoint,setEndpoint] = useState(`localhost:5000`)
    const [mess,setMess] = useState('')
    const [arrmess,setArrmess] = useState<any>([])
    const [chatUser,setUserChat] = useState('')
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
        if(props.userInf.name===''){
            for (let [key, value] of Object.entries(localStorage)) {
                if(key !== "access_token" && key !== "id_token" && key !== "expires_at" && key !== "scopes"){
                    localStorage.setItem(key,'false')
                }
            }
            history.push('/about')
        }else{
            connectToServer(socket,props.userInf.email,props.roomChat)
            const userEmail =props.roomChat.replace(props.userInf.email,'')
            const userE = props.userAll.filter((el:any)=>el.email===userEmail) 
            setUserChat(userE[0].name)
        }
        
    },[])
    useEffect(()=>{
        
    },[])
    
    useEffect(()=>{
        socket.on('chat-message', (data:any) => {
            console.log("heredata"+arrmess)
            console.log("herererere888888888888888888888888"+history)
            if(window.location.pathname === '/chat/'+data.room){
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
    
    const keyPressed = (e:any) => {
        if(e.key === "Enter"){
            sendMsg()
        }
    }

    return (
        //Start-----------
        <div className=''>
            <header className='header-chat'>
                <div className="logo1"><p className="logo__text1">WebChat</p></div>
                <p className='header-p'>
                    <button className='header-btn' onClick={leaveRoom}>EXIT CHAT</button>
                </p>
                <div className="logo2"><p className="logo__text2">WebChat</p></div>
            </header>  
            
            <div className='wrapper2'>
                <p className='title-room'>{chatUser}---{props.userInf.name}</p>
                <div className='chat-mess'>
                    {props.mess.map((el:any)=>{ 
                        if(el.name === props.userInf.name){
                            return <p className='right-mess'>{el.mess}</p> 
                        }else{
                            return <p className='left-mess'>{el.mess}</p> 
                        }   
                    })}
                </div>
                <div className='send-mess'>
                    <textarea rows={3} className='send-mess_input' value={mess} onChange={(e:any)=>setMess(e.target.value)} onKeyPress={keyPressed}></textarea>
                    <button className='send-mess_btn' onClick={sendMsg}>Send</button>
                </div>
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