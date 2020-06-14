import * as React from 'react';
import './SingInLogIn.css'
interface ISingInLogInProps {
    auth:any
}

const SingInLogIn: React.FunctionComponent<ISingInLogInProps> = (props) => {
    return (
        //Start ------------
        <>
        {/* <div className='animation_login'>
            <div className='main-content wrapper'>
                <div className='main-content_container'>
                    <p className=''>Hello from singin login</p>
                    <button className='' onClick={props.auth.login}>Log In</button>
                    <button className='' onClick={props.auth.login}>Sing In</button>
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
            
        </div> */}
            <div className="wrapper">
                <div className="main-content">
                    <div className='main-content_container'>
                        <h1 className='title'>Hello, Wanderer!</h1>
                        <p className='sub-title'>Log In or Sing In and start journey with us.</p>       
                        <button className='btn-login' onClick={props.auth.login}>Log In</button><br/>
                        <button className='btn-singin' onClick={props.auth.login}>Sing In</button>
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
        </>
        
        //End------------
    )
};

export default SingInLogIn;
