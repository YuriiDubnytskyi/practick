import React ,{FC}from 'react';
import { BrowserRouter } from 'react-router-dom';
import Greeting from "./pages/Greeting"
import Home from "./pages/Home"
import Auth from "./auth0/Auth"

const App:FC<any> = (props:any) => {
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
