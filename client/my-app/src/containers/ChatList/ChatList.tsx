import React,{useState, useEffect} from 'react';
import {getChatUsers,getChatMessages,getNotification,addNotificationServer} from "../../api/userApi"
import ChatItem from '../../components/ChatItem/ChatItem'
import socketIOClient from 'socket.io-client'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addMess, removeMess,initNotification,addNotification,addInitMess,addRoom} from "../../store/actions/actions";
import {connectToServer} from '../../services/socket.service'
import './ChatList.css'
import { useHistory } from 'react-router-dom';
import {INotificationRedux,IMessagesRedux} from '../../interfaces/IRedux'

interface IChatListProps {
    email:string,
    notification:{
        [key:string]:number
    }[]|[],
    addMess:Function, 
    removeMess:Function,
    initNotification:Function,
    addNotification:Function,
    addInitMess:Function,
    addRoom:Function
}

const ChatList: React.FunctionComponent<IChatListProps> = (props:IChatListProps) => {
    const [data,setData] = useState<any>([])
    const [endpoint,setEndpoint] = useState(`https://practick.herokuapp.com/`)
    //const [endpoint] = useState(`localhost:5000`)
    const socket = socketIOClient(endpoint);
    let history = useHistory();

    useEffect(()=>{
        getChatUsers(props.email).then(res=>{
            setData(res)
            //const dat:any={}
            res.forEach((el:any)=>{
                connectToServer(socket,props.email,el.room)
                //dat[el.room]=0
            })
            //props.initNotification(dat)
        })
        getNotification(props.email).then(res=>{
            props.initNotification(res)
        })
    },[])
    

    useEffect(()=>{
        socket.on('chat-message', (data:{ message: string,email:string,name:string,room:string}) => {
            console.log("herelocation"+window.location)
            if(window.location.pathname === '/chat/'+data.room){
                if(data.email !== props.email){
                    props.addMess({mess:data.message,email:data.email})
                }
            }else{
                addNotificationServer({email:props.email,room:data.room})
                props.addNotification(data.room)
                alert("You have SMS from"+data.name)
            }
        })
    })

    const chatGo = (room:string,message:IMessagesRedux) => {
        if(props.notification[0][room] != 0){
            getChatMessages(room).then((mes:IMessagesRedux)=>{
                props.addInitMess(mes)        
            })
        }else{
            props.addInitMess(message)
        }
        props.addRoom(room)
        history.push('/chat/'+room)
    }

    return (
        <div className='chatlist-container'>
            {data.map((el:any)=>{
                return (
                    <>
                        <ChatItem data={el} chatGo={chatGo}/>
                    </>
                )
            })}
        </div>
    )
};

const mapStateToProps = ( state:{notifications:INotificationRedux} ) => {
    return {
        notification:state.notifications.notifications
    }
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        dispatch,
        ...bindActionCreators({
            addMess,removeMess,initNotification,addNotification,addInitMess,addRoom
        }, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChatList);