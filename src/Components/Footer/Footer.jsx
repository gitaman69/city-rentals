import React from "react";
import { CiFacebook, CiInstagram, CiMail } from "react-icons/ci";
import "../Footer/footer.scss";

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
          <p>Email: cityrentalsbuisness@gmail.com</p>
          <p>Phone: +916377838527</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="links">
            <div className="facebook">
              <a
                href="https://www.instagram.com/ig__aman"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <CiFacebook />
                  Facebook
                </p>
              </a>
            </div>
            <div className="instagram">
              <a
                href="https://www.instagram.com/ig__aman"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <CiInstagram />
                  Instagram
                </p>
              </a>
            </div>
            <div className="gmail">
              <a
                href="mailto:amanbhaker@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <CiMail />
                  Mail
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
