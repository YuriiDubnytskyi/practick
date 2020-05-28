import  React ,{FC} from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import About from "../containers/About";
import Main from "../containers/Main";
import AuthPage from './AuthPage';

interface IHomeProps {
    auth:any
}

const Home:FC<IHomeProps> = (props:IHomeProps) => {
    const auth = props.auth
    return (
        <>
        <Switch>
            <Route path='/about' exact render={props => auth.isAuthenticated() ? (
                    <About auth={auth}/>
                ):(
                    <Redirect to="/" />
                )
            }/>
            <Route path='/main' exact render={props => auth.isAuthenticated() ? (
                    <Main auth={auth}/>
                ):(
                    <Redirect to="/" />
                )
            }/>
            <Route path='/verified' exact render={props => auth.isAuthenticated() ? (
                    <AuthPage auth={auth}/>
                ):(
                    <Redirect to="/" />
                )
            }/>
            
        </Switch>
        </>
    )
};

export default Home;
