import React from "react";
import { NavLink } from "react-router-dom";
import './style.css'
// import instagram from "../../img/icons/instagram.svg";
// import twitter from "../../img/icons/twitter.svg";
import gitHub from "../../img/icons/gitHub.svg";
import linkedIn from "../../img/icons/linkedIn.svg";
import telegram from "../../img/icons/telegram.svg";

const socialMediaLinks = [
    {
        platform: "GitHub",
        url: "https://github.com/n0is9",
        icon: gitHub,
    },
    {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/artem-zakharchuk-39aa66211/",
        icon: linkedIn,
    },
    {
        platform: "Telegram",
        url: "https://t.me/n0is9",
        icon: telegram,
    },
];

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        {socialMediaLinks.map((link, index) => (
                            <li className="social__item" key={index}>
                                <NavLink to={link.url} target="_blank" rel="noreferrer">
                                    <img src={link.icon} alt={link.platform} />
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className="copyright">
                        <p>© 2023 developed by artem zakharchuk</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}


export default Footer