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
          <Link className="App-link" to={'/projects'}>
            Projects
          </Link>
          |
          {/* &bull; */}
          <Link className='App-link' to={'/projects'}>
            CV
          </Link>
        </span>
      </header>
    </div>
  );
}

export default Main;
