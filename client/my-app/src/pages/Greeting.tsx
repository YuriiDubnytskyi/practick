import  React ,{FC} from 'react';
import {Route,Switch, Redirect} from 'react-router-dom';
import SingInLogIn from "../containers/SingInLogIn"
import CallBack from "../containers/CallBack"
import Main from "../containers/Main";

interface IGreetingProps {
    auth:any,
    location:any
}

const Greeting:FC<IGreetingProps> = (props:IGreetingProps) => {
    const auth = props.auth
    return( 
        <Switch>
            <Route path="/" exact render={props => auth.isAuthenticated() ? (
                    <Redirect to="/about"/>
                ):(
                    <SingInLogIn auth={auth}/>
                )
            }/>
        
            <Route path="/callback" exact>
                <CallBack auth={props.auth} {...props}/>
            </Route>
        </Switch>
    )
};

export default Greeting;
