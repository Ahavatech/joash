
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faCss3, faFigma } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <div className="profile-image"></div>
        <h3>Hey, I'm Joash</h3>
        <h1 className="title">No<span>Code</span><br/>Solution Expert</h1>
        <p>I help startups and individuals bring their ideas into reality while scaling to generate revenue using modern tools.</p>
        <div className="cta-buttons">
          <button className="primary-btn">Start now</button>
          <button className="secondary-btn">Learn more</button>
        </div>
      </div>

      <section className="about-section">
        <h2>About Me</h2>
        <p>Hi, I'm Joash Otitooluwa Adeoye — a NoCode solutions expert passionate about turning ideas into functional, user-friendly digital products. I specialize in solving problems like payment integrations, building landing pages, and authentication using popular nocode tools without writing traditional code.</p>
      </section>

      <section className="skills-section">
        <h2>Skills/Tools</h2>
        <div className="tools-grid">
          <div className="tool-card">
            <FontAwesomeIcon icon={faFigma} className="figma-icon" />
            <span>Figma</span>
          </div>
          <div className="tool-card">
            <img src="/bubble-io-icon.png" alt="Bubble.io" className="bubble-icon" />
            <span>Bubble.io</span>
          </div>
          <div className="tool-card">
            <img src="/openai-icon.png" alt="OpenAI" className="openai-icon" />
            <span>OpenAI</span>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image"></div>
            <h3>Project Name</h3>
            <p>Brief description of the project goes here</p>
            <a href="#" className="project-link">View Project</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
