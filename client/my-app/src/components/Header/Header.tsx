import * as React from 'react';
import {NavLink} from "react-router-dom"
import "./Header.css"

interface IHeaderProps {
    auth:any
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
    return (
        <header className="container-h" id="home">
            <section className="container__header">
                <div className="logo"><p className="logo__text">Dubnytskyi Corporation</p></div>
                <nav className="navigation">
                    <ul className="navigation__list">
                        <li className="navigation__list-item"><NavLink to='/main' className="navigation__list-link">Main</NavLink></li>
                        <li className="navigation__list-item"><NavLink to='/about' className="navigation__list-link">About</NavLink></li>
                        <li className="navigation__list-item"><a onClick={()=>props.auth.logout()} className="navigation__list-link">LogOut</a></li>  
                    </ul>
                </nav>
            </section>
        </header>
    )
};

export default Header;
