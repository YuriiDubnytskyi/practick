import React,{useState, useEffect} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addRoom,addInitMess} from "../../store/actions/actions";
import {findUser} from '../../services/users.service'
import {INotificationRedux,IUserRedux,IUsersRedux} from '../../interfaces/IRedux'
import {IChatItemProps} from '../../interfaces/IProps'
import './ChatItem.css'

const ChatItem: React.FunctionComponent<IChatItemProps> = (props:IChatItemProps) => {
    const [message,setMess] = useState<{mess:string,name:string}[]>([])
    const [users,setUsers] = useState<string>('')
    const [room,setRoom] = useState<string>('')
    
    useEffect(()=>{
        setRoom(props.data.room)
        setMess(props.data.messages)
        if(props.data.users[0] === props.userInf.email){
            setUsers(props.data.users[1])
        }else{
            setUsers(props.data.users[0])
        }
        console.log(room+"-----room")
    },[])

    return (
        <div className='chat-item-container'>
            <div className='chat-info'>
               <p className='chat-user'>
                    {findUser(props.userAll,users)}
                </p>
                <p className='chat-nitification'>{<>{props.notification.map((el:any)=>{
                    console.log(el.room)
                    if(el.room == props.data.room){
                        return <>{el.notifications}</>
                    }
                })}</>}
                </p> 
            </div>
            <button className='btn--startchat' onClick={()=>props.chatGo(room,message)}>Go Chat</button>  
        </div>
    )
};

const mapStateToProps = ( state:{user:IUserRedux,users:IUsersRedux,notifications:INotificationRedux} ) => {
    return {
        userInf:state.user,
        userAll:state.users.users,
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
