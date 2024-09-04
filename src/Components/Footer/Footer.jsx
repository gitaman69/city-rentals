import React from "react";
import { Link } from 'react-router-dom';
import { CiFacebook, CiInstagram, CiMail } from "react-icons/ci";
import { MdPolicy } from "react-icons/md";
import "../Footer/footer.scss";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Learn more about our mission and vision. <Link to={`/privacypolicy`}>
            <button style={{backgroundColor:"#212529",border:"1px solid white",color:"white",cursor:"pointer"}}>Privacy Policy <MdPolicy /></button>
          </Link></p>
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
