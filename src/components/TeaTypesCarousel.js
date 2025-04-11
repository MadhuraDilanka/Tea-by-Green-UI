import React, { useState } from "react";
import "./TeaTypesCarousel.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const teaTypes = [
  {
    title: "Green Tea",
    image: "/green-tea.jpg",
    link: "/green-tea",
  },
  {
    title: "Herbal Tea",
    image: "/herbal-tea.jpg",
    link: "/herbal-tea",
  },
  {
    title: "Black Tea",
    image: "/black-tea.jpg",
    link: "/black-tea",
  },
  {
    title: "Gift Sets",
    image: "/gift-tea.jpg",
    link: "/gift-sets",
  },
];

const TeaTypesCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 2;

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const handleNext = () => {
    if (startIndex + visibleCount < teaTypes.length) setStartIndex(startIndex + 1);
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        <button className="arrow left" onClick={handlePrev} disabled={startIndex === 0}>
          <FaChevronLeft />
        </button>

        <div className="tea-multi-slide-wrapper">
          {teaTypes.slice(startIndex, startIndex + visibleCount).map((type, idx) => (
            <div className="tea-slide" key={idx}>
              <img src={type.image} alt={type.title} />
              <h2>{type.title}</h2>
              <a href={type.link} className="shop-btn">Shop Now</a>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={handleNext} disabled={startIndex + visibleCount >= teaTypes.length}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default TeaTypesCarousel;
