import React from 'react';
import './Contact.scss';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We would love to hear from you! Get in touch with us through any of the following platforms:</p>

      <div className="contact-links">
        <a href="https://www.instagram.com/ig__aman" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
          <span>Instagram</span>
        </a>
        <a href="mailto:amanbhaker@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="icon" />
          <span>Gmail</span>
        </a>
        <a href="https://www.linkedin.com/in/aman-bhakar" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
