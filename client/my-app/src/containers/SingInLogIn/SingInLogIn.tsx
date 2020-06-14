import * as React from 'react';
import './SingInLogIn.css'
interface ISingInLogInProps {
    auth:any
}

const SingInLogIn: React.FunctionComponent<ISingInLogInProps> = (props) => {
    return (
        //Start ------------
        <div className='SignIn2'>
            <div className='SingIn' >
                <h1>Hello Wanderer!</h1>
                <p> Please Sign In or Sign Up and start journey with us </p>
                <button className='BSi' onClick={props.auth.login}>Sign In</button>
                <button className='BSu' onClick={props.auth.login}>Sign Up</button>
            </div>
        </div>
        //End------------
    )
};

export default SingInLogIn;
