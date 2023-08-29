import React from "react";
import './style.css'
import BtnDownload from "../btnDownload/BtnDownload";

function Header() {
    return (
            <header className="header">
                <div className="header__wrapper">
                    <h1 className="header__title">
                        <strong>Hi, my name is <em>Artem</em></strong><br/>
                        a Frontend Developer
                    </h1>
                    <div className="header__text">
                        <p>With passion for learning and creating.</p>
                    </div>
                    <BtnDownload/>
                </div>
            </header>
    )
}

export default Header