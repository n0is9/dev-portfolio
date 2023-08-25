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
                            <h2 className="title-2">tech stack</h2>
                            <p>JavaScript, TypeScript, ReactJS, Redux, Redux Toolkit, React-redux, HTML5, CSS3, NPM, Yarn, BootStrap, MaterialUI,
                                TailwindCSS, StyledComponents, Rest API, Axios, Fetch API, Git, GitHub, Figma</p>
                        </li>
                        {/*<li className="content-list__item">
                            <h2 className="title-2">backend</h2>
                            <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
                        </li>*/}
                    </ul>

                </div>
            </main>
        </>
    )
}

export default Home