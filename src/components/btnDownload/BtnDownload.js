import React from "react";
import {NavLink} from "react-router-dom";

function BtnDownload() {
    return (
            <NavLink to='https://drive.google.com/uc?export=download&id=1jQprHNP_3tbuuG9Qm07Egn2Ym8HN2jPz'
                     className="btn">
                Download CV
            </NavLink>
    )
}

export default BtnDownload