import React,{useState, useEffect} from 'react';
import {getUsers} from "../../api/userApi"
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getAllUsers} from "../../store/actions/actions";
import UserItem from '../../components/UserItem/UserItem'
import "./Users.css"
import {IUserRedux} from '../../interfaces/IRedux'

interface IUsersProps {
  startChat:Function,
  userInf:IUserRedux,
  getAllUsers:Function
}

const Users: React.FunctionComponent<IUsersProps> = (props:IUsersProps) => {
    const [inetialUsers, setInitial] = useState<{
        email: string,
        family_name: string,
        name: string,
        nickname: string,
        __v: number,
        _id: string
    }[]>([])
    const [filterUsers, setFilterUsers] = useState<{
        email: string,
        family_name: string,
        name: string,
        nickname: string,
        __v: number,
        _id: string
    }[]>([])
    
    useEffect(()=>{
        getUsers()
        .then((arr) => {
            props.getAllUsers(arr)
            setInitial(arr.filter((el:any)=> el.email !== props.userInf.email))
        })
    },[])
    
    const filterUsersInput = (event:any) =>{
        const updatedList = inetialUsers.filter((item:{
            email: string,
            family_name: string,
            name: string,
            nickname: string,
            __v: number,
            _id: string
        })=>{
          return item.nickname.toLowerCase().search(
            event.target.value.toLowerCase()) !== -1;
        });
        if(event.target.value === ''){
            setFilterUsers([])
        }else{
            setFilterUsers(updatedList)
        }
    }

    return (
        <div className='users-container'>
            <div className='search-users'>
                <input className='' placeholder="Search user" onChange={filterUsersInput}/>
            </div>
            <div className='line'></div>
            {filterUsers.map((el:any)=>{return <UserItem nickname={el.nickname} startChat={props.startChat} email={el.email}/>})}
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
            getAllUsers
        }, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Users);