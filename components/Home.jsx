import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Hey, I'm Joash</h1>
        <h2 className="title">NoCode <span>Solution Expert</span></h2>
        <p>I help startups and individuals bring their ideas into reality while scaling to generate revenue using modern tools.</p>
        <div className="cta-buttons">
          <button className="primary-btn">Get in touch</button>
          <button className="secondary-btn">Learn more</button>
        </div>
      </div>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/joash01/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://web.facebook.com/otitooluwa.adeoye" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/joash.dev/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
}

export default Home;