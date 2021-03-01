import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation(){
    return(
        <header>
            <p id="logo"><NavLink to="/">QUINN KHUC</NavLink></p>
            <nav>
                <ul>
                    <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="active" to="/resume">Resume</NavLink></li>
                    <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;