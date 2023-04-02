import React from "react";
import './style.css'
import BtnDownload from "../btnDownload/BtnDownload";

function Header() {
    return (
            <header className="header">
                <div className="header__wrapper">
                    <h1 className="header__title">
                        <strong>hi, my name is <em>Artem</em></strong><br/>
                        a frontend developer
                    </h1>
                    <div className="header__text">
                        <p>with passion for learning and creating.</p>
                    </div>
                    <BtnDownload/>
                </div>
            </header>
    )
}

export default Header