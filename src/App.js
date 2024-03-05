import React, { useState, useEffect } from 'react';
import './App.css';
import './GlobalBackground.css';
import Navbar from './Navbar';
import CodingPage from './pages/CodingPage';
import LinuxPage from './pages/LinuxPage';
import ToolsPage from './pages/ToolsPage';
import AboutMePage from './pages/AboutMePage';

function App() {
  const pathname = window.location.pathname;
  const [pageContent, setPageContent] = useState(null);

  useEffect(() => {
    let newPageContent;

    const codingArticles = [
      {
        id: 1,
        date: "04/03/2024",
        title: "Coding article",
        category: "Programming",
        imageUrl: "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg",
        imageName: "Coding image",
        content: "This is a paragraph for the coding article",
        linkUrl: "https://www.freepik.com/",
        linkName: "Freepik"
      }
    ];

    const linuxArticles = [
      {
        id: 1,
        date: "04/03/2024",
        title: "Linux article",
        category: "Operating systems",
        imageUrl: "https://pakhotin.org/wp-content/uploads/2023/07/53113-106400-Linux-xl-1024x576.jpg",
        imageName: "Linux image",
        content: "This is a paragraph for the linux article",
        linkUrl: "https://www.linux.org/",
        linkName: "Linux"
      }
    ];

    if(pathname === '/coding') {
      document.title = 'Coding journey - Hope Coding';
      let codingLink = document.getElementById('coding-link');
      if(codingLink) {
        codingLink.classList.add('navbar-active');
      }
      newPageContent = <CodingPage codingArticles={codingArticles}/>
    } else if(pathname === '/linux') {
      document.title = 'Linux adventures - Hope Coding';
      let linuxCoding = document.getElementById('linux-link');
      if(linuxCoding) {
        linuxCoding.classList.add('navbar-active');
      }
      newPageContent = <LinuxPage linuxArticles={linuxArticles}/>
    } else if(pathname === '/tools') {
      document.title = 'Free tools and programs - Hope Coding';
      let toolsLink = document.getElementById('tools-link');
      if(toolsLink) {
        toolsLink.classList.add('navbar-active');
      }
      newPageContent = <ToolsPage/>
    } else if(pathname ==='/about') {
      document.title = 'About SkylerHope';
      let aboutLink = document.getElementById('about-link');
      if(aboutLink) {
        aboutLink.classList.add('navbar-active');
      }
      newPageContent = <AboutMePage/>
    } else {
      newPageContent = (
        <div>
          <h1>Latest articles</h1>
        </div>
      );
    }
    setPageContent(newPageContent);
  }, [pathname]);

  return (
    <div>
      <Navbar/>
      {pageContent}
    </div>
  );
}

export default App;
