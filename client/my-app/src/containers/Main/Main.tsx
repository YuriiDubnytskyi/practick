import React,{ useEffect} from 'react';
import Header from '../../components/Header/Header'
import {createOrSearchChat} from "../../api/userApi"
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getAllUsers,addRoom} from "../../store/actions/actions";
import Users from '../Users/Users'
import ChatList from '../ChatList/ChatList'
import { useHistory } from 'react-router-dom';
import './Main.css'

interface IMainProps {
  auth:any
}

const Main: React.FunctionComponent<IMainProps> = (props:any) => {
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
    const startChat = (nickname:any) =>{
        const data ={
            id1:nickname,
            id2:props.userInf.email
        }
        createOrSearchChat(data.id1,data.id2).then((res)=>{
            props.addRoom(res.room)
            return res
        }).then((res)=>{
            history.push('/chat/'+res.room)
        })
    }
    
    return (
        //Start --------------
        <div className=''>
            <Header auth={props.auth}/>
            <div className='wrapper1'>
                <div className='main-container'>    
                    <Users startChat={startChat}/>
                    <ChatList email={props.userInf.email}/>
                </div>
            </div>
        </div>
        //End ---------------
    )
};

const mapStateToProps = ( state:{user:any} ) => {
    return {
        userInf:state.user
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