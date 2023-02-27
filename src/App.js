import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Irfan Zainudin
        </p>
        <span>
          <a
            className="App-link"
            // href="projects.irfanzainudin.com"
            href="irfanzainudin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Projects
          </a>
          |
          <a
            className="App-link"
            // href="projects.irfanzainudin.com"
            href="irfanzainudin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
          |
          <a
            className="App-link"
            // href="projects.irfanzainudin.com"
            href="irfanzainudin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Games
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
