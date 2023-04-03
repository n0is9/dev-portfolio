import React from "react";
import {NavLink} from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import './style.css'


function Navbar() {

    const activeLink = 'nav-list__link nav-list__link--active'
    const normalLink = 'nav-list__link'

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">

                    <NavLink to='/dev-portfolio' className="logo">
                        <strong>dev</strong> portfolio
                    </NavLink>


                    <BtnDarkMode/>

                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to='/dev-portfolio' className={({isActive}) => isActive ? activeLink : normalLink}>
                                home
                            </NavLink>
                        </li>


                        <li className="nav-list__item">
                            <NavLink to='/dev-portfolio/projects' className={({isActive}) => isActive ? activeLink : normalLink}>
                                projects
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to='/dev-portfolio/contacts' className={({isActive}) => isActive ? activeLink : normalLink}>
                                contacts
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar