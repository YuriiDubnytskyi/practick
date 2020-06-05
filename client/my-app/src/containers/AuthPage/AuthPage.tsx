import * as React from 'react';
import './AuthPage.css'
interface IAuthPageProps {
    auth:any
}

const AuthPage: React.FunctionComponent<IAuthPageProps> = (props) => {
  return (
      //Start-----------------
      <div className=''>
          <p className=''>Please verifide your account and log</p> 
          <button className='' onClick={()=>props.auth.login() }>Login</button>
      </div>
      //End-------------------
  )
};

export default AuthPage;
