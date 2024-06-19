import React, { useState } from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle the subscription logic here (e.g., send email to server)
    alert(`Subscribed with: ${email}`);
  };

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column">
            <h4>About Us</h4>
            <ul>
              <li><a href="/about">Our Story</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Services</h4>
            <ul>
            <li><a href="/haircuts">Hair Cuts</a></li>
            <li><a href="/nailscare">Nails Care</a></li>
              <li><a href="/skincare">Skin Care</a></li>
              <li><a href="spa-services">Spa Services</a></li>
                        
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact Us</h4>
            <ul>
              <li><a href="/contact">Contact Form</a></li>
              <li><a href="/contact">Location</a></li>
            
      
            </ul>
          </div>
          <div className="footer-column">
            <h4>Subscribe</h4>
            <form onSubmit={handleSubscribe} className="subscribe-form">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="social-media">
          <a href="https://facebook.com/" aria-label="Facebook"><i className="fab fa-facebook-f"> Facebook</i></a>
          <a href="https://www.youtube.com/" aria-label="Instagram"><i className="fab fa-youtube"> youtube</i></a>
          <a href="https://x.com/?lang=en-za" aria-label="Twitter"><i className="fab fa-twitter"> Twitter</i></a>
          <a href="https://instagram.com/" aria-label="Instagram"><i className="fab fa-instagram"> Instagram</i></a>
        </div>
        <div className="footer-bottom">
          <p> Zapiro Salon Ltd.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
