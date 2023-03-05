import React from 'react';
import './Card.css';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Card(props) {
  return (
    <div className='Card'>
		<div className='Card-status'>{props.status}</div>
		<header>
			<h4>{props.title}</h4>
		</header>
		<main>
			<small>{props.body}</small>
			<div className='socials'>
				{props.links}
			</div>
		</main>
    </div>
  );
}

export default Card;
