import React,{useState, useEffect} from 'react';
import socketIOClient from 'socket.io-client'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addMess, removeMess,addNotification} from "../../store/actions/actions";
import { useHistory } from 'react-router-dom';
import {updateMess,deleteNotificationServer,addNotificationServer} from "../../api/userApi"
import {connectToServer} from '../../services/socket.service'
import {IUserRedux,IUsersRedux,IRoomRedux,IMessagesRedux} from '../../interfaces/IRedux'
import ChatInfo from '../../components/ChatInfo/ChatInfo'

interface IChatProps {
    auth:any,
    userInf:IUserRedux,
    userAll:{
        email: string,
        family_name?: string,
        name?: string,
        nickname?: string,
        id_notifications:string,
        __v: number,
        _id: string
    }[]|[],
    mess:({
        mess:string,
        email:string
    })[],
    roomChat:string,
    addMess:Function,removeMess:Function,addNotification:Function
}

const Chat: React.FunctionComponent<IChatProps> = (props:IChatProps) => {
    //const [endpoint,setEndpoint] = useState(`https://practick.herokuapp.com/`)
    const [endpoint] = useState<string>(`localhost:5000`)
    const [mess,setMess] = useState<string>('')
    const [chatUser,setUserChat] = useState<string|undefined>('')
    let history = useHistory();
    const socket = socketIOClient(endpoint);

    const sendMsg =()=>{
        const socket = socketIOClient(endpoint);
        props.addMess({mess,email:props.userInf.email})
        socket.emit('send-chat-message', props.roomChat, mess, props.userInf.email, props.userInf.name,props.userInf.id_notifications)
        let data = props.mess
        data.push({mess,email:props.userInf.email})
        updateMess({room:props.roomChat,mess:data})
        setMess('')
    }
   
    useEffect(()=>{
        if(props.userInf.name===''){
            for (let [key] of Object.entries(localStorage)) {
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
            deleteNotificationServer({email:props.userInf.email,room:props.roomChat})
        }
    },[])
    
    
    useEffect(()=>{
        socket.on('chat-message', (data:any) => {
            if(window.location.pathname === '/chat/'+data.room){
                if(data.email !== props.userInf.email){
                    props.addMess({mess:data.message,name:data.name})
                }
            }else{
                addNotificationServer({email:props.userInf.email,room:data.room})
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
        <ChatInfo
            leaveRoom = {leaveRoom}
            chatUser = {chatUser}
            name = {props.userInf.name}
            mess = {props.mess}
            email = {props.userInf.email}
            message = {mess}
            setMess = {setMess}
            keyPressed = {keyPressed}
            sendMsg = {sendMsg}
        />
    )
};


const mapStateToProps = ( state:{user:IUserRedux,users:IUsersRedux,messages:IMessagesRedux,room:IRoomRedux} ) => {
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