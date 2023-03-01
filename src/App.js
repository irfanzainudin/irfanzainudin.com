import './App.css';
import {
  BrowserRouter,
  Route,
  Link
} from "react-router-dom";

// components
import Main from './components/Main';

// pages
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/projects" />
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
