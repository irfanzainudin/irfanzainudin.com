import React from 'react';
import logo from '../logo.svg';
import {
  Link
} from "react-router-dom";
// import videoBg from '../assets/0001-0250.mp4';

function Main() {
  return (
    <div className="Main">
		  {/* <video src={videoBg} type="video/mp4" autoPlay loop controls /> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Irfan Zainudin
        </p>
        <span>
          {/* <a
            className="App-link"
            // href="projects.irfanzainudin.com"
            href="irfanzainudin.com"
            target="_blank"
            rel="noopener noreferrer"
          > */}
          <Link className="App-link" to={'/projects'}>
            Projects
          </Link>
          {/* </a> */}
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

export default Main;
