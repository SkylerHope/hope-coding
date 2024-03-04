import React from "react";
import './Navbar.css';
import logo from './logo.svg';

const Navbar = () => {
    return (
        <header className="navbar">
            <nav>
                <ul className="navbar-ul">
                    <li className="navbar-item">
                        <a href="https://hope-coding.netlify.app/">
                            <img src={logo} alt="Logo" className="logo"/>
                        </a>
                    </li>
                    <li className="navbar-item">
                        <a href="/coding" className="navbar-link">
                            CODING
                        </a>
                    </li>
                    <li className="navbar-item">
                        <a href="/linux" className="navbar-link">
                            LINUX
                        </a>
                    </li>
                    <li className="navbar-item">
                        <a href="/tools" className="navbar-link">
                            TOOLS
                        </a>
                    </li>
                    <li className="navbar-item">
                        <a href="/about" className="navbar-link">
                            ABOUT
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;