import React from "react";


function Contacts() {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">location</h2>
                        <p>Lviv, Ukraine</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">contact number</h2>
                        <p><a href="tel:+380685168366">+380 (68) 516 83 66</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">email</h2>
                        <p><a href="mailto:zaharchukartem9@gmail.com">zaharchukartem9@gmail.com</a></p>
                    </li>
                </ul>

            </div>
        </main>
    )
}

export default Contacts