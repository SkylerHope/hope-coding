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
        id: 5,
        date: "01/04/2024",
        title: "Hosting a React website on AWS",
        category: "Software",
        imageUrl: "https://i.postimg.cc/hGy0k8Ss/Screenshot-2024-04-01-19-27-07.png",
        imageName: "React website on AWS",
        content: "The company I do my internship at asked me to host a React website on AWS. The only experience I have with AWS is with virtual machines to run discord bots 24/7. The tutorial is pretty clear for the most part. It's just gonna take a bit of practice. Lots of stuff to learn, like using databases in AWS etc. I made what the tutorial was showing me, you can find a link below.",
        linkUrl: "https://master.d99mphiukvbd5.amplifyapp.com/",
        linkName: "https://master.d99mphiukvbd5.amplifyapp.com/"
      },
      {
        id: 4,
        date: "12/03/2024",
        title: "Dropped Flutter, trying Electron",
        category: "Framework",
        imageUrl: "https://miro.medium.com/v2/resize:fit:1400/1*pZSdLbXSCEDZRFjTuapE5Q.png",
        imageName: "Electron Logo",
        content: "I made the decision to build my password manager with Electron instead of Flutter. I understand the pros and cons that come with that, it's just the deep learning curve of Flutter that pulled me away. Maybe next time, who knows? I mean, I developed this website with React and I still don't know it well. With Electron, I can just use classic web dev to achieve my goal, seems easier to me. New github repo below.",
        linkUrl: "https://github.com/SkylerHope/skypass-manager",
        linkName: "New github repo"
      },
      {
        id: 3,
        date: "11/03/2024",
        title: "Building a password manager with Flutter",
        category: "Software",
        imageUrl: "https://miro.medium.com/v2/resize:fit:1400/1*6JxdGU2WIzHSUEGBx4QeAQ.jpeg",
        imageName: "Flutter Image",
        content: "Hi everyone! I decided today to develop a password manager. I chose Flutter to learn it in the process too. I have some ideas and features in mind, including security related features. Right now the default codebase hasn't changed much due to Flutter's learning curve. It's gonna be a long journey. You can check the project repository on my GitHub page.",
        linkUrl: "https://github.com/SkylerHope/skypass_manager",
        linkName: "GitHub repository"
      },
      {
        id: 2,
        date: "08/03/2024",
        title: "Develop a SoundCloud client?",
        category: "Software",
        imageUrl: "https://static1.pocketlintimages.com/wordpress/wp-content/uploads/2023/04/what-is-soundcloud.jpg",
        imageName: "SoundCloud Logo",
        content: "I was looking at the API section of SoundCloud's website and I wondered, imagine if I tried to develop a desktop client for SoundCloud. I'm worried tho cause I looked for similar projects and to my knowledge they were taken down or took a whole different turn on what it was supossed to be. If you guys know, send me a message on my socials, thank you.",
        linkUrl: "https://developers.soundcloud.com/docs/api/guide",
        linkName: "SoundCloud API"
      },
      {
        id: 1,
        date: "07/03/2024",
        title: "Join this community of developers",
        category: "Website",
        imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/83/96/4f/83964fcd-de07-3829-ad64-c5726e09e5dc/AppIcon-1x_U007emarketing-0-0-0-10-0-0-85-220.png/1200x630wa.png",
        imageName: "Devto Logo",
        content: "I recently discovered the dev.to website. So far it seems like a great way for developers to interact with each other, post articles, debate, and connect. I didn't post anything yet but I plan to. My dev.to link is in the About page. This website is worth checking, give it a try!",
        linkUrl: "https://dev.to/",
        linkName: "Dev Community"
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
            <a href='https://hope-coding.netlify.app/coding' className='latest-item'>
              <img src='https://i.postimg.cc/hGy0k8Ss/Screenshot-2024-04-01-19-27-07.png' className='latest-articles-image' alt='Coding article'/>
              <hr/>
              <h4>Hosting a React website on AWS</h4>
            </a>
            <a href='https://hope-coding.netlify.app/linux' className='latest-item'>
              <img src='https://news.itsfoss.com/content/images/size/w1304/wordpress/2022/05/linus-torvalds-nvidia.jpg' className='latest-articles-image' alt='Linux article'/>
              <hr/>
              <h4>NVIDIA and Linux? I survived a full system upgrade!</h4>
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
