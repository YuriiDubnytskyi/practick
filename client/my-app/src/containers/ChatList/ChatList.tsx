import React,{useState, useEffect} from 'react';
import {getChatUsers} from "../../api/userApi"
import ChatItem from '../../components/ChatItem/ChatItem'
import socketIOClient from 'socket.io-client'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addMess, removeMess,initNotification,addNotification} from "../../store/actions/actions";
import {connectToServer} from '../../services/socket.service'
import './ChatList.css'

interface IUsersProps {
    email:any
}

const ChatList: React.FunctionComponent<IUsersProps> = (props:any) => {
    const [data,setData] = useState<any>([])
    const [endpoint,setEndpoint] = useState(`https://practick.herokuapp.com/`)
    //const [endpoint,setEndpoint] = useState(`localhost:5000`)
    const socket = socketIOClient(endpoint);

    useEffect(()=>{
        getChatUsers(props.email).then(res=>{
            setData(res)
            const dat:any={}
            res.map((el:any)=>{
                connectToServer(socket,props.email,el.room)
                dat[el.room]=0
            })
            props.initNotification(dat)
            
        })
    },[])
    

    useEffect(()=>{
        socket.on('chat-message', (data:any) => {
            console.log("herelocation"+window.location)
            if(window.location.pathname === '/chat/'+data.room){
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
        //Start ----------------
        <div className='chatlist-container'>
            {data.map((el:any)=>{
                return (
                    <>
                        <ChatItem data={el}/>
                    </>
                )
            })}
        </div>
        //End-------------------
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