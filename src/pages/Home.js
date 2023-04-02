import React from "react";

import '../components/header/style.css'
import Header from "../components/header/Header";

function Home() {
    return (
        <>
            <Header/>

            <main className="section">
                <div className="container">

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">frontend</h2>
                            <p>JavaScript, TypeScript, ReactJS, Redux, HTML5, CSS3, NPM, Yarn, BootStrap, MaterialUI,
                                TailwindCSS, StyledComponents</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">backend</h2>
                            <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
                        </li>
                    </ul>

                </div>
            </main>
        </>
    )
}

export default Home