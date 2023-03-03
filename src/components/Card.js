import React from 'react';
import './Card.css';
// import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <div className='Card'>
		<div className='Card-status'>{props.status}</div>
		<header>
			<h4>{props.title}</h4>
		</header>
		<main>
			<small>{props.body}</small>
		</main>
    </div>
  );
}

export default Card;
