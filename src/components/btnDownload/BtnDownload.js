import React from "react";
import {NavLink} from "react-router-dom";

function BtnDownload() {
    return (
            <NavLink to='https://drive.google.com/uc?export=download&id=1Z0M3l0ibkphZmoZ0SgESkn4lKbu_GW3g'
                     className="btn">
                download cv
            </NavLink>
    )
}

export default BtnDownload