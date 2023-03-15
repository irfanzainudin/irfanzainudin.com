import React from 'react';
import logo from '../logo.svg';
import {
  Link
} from "react-router-dom";
// TODO: make the video background work, file was corrupted
// import videoBg from '../assets/0001-0250.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Logo from './Logo.js'

function Main() {
  return (
    <div className="Main">
		  {/* <video src={videoBg} type="video/mp4" autoPlay loop controls /> */}
      <header className="App-header">
        <Logo />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h3>
          Irfan Zainudin
        </h3>
        <div className='socials'>
          <a href="mailto:m.irfan.zain@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="App-link" /></a>
          <a href="https://github.com/irfanzainudin"><FontAwesomeIcon icon={faGithub} className="App-link" /></a>
          <a href="https://twitter.com/irfan__zainudin"><FontAwesomeIcon icon={faTwitter} className="App-link" /></a>
        </div>
      </header>
      <main className='App-main'>
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
