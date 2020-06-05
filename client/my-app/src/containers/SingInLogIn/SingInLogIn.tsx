import * as React from 'react';
import './SingInLogIn.css'
interface ISingInLogInProps {
    auth:any
}

const SingInLogIn: React.FunctionComponent<ISingInLogInProps> = (props) => {
    return (
        //Start ------------
        <div className=''>
            <p className=''>Hello from singin login</p>
            <button className='' onClick={props.auth.login}>Log In</button>
            <button className='' onClick={props.auth.login}>Sing In</button>
        </div>
        //End------------
    )
};

export default SingInLogIn;
