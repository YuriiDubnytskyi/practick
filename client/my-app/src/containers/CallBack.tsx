import React,{FC , useEffect} from 'react';
import { useHistory } from 'react-router-dom';
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
       
          } else {
            throw new Error("Invalid callback URL.");
          }
    },[])
    return (
        <div>
            Loading...
        </div>
  )
};

export default CallBack;
