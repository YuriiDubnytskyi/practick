import * as React from 'react';
import './AuthPage.css'
interface IAuthPageProps {
    auth:any
}

const AuthPage: React.FunctionComponent<IAuthPageProps> = (props) => {
    return (
        <div className="wrapper">
            <div className="main-content">
                <div className='main-content_container'>
                    <h1 className='title'>Hello, Wanderer!</h1>
                    <p className='sub-title'>Please verifide your account and log and start journey with us.</p>       
                    <button className='btn-login' onClick={()=>props.auth.login()}>Log In</button>
                    <div>
                        <div className="infinite-rotate1"></div> 
                        <div className="infinite-rotate2"></div> 
                        <div className="infinite-rotate3"></div>
                    </div>
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
    )
};

export default AuthPage;
