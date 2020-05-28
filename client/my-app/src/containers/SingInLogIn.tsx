import * as React from 'react';

interface ISingInLogInProps {
    auth:any
}

const SingInLogIn: React.FunctionComponent<ISingInLogInProps> = (props) => {
    return (
        <div>
            Hello from singin login
            <button onClick={props.auth.login}>Log In</button>
            <button onClick={props.auth.login}>Sing In</button>
        </div>
    )
};

export default SingInLogIn;
