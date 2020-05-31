import React,{useState, useEffect} from 'react';
import {getUsers,createOrSearchChat} from "../api/userApi"
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getAllUsers} from "../store/actions/actions";

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
        <div>
            <input placeholder="Search user" onChange={filterUsersInput}/>
            {filterUsers.map((el:any)=>{return <><p>{el.nickname}</p><button onClick={()=>props.startChat(el.email)}>Chat+</button></>})}
            {/* {props.users.map((el:any)=>{return <><p>{el.nickname}</p><button onClick={()=>props.startChat(el.email)}>Chat+</button></>})} */}
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

export default connect(mapStateToProps,mapDispatchToProps)(Users);
//  export default Users