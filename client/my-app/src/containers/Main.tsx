import React,{useState, useEffect} from 'react';
import Header from '../components/Header'
import Chat from './Chat'
import {getUsers,createOrSearchChat} from "../api/userApi"
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getAllUsers,addRoom} from "../store/actions/actions";
// import { serialize } from 'v8';
// import user from '../store/reducers/user';
import Users from './Users'
import ChatList from './ChatList'
import { useHistory } from 'react-router-dom';
import socketIOClient from 'socket.io-client'

interface IMainProps {
  auth:any
}

const Main: React.FunctionComponent<IMainProps> = (props:any) => {
    // const [users,setUsers] = useState<any>([])
    const [chat,setChat] = useState<boolean>(false)
    const [room,setRoom] =useState<any>('')
    // useEffect(()=>{
    //     getUsers()
    //     .then((arr) => {
    //         props.getAllUsers(arr)
    //         setUsers(arr.filter((el:any)=> el.email !== props.userInf.email))
    //     })
    // },[])
    const [endpoint,setEndpoint] = useState(`https://practick.herokuapp.com:${process.env.PORT}`)
    const socket = socketIOClient(endpoint);
    let history = useHistory();
    useEffect(()=>{
        if(props.userInf.name===''){
            history.push('/about')
        }
        if(localStorage.getItem(props.userInf.email) === null){
            localStorage.setItem(props.userInf.email,'false')
        }        
    },[])
    const startChat = (nickname:any) =>{
        const data ={
            id1:nickname,
            id2:props.userInf.email
        }
        console.log("chat"+data)
        createOrSearchChat(data.id1,data.id2).then((res)=>{
            addRoom(res.room)
            history.push('/chat')
        })

    }
    useEffect(()=>{
        socket.on('chat-message', (data:any) => {
            console.log("heredata121212121212"+data)
        })
    })

    return (
        <div>
            <div>
                <Header auth={props.auth}/>
                {/* {chat ? <Chat room={room} name={props.userInf.name}/>:
                <>
                    Hello from Main
                    {users.map((el:any)=>{return <><p>{el.nickname}</p><button onClick={()=>startChat(el.email)}>Chat+</button></>})}
                </>} */}
                <Users startChat={startChat}/>

                <ChatList email={props.userInf.email}/>
            </div>
        </div>
    )
};

const mapStateToProps = ( state:{user:any,users:any} ) => {
    return {
        userInf:state.user,
        userAll:state.users.users
    }
};
const mapDispatchToProps = (dispatch:any) => {
    return {
        dispatch,
        ...bindActionCreators({
            getAllUsers,
            addRoom
        }, dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Main);
// export default Main