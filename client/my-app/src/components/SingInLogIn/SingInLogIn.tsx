import  React,{useEffect} from 'react';
import './SingInLogIn.css'

interface ISingInLogInProps {
    auth:any
}
declare global {
    interface Window { OneSignal: any; }
}

const SingInLogIn: React.FunctionComponent<ISingInLogInProps> = (props) => {
    useEffect(()=>{
        window.OneSignal = window.OneSignal || [];
        window.OneSignal.push(function() {
          window.OneSignal.init({
            appId: "890ecd33-a1e8-443b-8489-0d76bfdd453a",
          });
        });
        
       
    },[])
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
