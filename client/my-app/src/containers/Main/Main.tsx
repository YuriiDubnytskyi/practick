import React,{ useEffect} from 'react';
import Header from '../../components/Header/Header'
import {createOrSearchChat} from "../../api/userApi"
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getAllUsers,addRoom,addInitMess} from "../../store/actions/actions";
import Users from '../Users/Users'
import ChatList from '../ChatList/ChatList'
import { useHistory } from 'react-router-dom';
import './Main.css'
import {IUserRedux} from '../../interfaces/IRedux'

interface IMainProps {
  auth:any,
  userInf:IUserRedux,
  getAllUsers:Function,
  addRoom:Function,
  addInitMess:Function
}

const Main: React.FunctionComponent<IMainProps> = (props:IMainProps) => {
    let history = useHistory();
    useEffect(()=>{
        if(props.userInf.name===''){
            for (let [key] of Object.entries(localStorage)) {
                if(key !== "access_token" && key !== "id_token" && key !== "expires_at" && key !== "scopes"){
                    localStorage.setItem(key,'false')
                }
            }
            history.push('/about')
        }
    },[])
    const startChat = (nickname:string) =>{
        const data ={
            id1:nickname,
            id2:props.userInf.email
        }
        createOrSearchChat({id1:data.id1,id2:data.id2}).then((res)=>{
            props.addRoom(res.room)
            props.addInitMess(res.messages)
            return res
        }).then((res)=>{
            history.push('/chat/'+res.room)
        })
    }
    
    return (
        <div className=''>
            <Header auth={props.auth}/>
            <div className='wrapper1'>
                <div className='main-container'>    
                    <Users startChat={startChat}/>
                    <ChatList email={props.userInf.email}/>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = ( state:{user:IUserRedux} ) => {
    return {
        userInf:state.user
    }
};
const mapDispatchToProps = (dispatch:any) => {
    return {
        dispatch,
        ...bindActionCreators({
            getAllUsers,
            addRoom,
            addInitMess
        }, dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Main);