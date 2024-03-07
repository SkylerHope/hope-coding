import React, { useState, useEffect } from 'react';
import './App.css';
import './GlobalBackground.css';
import './ArticleStyle.css';
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
        id: 2,
        date: "07/03/2024",
        title: "New coding article",
        category: "Programming",
        imageUrl: "https://www.computersciencedegreehub.com/wp-content/uploads/2023/02/shutterstock_535124956-scaled.jpg",
        imageName: "New coding image",
        content: "This is a new article related to coding. Its new, fresh and also it is meant to be used for testing with the navbar. Nice. Woooooo",
        linkUrl: "https://www.computersciencedegreehub.com/",
        linkName: "Image source"
      },
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
        date: "07/03/2024",
        title: "NVIDIA and Linux? I survived a full system upgrade!",
        category: "Updates",
        imageUrl: "https://news.itsfoss.com/content/images/size/w1304/wordpress/2022/05/linus-torvalds-nvidia.jpg",
        imageName: "Linus giving nvidia the finger",
        content: "A new kernel update arrived yesterday, and I tried to hold back any packages related to nvidia (didn't work) just so my system won't break. I also created a bootable usb with EndeavourOS just in case (I forgot to create snapshots). I started the update and it updated my nvidia packages too anyway. I was ready for the system to break after reboot, but it didn't. In fact it works normally. I don't know how, but maybe the Linux & NVIDIA relationship is getting better with newer kernel updates.",
        linkUrl: "https://www.kernel.org/",
        linkName: "The Linux Kernel Archives"
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
          <h1 className='latest-articles-text'>Latest articles</h1>
          <div className='latest-articles'>
            <a href='https://hope-coding.netlify.app/linux' className='latest-item'>
              <img src='https://news.itsfoss.com/content/images/size/w1304/wordpress/2022/05/linus-torvalds-nvidia.jpg' className='latest-articles-image' alt='Linux article'/>
              <hr/>
              <h4>NVIDIA and Linux? I survived a full system upgrade!</h4>
            </a>
            <a href='https://hope-coding.netlify.app/coding' className='latest-item'>
              <img src='https://www.computersciencedegreehub.com/wp-content/uploads/2023/02/shutterstock_535124956-scaled.jpg' className='latest-articles-image' alt='Coding article'/>
              <hr/>
              <h4>Coding article</h4>
            </a>
          </div>
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
