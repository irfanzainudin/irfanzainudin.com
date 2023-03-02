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
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
