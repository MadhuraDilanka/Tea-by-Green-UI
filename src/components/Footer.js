import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Explore</h3>
          <a href="#">Autumn Harvest</a>
          <a href="#">Premium Blends</a>
          <a href="#">Shop-all</a>
        </div>
        <div className="footer-column">
          <h3>Tea Types</h3>
          <a href="#">Black Tea</a>
          <a href="#">Green Tea</a>
          <a href="#">Herbal Tea</a>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <a href="#">About-us</a>
          <a href="#">Contact-us</a>
        </div>
        <div className="footer-column newsletter">
          <h3>Subscribe to our Newsletter</h3>
          <p>
            Stay up-to-date with our latest tea blends, exclusive offers, and brewing tips!
          </p>
          <div className="subscribe">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2025 Tea by Green Product. All rights reserved.</p>
        <div className="policy-links">
          <a href="#">Privacy-policy</a>
          <a href="#">Terms-and-conditions</a>
        </div>
        <div className="social-icons">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;