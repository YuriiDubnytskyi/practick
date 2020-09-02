import React,{useEffect,useState,useCallback} from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header'
import AboutInfo from '../../components/AboutInfo/AboutInfo'
import {updateUser,deleteUserAcount} from "../../api/userApi"
import {userAuth,getUser} from "../../services/auth.service"
import {filterUserData} from '../../services/users.service'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setUser,setUserData,updateUserData,deleteUser,userCreate} from "../../store/actions/actions";
import {IUserRedux} from '../../interfaces/IRedux'


interface IAboutProps {
    auth:any,
    userInf:IUserRedux,
    setUserData:Function,
    updateUserData:Function,
    deleteUser:Function,
    userCreate:Function,
    setUser:Function
}

type TshowData = {
    email: string,
    family_name: string,
    name: string,
    nickname: string,
    __v?: number,
    _id?: string,
    id?: string,
    status?:number
}

type TresUpdateData = {
    email: string,
    family_name: string,
    name: string,
    nickname: string,
    __v: number,
    _id: string,
    comment?:string,
    status?:number
}

const About: React.FunctionComponent<IAboutProps> = (props:IAboutProps) => {
    const [name,setName] = useState<string>('')
    const [id,setId] = useState<string|undefined>('')
    const [nickname,setNickname] = useState<string>('')
    const [family_name,setFamilyName] = useState<string>('')
    const [update,setUpdate] = useState<boolean>(false)
    const history = useHistory()
   
    useEffect(()=>{
        if(!props.userInf.isAuth){
            props.auth.getProfile((profile:any)=>{       
                const {email,nickname,name,family_name} = profile        
                userAuth(profile).then((res:boolean)=> res ?                     
                getUser(email)
                    .then((res:TshowData) => {
                        res.status!==404 ?
                            props.setUser(filterUserData(res)).then(()=>{
                                setName(res.name)
                                setNickname(res.nickname)
                                setFamilyName(res.family_name)
                            }) :
                            props.userCreate({email,nickname,name,family_name},filterUserData)                            
                        })  
                : history.push('/verified')) 
            })
        }else{           
           setName(props.userInf.name)
            setNickname(props.userInf.nickname)
            setFamilyName(props.userInf.family_name)
        }
    },[])


    const saveUpdates = () => {
        console.log("Click")
        updateUser({id:props.userInf.id,name,nickname,family_name}).then((res:TresUpdateData)=>
            res.name ? 
            props.updateUserData({name:res.name,family_name:res.family_name,nickname:res.nickname})
            :console.log('error')
        ).then(()=>setUpdate(false))
    }  

    const canselUpdates = () => {
        setName(props.userInf.name)
        setNickname(props.userInf.nickname)
        setFamilyName(props.userInf.family_name)
        setUpdate(false)
    }

    const deleteAcount = () =>{
        deleteUserAcount(id)
        .then((status)=>{
            status===200?props.deleteUser():console.log("error")
        })
        .then(()=>{
            props.auth.logout()
        })
    }
    return (
        <div>
            <Header auth={props.auth}/>
            <AboutInfo
                
                update = {update}
                family_name = {family_name}
                name = {name}
                nickname = {nickname}
                setName = {setName}
                setFamilyName = {setFamilyName}
                setNickname = {setNickname}
                saveUpdates = {saveUpdates}
                setUpdate = {setUpdate}
                canselUpdates = {canselUpdates}
                deleteAcount = {deleteAcount}
            />
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
           setUserData,
           updateUserData,
           deleteUser,
           userCreate,
           setUser
        }, dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(About);
