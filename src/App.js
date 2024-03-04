import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import './GlobalBackground.css';
import CodingPage from './pages/CodingPage';
import LinuxPage from './pages/LinuxPage';
import ToolsPage from './pages/ToolsPage';
import AboutMePage from './pages/AboutMePage';

function App() {
  const pathname = window.location.pathname;
  const [pageContent, setPageContent] = useState(null);

  const linuxArticles = [
    {
      id: 1,
      date: "04/03/2024",
      title: "Linux article",
      category: "Operating systems",
      imageUrl: "https://pakhotin.org/wp-content/uploads/2023/07/53113-106400-Linux-xl-1024x576.jpg",
      content: "This is a paragraph for the linux article",
      linkUrl: "https://www.linux.org/",
      linkName: "Linux"
    }
  ];

  const codingArticles = [
    {
      id: 1,
      date: "04/03/2024",
      title: "Coding article",
      category: "Programming",
      imageUrl: "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg",
      content: "This is a paragraph for the coding article",
      linkUrl: "https://www.freepik.com/",
      linkName: "Freepik"
    }
  ];

  useEffect(() => {
    let newPageContent;

    if(pathname === '/coding') {
      document.title = 'Coding journey - Hope Coding';
      newPageContent = <CodingPage codingArticles={codingArticles}/>
    } else if(pathname === '/linux') {
      document.title = 'Linux adventures - Hope Coding';
      newPageContent = <LinuxPage linuxArticles={linuxArticles}/>
    } else if(pathname === '/tools') {
      document.title = 'Free tools and programs - Hope Coding';
      newPageContent = <ToolsPage toolsContent={toolsContent}/>
    } else if(pathname ==='/about') {
      document.title = 'About SkylerHope';
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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
