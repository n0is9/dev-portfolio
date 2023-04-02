import React from "react";

import './style.css'
import instagram from "../../img/icons/instagram.svg";
import twitter from "../../img/icons/twitter.svg";
import gitHub from "../../img/icons/gitHub.svg";
import linkedIn from "../../img/icons/linkedIn.svg";
import telegram from "../../img/icons/telegram.svg";
import {NavLink} from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">

                        <li className="social__item">
                            <NavLink to='https://github.com/n0is9'target='_blank' rel='noreferrer'>
                                <img src={gitHub} alt="Link"/>
                            </NavLink>
                        </li>
                        <li className="social__item">
                            <NavLink to='https://www.linkedin.com/in/artem-zakharchuk-39aa66211/'target='_blank' rel='noreferrer'>
                                <img src={linkedIn} alt="Link"/>
                            </NavLink>
                        </li>

                        <li className="social__item">
                            <NavLink to='https://t.me/n0is9' target='_blank' rel='noreferrer'>
                                <img src={telegram} alt="Link"/>
                            </NavLink>
                        </li>
                        <li className="social__item">
                            <NavLink to='https://www.instagram.com/arteemzaharchuk/?hl=uk' target='_blank' rel='noreferrer'>
                                <img src={instagram} alt="Link"/>
                            </NavLink>
                        </li>
                        <li className="social__item">
                            <NavLink to='https://twitter.com/noiiiiisy'target='_blank' rel='noreferrer'>
                                <img src={twitter} alt="Link"/>
                            </NavLink>
                        </li>


                    </ul>
                    <div className="copyright">
                        <p>© 2023 developed by artem zakharchuk</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer