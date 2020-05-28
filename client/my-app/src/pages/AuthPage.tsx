import * as React from 'react';

interface IAuthPageProps {
    auth:any
}

const AuthPage: React.FunctionComponent<IAuthPageProps> = (props) => {
  return (
      <div>
          Please verifide your account and log 
          <button onClick={()=>props.auth.login() }>Login</button>
      </div>
  )
};

export default AuthPage;
