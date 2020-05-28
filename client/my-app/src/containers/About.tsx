import React,{useEffect,useState} from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header'
import {createUser,updateUser,deleteUserAcount} from "../api/userApi"
import {userAuth,getUser} from "../services/auth.service"
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setUserData,updateUserData,deleteUser} from "../store/actions/actions";

interface IAboutProps {
    auth:any
}

const About: React.FunctionComponent<IAboutProps> = (props:any) => {
    const [user,setUser] = useState<any>('')
    const [name,setName] = useState<any>('')
    const [email,setEmail] = useState<any>('')
    const [id,setId] = useState<any>('')
    const [nickname,setNickname] = useState<any>('')
    const [family_name,setFamilyName] = useState<any>('')
    const [update,setUpdate] = useState<boolean>(false)

    const history = useHistory()
    useEffect(()=>{
        if(!props.userInf.isAuth){
            props.auth.getProfile((profile:any)=>{
                setUser(profile)
                const {email,nickname,name,family_name} = profile        
                userAuth(profile).then((res:any)=> res ? 
                    getUser(email).then((res:any) => 
                        res.status!==404 ?
                            showObject(res):
                            createUser({email,nickname,name,family_name})).then(res=>{
                                if(res === undefined){
                                    console.log("error")
                                }else{
                                    showObject(res.data)
                                }
                            })
                
                
                : history.push('/verified'))
                // .then((dat:any) => 
                //             userAuth(profile).then((res:any)=> res ? dat ? console.log(dat) :  console.log("heredata"+dat)//createUser({email,nickname,name,family_name})
                //         : history.push('/verified')))
            })
        }else{
            showObject(props.userInf,true)
        }
    },[])

    const showObject = (obg:any,idd:boolean = false)=>{
        let userId
        if(idd){
            setId(obg.id)
            console.log("hereTrue")
            userId=obg.id
        }else{
            setId(obg._id)
            userId=obg._id
        }
    
        setName(obg.name)
        setEmail(obg.email)
        setNickname(obg.nickname)
        setFamilyName(obg.family_name)
        console.log(obg)
        let user = {name:obg.name,email:obg.email,nickname:obg.nickname,family_name:obg.family_name,id:userId}
        props.setUserData(user)
    }
    const saveUpdates = () => {
        updateUser({id,name,nickname,family_name}).then((res:any)=>
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
            Hello from about
            -{name}-{email}-{nickname}-{family_name}
            <p>Your Account</p>
            <p>Name -- {name}</p>
            {update ? <input value={name} name="name" onChange={(e:any)=> setName(e.target.value)}/>:<></>}
            <p>Surname -- {family_name}</p>
            {update ? <input value={family_name} name="family_name" onChange={(e:any)=> setFamilyName(e.target.value)}/>:<></>}
            <p>Nickname -- {nickname} users can find you</p>
            {update ? <input value={nickname} name="nickname" onChange={(e:any)=> setNickname(e.target.value)}/>:<></>}
            { update ? <><button onClick={saveUpdates}>Save</button><button onClick={canselUpdates}>Cansel</button></>: <button onClick={()=> setUpdate(true)}>Update</button> }
            <p>Danger Zone</p>
            <button onClick={deleteAcount}>DELETE ACOUNT</button>   
        </div>
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
           setUserData,
           updateUserData,
           deleteUser
        }, dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(About);
