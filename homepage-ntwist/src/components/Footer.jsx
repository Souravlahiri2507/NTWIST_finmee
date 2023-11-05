import React from "react";
import "../css/Footer.css";
import { FaTwitter } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="stack-container-footer">
      <div className="footer-logo">
        <img
          src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"
          alt="Company Logo"
        />
      </div>
      <div className="footer-link-container">
        <a className="footer-link" href="/">
          Home
        </a>
        <a className="footer-link" href="/about-us">
          About Us
        </a>
        <a className="footer-link" href="/contact-us">
          Contact Us
        </a>
        <a className="footer-link" href="/privacy-policy">
          Privacy Policy
        </a>
        <a className="footer-link" href="/sitemap">
          Sitemap
        </a>
      </div>
      <div className="address">
        <p className="address-text">
          9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada
        </p>
      </div>
      <div className="social-icons">
        <FaTwitter/>
        <AiFillLinkedin/>
      </div>
      <div className="copyright">
        <p className="copyright-text">© 2022. Ntwist Inc.</p>
      </div>
    </div>
  );
};

export default Footer;
