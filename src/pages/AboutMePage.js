import React from "react";
import '../AboutMePage.css';

const AboutMePage = () => {
    return (
        <div className="aboutme-div">
            <img src="https://files.mastodon.social/accounts/avatars/111/918/013/232/891/984/original/3e48dcc21a18d33c.jpeg" alt="Skyler Avatar" className="avatar"/>
            <h1>About Me</h1>
            <h3 className="aboutme-text">
                I'm Skyler and welcome to my coding blog. I don't have lots of experience in web development but I'm learning React because
                my internship requires it. That's why I'm building this website. I'm mostly interested in Cyber Security and building easy-to-use CLI programs.
                The languages I used so far are C++, Java, php, JavaScript and Python. The idea behind this blog was to practice React and also use this opportunity
                to track my coding progress.
            </h3>
            <br/>
            <h3 className="aboutme-text">
                I was in college for 2 years and now I'm on my 3rd month of my internship. Before college I had a bit of a programming background as I used to
                experiment. I already knew C++ when I started. We had all sorts of classes. That includes game development, video editing, photoshop, web development,
                3d modeling and I'm propably forgetting some. As you can see, we weren't able to focus on one thing. But I'm moving on to great things. Believe in 
                yourself. The only support you need is your own, that's my mindset. If you want to contact me or even build a project together, here are my social 
                links:
            </h3>
            <div className="social-div">
                <a href="https://github.com/SkylerHope" className="social-item">
                    <img src="https://img.shields.io/badge/GitHub-gray?style=plastic&logo=github" alt="GitHub" className="social-image"/>
                </a>
                <a href="https://mastodon.social/@Skyler_Sh" className="social-item">
                    <img src="https://img.shields.io/badge/Mastodon-blueviolet?style=plastic&logo=mastodon" alt="Mastodon" className="social-image"/>
                </a>
                <a href="https://twitter.com/SkylerHopeSh" className="social-item">
                    <img src="https://img.shields.io/badge/Twitter-blue?style=plastic&logo=twitter" alt="Twitter" className="social-image"/>
                </a>
                <a href="https://dev.to/skylerhope" className="social-item">
                    <img src="https://img.shields.io/badge/Dev-black?style=plastic&logo=dev.to&logoColor=white" alt="Dev" className="social-image"/>
                </a>
            </div>
        </div>
    );
};

export default AboutMePage;