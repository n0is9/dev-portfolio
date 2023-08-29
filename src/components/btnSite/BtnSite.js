import React from "react";
import './style.css'
import {NavLink} from "react-router-dom";

function BtnSite({link}) {
    return (
        <NavLink to={link} target='_blank' rel='noreferrer' className="btn-outline">
            View Site
        </NavLink>
    )
}

export default BtnSite