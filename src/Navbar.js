import React from "react";
import './Navbar.css';
import logo from './logo.svg';

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
                        <a href="/coding">
                            CODING
                        </a>
                    </li>
                    <li className="navbar-item">
                        <a href="/linux">
                            Linux
                        </a>
                    </li>
                    <li className="navbar-item">
                        <a href="/tools">
                            TOOLS
                        </a>
                    </li>
                    <li className="navbar-item">
                        <a href="/about">
                            ABOUT
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;