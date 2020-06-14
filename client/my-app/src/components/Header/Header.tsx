import * as React from 'react';
import {NavLink} from "react-router-dom"
import "./Header.css"

interface IHeaderProps {
    auth:any
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
    return (
        <div className='Header'>
            <nav className="navbar navbar-expand-lg navbar-light">
                
                    <div className='div1'>
                        <ul className="navbar-nav">        
                            <div className='MainB'>
                                <li className="nav-item" id='Main'>
                                    <NavLink className="nav-link" to="/main">Main</NavLink>
                                </li>
                            </div>
                            <div className='AboutB'>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                </li>
                            </div>
                            <div className='LogOutB'>
                                <button className="nav-item" onClick={()=>props.auth.logout()}>
                                    LogOut
                                </button>
                            </div>
                        </ul>
                    </div>
            
            </nav>
        </div>
    )
};

export default Header;
