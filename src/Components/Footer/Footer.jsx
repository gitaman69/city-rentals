import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Learn more about our mission and vision.</p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: contact@mywebsite.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Facebook | Twitter | Instagram</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
