import React,{useState, useEffect} from 'react';
import Header from '../components/Header'
import Chat from './Chat'
import {getUsers,createOrSearchChat} from "../api/userApi"
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getAllUsers} from "../store/actions/actions";
import { serialize } from 'v8';
import user from '../store/reducers/user';


interface IMainProps {
  auth:any
}

const Main: React.FunctionComponent<IMainProps> = (props:any) => {
    const [users,setUsers] = useState<any>([])
    const [chat,setChat] = useState<boolean>(false)
    const [room,setRoom] =useState<any>('')
    useEffect(()=>{
        getUsers()
        .then((arr) => {
            props.getAllUsers(arr)
            setUsers(arr)
        })
    },[])
    
    const startChat = (nickname:any) =>{
        const data ={
            id1:nickname,
            id2:props.userInf.email
        }
        console.log("chat"+data)
        createOrSearchChat(data.id1,data.id2).then((res)=>{
            setRoom(res.room)
            setChat(true)
        })
    }

    return (
        <div>
            <div>
                <Header auth={props.auth}/>
                {chat ? <Chat room={room} name={props.userInf.name}/>:
                <>
                    Hello from Main
                    {users.map((el:any)=>{return <><p>{el.nickname}</p><button onClick={()=>startChat(el.email)}>Chat+</button></>})}
                </>}
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
            getAllUsers
        }, dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Main);
