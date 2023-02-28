import React from 'react';
import videoBg from '../assets/0001-0250.mp4';

function App() {
  return (
    <div className="Main">
		<video src={videoBg} type="video/mp4" autoPlay loop controls />
    </div>
  );
}

export default App;
