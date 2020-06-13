import * as React from 'react';
import './SingInLogIn.css'
interface ISingInLogInProps {
    auth:any
}

const SingInLogIn: React.FunctionComponent<ISingInLogInProps> = (props) => {
    return (
        //Start ------------
        <div className='SingIn' >
            <h4>Hello, please Sign In or Login</h4>
            <button className='Button111' onClick={props.auth.login}>Login</button>
            <button className='Button222' onClick={props.auth.login}>Sign In</button>
        </div>
        //End------------
    )
};

export default SingInLogIn;
