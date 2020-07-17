import  React from 'react';
import './SingInLogIn.css'

interface ISingInLogInProps {
    auth:any
}


const SingInLogIn: React.FunctionComponent<ISingInLogInProps> = (props) => {
    
    return (
        <>
            <div className="wrapper">
                <div className="main-content">
                    <div className='main-content_container'>
                        <h1 className='title'>Hello, Wanderer!</h1>
                        <p className='sub-title'>Sign In or Sign Up and start journey with us.</p>       
                        <button className='btn-login' onClick={props.auth.login}>Sign In</button><br/>
                        <button className='btn-singin' onClick={props.auth.login}>Sign Up</button>
                   </div>
                </div>

                <ul className="circles">
                    <li className='square'></li>
                    <li className='square'></li>
                    <li className='square'></li>
                    <li className='square'></li>
                    <li className='square'></li>
                    <li className='square'></li>
                    <li className='square'></li>
                    <li className='square'></li>
                    <li className='square'></li>
                    <li className='square'></li>
                    <li className='circle'></li>
                    <li className='circle'></li>
                    <li className='circle'></li>
                    <li className='circle'></li>
                    <li className='circle'></li>
                    <li className='circle'></li>
                    <li className='circle'></li>
                    <li className='circle'></li>
                    <li className='circle'></li>
                    <li className='circle'></li>
                </ul>
            </div>
        </>
    )
};

export default SingInLogIn;
