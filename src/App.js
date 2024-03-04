import logo from './logo.svg';
import './App.css';
import './HomePage.css';
import CodingPage from './pages/CodingPage';
import LinuxPage from './pages/LinuxPage';

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
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
