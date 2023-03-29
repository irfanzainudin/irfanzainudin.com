import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// components
import Main from './components/Main';

// stylesheets
import './App.css';

// pages
import About from './pages/About';
import Blog from './pages/Blog';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
