import React from 'react';
import logo from '../logo.svg';
import {
  Link
} from "react-router-dom";
// TODO: make the video background work, file was corrupted
// import videoBg from '../assets/0001-0250.mp4';

// TODO: make the cool glowing button work
// import './Main.scss';

function Main() {
  return (
    <div className="Main">
		  {/* <video src={videoBg} type="video/mp4" autoPlay loop controls /> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          Irfan Zainudin
        </h3>
      </header>
      <main>
        <span>
          <Link className="App-link" to={'/projects'}>
            Projects
          </Link>
          {/* | */}
          &bull;
          <Link className='App-link' to={'/projects'}>
            CV
          </Link>
          {/* | */}
          &bull;
          <Link className='App-link' to={'/about'}>
            About
          </Link>
        </span>
      </main>
    </div>
  );
}

export default Main;
