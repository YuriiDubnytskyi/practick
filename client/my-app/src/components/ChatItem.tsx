import React,{useState, useEffect} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addRoom,addInitMess} from "../store/actions/actions";
import { useHistory } from 'react-router-dom';
import {getChatMessages} from '../api/userApi'
import {findUser} from '../services/users.service'

interface IChatItemProps {
    data:any
}

const ChatItem: React.FunctionComponent<IChatItemProps> = (props:any) => {
    const [item,setItem] = useState<any>([])
    const [message,setMess] = useState<any>([])
    const [users,setUsers] = useState<any>('')
    const [room,setRoom] = useState<any>('')
    let history = useHistory();

    useEffect(()=>{
        setRoom(props.data.room)
        setMess(props.data.messages)
        if(props.data.users[0] === props.userInf.email){
            setUsers(props.data.users[1])
        }else{
            setUsers(props.data.users[0])
        }
    },[])

    const chatGo = () => {
        if(props.notification[0][room] !== 0){
            getChatMessages(room).then((mes)=>{
                console.log("mmmmmeeeessss"+mes)
                props.addInitMess(mes)        
            })
        }else{
            props.addInitMess(message)
        }
        console.log("hereMess"+props.data)
        props.addRoom(room)
        history.push('/chat')
    }
    return (
        <div>
            <p>
                {findUser(props.userAll,users)}
            </p>
            <button onClick={chatGo}>Go Chat</button>
            <p>{props.notification.length === 0? <></>:<>{props.notification[0][room]}</>}
            </p>
            
    
        </div>
    )
};

const mapStateToProps = ( state:{user:any,users:any,messages:any,notifications:any} ) => {
    return {
        userInf:state.user,
        userAll:state.users.users,
        mess:state.messages.messages,
        notification:state.notifications.notifications
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
