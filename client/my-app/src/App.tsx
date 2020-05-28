import React ,{FC}from 'react';
import { BrowserRouter,useHistory } from 'react-router-dom';
import Greeting from "./pages/Greeting"
import Home from "./pages/Home"
import Auth from "./auth0/Auth"

const App:FC<any> = (props:any) => {
    let history = useHistory();
    console.log(props.history)
    const auth = new Auth(window.history)
     return (
        <div>
            <BrowserRouter>
                <Greeting auth={auth} {...props}/>
                <Home auth={auth}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
