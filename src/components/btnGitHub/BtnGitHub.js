import React from "react";
import './style.css'
import gitHubIcon from "./gitHub-black.svg";
import {NavLink} from "react-router-dom";

function BtnGitHub({link}) {
    return (
        <NavLink to={link} target='_blank' rel='noreferrer' className="btn-outline">
            <img src={gitHubIcon} alt=""/>
            GitHub repo
        </NavLink>
    )
}

export default BtnGitHub