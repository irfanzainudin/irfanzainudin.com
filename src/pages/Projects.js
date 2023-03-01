import React from 'react';

function Projects() {
  return (
    <div className="Projects">
      <div className='WebDev'>
        <h1>Web Dev</h1>
        <ul>
          <li>Masyii</li>
        </ul>
      </div>
      <div className='Web3'>
        <h1>Web3</h1>
        <ul>
          <li>Online Auction Platform (Coming Soon)</li>
          <li>DeFi (Coming Soon)</li>
        </ul>
      </div>
      <div className='GameDev'>
        <h1>Game Dev</h1>
        <ul>
          <li>7 Skelly Sins</li>
          <li>Visual Novel (Coming Soon)</li>
        </ul>
      </div>
      <div className='Compilers'>
        <h1>Programming Languages & Compilers</h1>
        <ul>
          <li>VC - A variant of C</li>
          <li>Sayang (Coming Soon)</li>
        </ul>
      </div>
      <div className='Misc.'>
        <h1>Miscellaneous</h1>
        <ul>
          <li>Online Cafe Menu</li>
          <li>Cats Photos App</li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
