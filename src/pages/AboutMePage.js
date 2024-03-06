import React from "react";
import '../AboutMePage.css';

const AboutMePage = () => {
    return (
        <div className="aboutme-div">
            <img src="https://files.mastodon.social/accounts/avatars/111/918/013/232/891/984/original/3e48dcc21a18d33c.jpeg" alt="Skyler Avatar" className="avatar"/>
            <h1>About Me</h1>
            <h3>This is the about me paragraph</h3>
            <div className="social-div">
                <a href="https://github.com/SkylerHope" className="social-item">GitHub</a>
                <a href="https://mastodon.social/@Skyler_Sh" className="social-item">Mastodon</a>
                <a href="https://twitter.com/SkylerHopeSh" className="social-item">Twitter</a>
                <a href="https://dev.to/skylerhope" className="social-item">Dev</a>
            </div>
        </div>
    );
};

export default AboutMePage;