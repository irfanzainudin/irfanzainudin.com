import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWrench, faGlobe, faSpinner, faCircleCheck, faCertificate } from '@fortawesome/free-solid-svg-icons'
import { faConnectdevelop } from '@fortawesome/free-brands-svg-icons'
import './Projects.css';
import { MasyiiDesc, OnlineAuctionPlatform } from '../constants/project-desc';

// components
import Card from '../components/Card'

function Projects() {
  return (
    <div className="Projects">
      <header className='Projects-header'>
        <h1><FontAwesomeIcon icon={faWrench} pulse /> Projects</h1>
      </header>
      <main className='Projects-main'>
        <section className='WebDev Projects-section'>
          <h3>Web Dev <FontAwesomeIcon icon={faGlobe} /></h3>
          <div>
            <Card title="Masyii" status={<FontAwesomeIcon icon={faCircleCheck} />} body={MasyiiDesc} />
          </div>
        </section>
        <section className='Web3 Projects-section'>
          <h3>Web3 <FontAwesomeIcon icon={faConnectdevelop} /></h3>
          {/* <FontAwesomeIcon icon={faUsers} /> */}
          <div>
            <Card title="Online Auction Platform" status={<FontAwesomeIcon icon={faSpinner} spin />} body={OnlineAuctionPlatform} />
            <Card title="DeFi" status={<FontAwesomeIcon icon={faSpinner} spin />} body="..." />
          </div>
        </section>
        {/* <section className='GameDev Projects-section'>
          <h3>Game Dev <FontAwesomeIcon icon={faGamepad} /></h3>
          <div>
            <Card title="7 Skelly Sins" status={<FontAwesomeIcon icon={faSpinner} spin />} body="..." />
            <Card title="Visual Novel" status={<FontAwesomeIcon icon={faSpinner} spin />} body="..." />
          </div>
        </section>
        <section className='Compilers Projects-section'>
          <h3>Compilers <FontAwesomeIcon icon={faLanguage} /></h3>
          <div>
            <Card title="VC" status={<FontAwesomeIcon icon={faSpinner} spin />} body="..." />
            <Card title="Sayang" status={<FontAwesomeIcon icon={faSpinner} spin />} body="..." />
          </div>
        </section> */}
        <section className='Misc. Projects-section'>
          <h3>Miscellaneous</h3>
          <div>
            <Card title="VC" status={<FontAwesomeIcon icon={faSpinner} spin />} body="..." />
            <Card title="FreeCodeCamp's Certification Projects" status={<FontAwesomeIcon icon={faCircleCheck} />} body="" links={
          <a href="https://www.freecodecamp.org/irfanzainudin"><FontAwesomeIcon icon={faCertificate} className="App-link" /></a>} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Projects;
