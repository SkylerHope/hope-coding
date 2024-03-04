import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="logo">
                <a href="https://hope-coding.netlify.app/">
                    <img src={logo} alt="Logo"/>
                </a>
            </div>
            <nav>
                <ul className="navbar-ul">
                    <li className="navbar-item">
                        <a href="http://localhost:3000/coding">
                            CODING
                        </a>
                    </li>
                    <li className="navbar-item">
                        <a href="http://localhost:3000/linux">
                            Linux
                        </a>
                    </li>
                    <li className="navbar-item">
                        <a href="http://localhost:3000/tools">
                            TOOLS
                        </a>
                    </li>
                    <li className="navbar-item">
                        <a href="http:localhost:3000/about">
                            ABOUT
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;