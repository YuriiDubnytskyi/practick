import React,{FC , useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner'

interface ICallBackProps {
    auth:any,
    location:any
}

const CallBack:FC<ICallBackProps> = (props) => {
    let history = useHistory();
    useEffect(()=>{
        if (/access_token|id_token|error/.test(window.location.hash)) {
            console.log(history)
            props.auth.handleAuthentication(history)
            for (let [key] of Object.entries(localStorage)) {
              if(key !== "access_token" && key !== "id_token" && key !== "expires_at" && key !== "scopes"){
                  localStorage.removeItem(key)
              }
          }
          } else {
            throw new Error("Invalid callback URL.");
          }
    },[])
    return (
        <Spinner/>
  )
};

export default CallBack;
