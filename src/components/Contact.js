import React from 'react';
import './Contact.css';  // Import custom CSS for styling
import './Animation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container animated-section">
        <div className="contact-text">
          <h2>Let's work together !</h2>
          <div className="img animated-section"> <img src="one.jpg" alt="Work Illustration" width="750px" align="right" /></div>
          <p>You can express yourself however you want and whenever you want. Feel free to 
          reach out to me for collaboration or professional inquiries.<br></br>
             I'm always open to discussing innovative projects in AI, cloud computing, and automation. You can connect with me via email 
             or through my socialmedia profiles given below . Let's work together to create impactful solutions!</p>
          <br></br>
          <br></br>
          <button className="hello-btn">Say Hello! 👋</button>
        </div>


      </div>

      {/* Sponsor Section */}
      <div className="sponsor-section animation-down">
        <h2>Sponsor Me</h2>
        <p><a href="https://buymeacoffee.com">Buy me a coffee</a></p>
        <p>Phone Number: +91 85273 69597</p>
        <p>Email: kartik2003dav@gmail.com</p>

        {/* Social Media Profiles */}
        <h3>Check Out My Social Media Profiles</h3>
        <div className="social-media-icons">
          <a href="https://github.com/kartik10sharma" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/kartik-10sharma/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://instagram.com/your-instagram-profile" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
