import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingBag } from "react-icons/fa";
import "./Header.css";

const Header = ({ onCartClick, cartCount, showBanner = true }) => {
  const images = ["/tea1.jpg", "/tea2.jpg", "/tea3.jpg", "/tea4.jpg", "/tea5.jpg", "/tea6.jpg", "/tea7.jpg"];
  const [bgIndex, setBgIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex(prev => (prev + 1) % images.length);
    }, 7000); // Change every 7 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="header-container">
      {showBanner && (
        <div className="header-bg">
          {images.map((img, index) => (
            <div
              key={index}
              className={`header-bg-image ${index === bgIndex ? 'active' : ''}`}
            >
              <div className="zoom-layer" style={{ backgroundImage: `url(${img})` }} />
            </div>
          ))}

          <div className={`header-top ${scrolled ? "sticky" : ""}`}>
            <Link to="/" className="logo">Tea by Green</Link>
            <nav className="nav">
              <Link to="/black-tea">Black Tea</Link>
              <Link to="/green-tea">Green Tea</Link>
              <Link to="/herbal-tea">Herbal Tea</Link>
              <Link to="/gift-sets">Gift Sets</Link>
            </nav>
            <div className="icons">
              <FaUser />
              <div className="cart-icon" onClick={onCartClick}>
                <FaShoppingBag />
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
              </div>
            </div>
          </div>

          <div className="hero-text">
            <h1>Welcome to <em>Tea by Green</em> <br /><strong>Product</strong></h1>
            <p>
              Discover a world of exquisite flavors with our premium tea selection. <br />
              From classic black teas to refreshing herbal infusions, find your perfect cup today.
            </p>
            <button className="shop-btn">Shop Now</button>
          </div>
        </div>
      )}

      {!showBanner && (
        <div className="header-top header-top-static">
          <Link to="/" className="logo">Tea by Green</Link>
          <nav className="nav">
            <Link to="/black-tea">Black Tea</Link>
            <Link to="/green-tea">Green Tea</Link>
            <Link to="/herbal-tea">Herbal Tea</Link>
            <Link to="/gift-sets">Gift Sets</Link>
          </nav>
          <div className="icons">
            <FaUser />
            <div className="cart-icon" onClick={onCartClick}>
              <FaShoppingBag />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
