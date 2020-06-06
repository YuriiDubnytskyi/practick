import React,{useState, useEffect} from 'react';
import {getUsers} from "../../api/userApi"
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getAllUsers} from "../../store/actions/actions";
import UserItem from '../../components/UserItem/UserItem'
import "./Users.css"

interface IUsersProps {
  startChat:any
}

const Users: React.FunctionComponent<IUsersProps> = (props:any) => {
    const [inetialUsers, setInitial] = useState<any>([])
    const [filterUsers, setFilterUsers] = useState<any>([])
    
    useEffect(()=>{
        getUsers()
        .then((arr) => {
            props.getAllUsers(arr)
            setInitial(arr.filter((el:any)=> el.email !== props.userInf.email))
        })
    },[])
    
    const filterUsersInput = (event:any) =>{
        const updatedList = inetialUsers.filter(function(item:any){
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
        //Start -----------
        <div className=''>
            <input className='' placeholder="Search user" onChange={filterUsersInput}/>
            {filterUsers.map((el:any)=>{return <UserItem nickname={el.nickname} startChat={props.startChat} email={el.email}/>})}
        </div>
        //End----------------
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
            getAllUsers
        }, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Users);