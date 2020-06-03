import React,{useState, useEffect} from 'react';
import {getChatUsers} from "../api/userApi"
import ChatItem from '../components/ChatItem'
import socketIOClient from 'socket.io-client'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addMess, removeMess,initNotification,addNotification} from "../store/actions/actions";
import {connectToServer} from '../services/socket.service'


interface IUsersProps {
    email:any
}

const ChatList: React.FunctionComponent<IUsersProps> = (props:any) => {
    const [data,setData] = useState<any>([])
    const [endpoint,setEndpoint] = useState(`https://practick.herokuapp.com/`)
    const socket = socketIOClient(endpoint);

    useEffect(()=>{
        getChatUsers(props.email).then(res=>{
            setData(res)
            const dat:any={}
            res.map((el:any)=>{
                connectToServer(socket,props.email,el.room)
                dat[el.room]=0
                // if(localStorage.getItem(`${props.email}${el.room}`) === null || localStorage.getItem(`${props.email}${el.room}`) === 'false'){
                //     socket.emit('new-user', el.room)
                //     console.log("11111111111111")
                //     localStorage.setItem(`${props.email}${el.room}`,'true')
                // }
            })
            props.initNotification(dat)
            
        })
    },[])
    

    useEffect(()=>{
        socket.on('chat-message', (data:any) => {
            if(window.location.pathname === '/chat'){
                console.log("herererere"+data.message)
                if(data.email !== props.userInf.email){
                    props.addMess({mess:data.message,name:data.name})
                }
            }else{
                props.addNotification(data.room)
                alert("You have SMS from"+data.name)
                
            }
        })
    })

    return (
        <div>
            {data.map((el:any)=>{
                return (
                    <>
                        <ChatItem data={el}/>
                    </>
                )
            })}
        </div>
    )
};


const mapStateToProps = ( state:{user:any,users:any,messages:any,room:any,notifications:any} ) => {
    return {
        userInf:state.user,
        userAll:state.users.users,
        mess:state.messages.messages,
        roomChat:state.room.room,
        notification:state.notifications.notifications
    }
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        dispatch,
        ...bindActionCreators({
            addMess,removeMess,initNotification,addNotification
        }, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChatList);