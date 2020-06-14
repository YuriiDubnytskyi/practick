import * as React from 'react';
import './AuthPage.css'
interface IAuthPageProps {
    auth:any
}

const AuthPage: React.FunctionComponent<IAuthPageProps> = (props) => {
  return (
      //Start-----------------
      <div className='Verify'>
          <h1>Please verify your account</h1>
          <p>To your email address has been sent link to verify your account.</p> 
          <button className='BSi1' onClick={()=>props.auth.login() }>Sign In</button>
      </div>
      //End-------------------
  )
};

export default AuthPage;
