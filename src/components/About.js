import React from 'react';
import './About.css'; // Make sure to create this CSS file

const About = () => {
  return (
    <div className="hero-section grid-background" align="left">
      <div className="container">
        <h3 className="greeting">Hello there, my name is</h3>
        <h1 className="name">Kartik Sharma</h1>
        <h2 className="role">Full Stack Web Developer</h2>
        <p className="description">
          I'm a <strong>3<sup>rd</sup> year</strong> Computer Science and Engineering student at GGSIPU, New Delhi.
        </p>
        <div className="buttons">
          <a href="#contact" className="button say-hello">Say Hello!</a>
          <a href="#projects" className="button projects">My Projects</a>
        </div>
      </div>
      <div className="profile-picture">
        <img src="me.jpg" alt="Kartik Sharma" className="profile-img" />
      </div>
    </div>
  );
};

export default About;

