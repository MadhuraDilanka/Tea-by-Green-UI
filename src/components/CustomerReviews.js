import React, { useState } from "react";
import "./CustomerReviews.css";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const reviews = [
  {
    name: "Aanya Sharma",
    rating: 5,
    text: "Absolutely love the Black Tea! Rich aroma and smooth flavor. Will buy again.",
    image: "/avatar1.jpg",
  },
  {
    name: "Rahul Verma",
    rating: 4,
    text: "Fast delivery and the packaging is beautiful. The green tea is refreshing.",
    image: "/avatar1.jpg",
  },
  {
    name: "Meera Nair",
    rating: 5,
    text: "The herbal blend helped with my sleep. Truly calming and fragrant!",
    image: "/avatar1.jpg",
  },
  {
    name: "Kunal Joshi",
    rating: 4,
    text: "Impressed with the gift set. Perfect for my Diwali gifting!",
    image: "/avatar1.jpg",
  },
  {
    name: "Neha Gupta",
    rating: 5,
    text: "Great packaging and the black tea was strong, just how I like it!",
    image: "/avatar1.jpg",
  },
  {
    name: "Dev Patel",
    rating: 4,
    text: "I enjoy the freshness of every cup. Will try more varieties soon!",
    image: "/avatar1.jpg",
  },
];

const CustomerReviews = () => {
    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 4;
  
    const handleNext = () => {
      if (startIndex + visibleCount < reviews.length) {
        setStartIndex(startIndex + 1);
      }
    };
  
    const handlePrev = () => {
      if (startIndex > 0) {
        setStartIndex(startIndex - 1);
      }
    };
  
    return (
      <section className="reviews-section">
        <h2>💬 What Our Customers Say</h2>
        <div className="reviews-wrapper">
          <button className="arrow left" onClick={handlePrev} disabled={startIndex === 0}>
            <FaChevronLeft />
          </button>
          <div className="reviews-carousel">
            {reviews.slice(startIndex, startIndex + visibleCount).map((review, idx) => (
              <div className="review-card" key={idx}>
                <div className="avatar-wrapper">
                  <img src={review.image} alt={review.name} className="review-avatar" />
                  <img src="/tea-icon.png" alt="Tea Icon" className="avatar-badge" />
                </div>
                <h4>{review.name}</h4>
                <div className="stars">
                  {Array.from({ length: review.rating }, (_, i) => (
                    <FaStar key={i} color="#f4c150" />
                  ))}
                </div>
                <p className="review-text">“{review.text}”</p>
              </div>
            ))}
          </div>
          <button className="arrow right" onClick={handleNext} disabled={startIndex + visibleCount >= reviews.length}>
            <FaChevronRight />
          </button>
        </div>
      </section>
    );
  };
  
  export default CustomerReviews;
