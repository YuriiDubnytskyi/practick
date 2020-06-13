import * as React from 'react';
import {NavLink} from "react-router-dom"
import "./Header.css"

interface IHeaderProps {
    auth:any
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
    return (
        <div className='Header'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                
                    <div className='div1'>
                    <ul className="navbar-nav">        
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/main">Main</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <button className="nav-item" onClick={()=>props.auth.logout()}>
                            LogOut
                        </button>
                    </ul>
                    </div>
            
            </nav>
        </div>
    )
};

export default Header;
