import React, { useState } from "react";
import "./TeaTypesCarousel.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const teaTypes = [
  {
    title: "Green Tea",
    image: "/green-tea.jpg",
    link: "#green",
  },
  {
    title: "Herbal Tea",
    image: "/herbal-tea.jpg",
    link: "#herbal",
  },
  {
    title: "Black Tea",
    image: "/black-tea.jpg",
    link: "#black",
  },
  {
    title: "Gift Sets",
    image: "/gift-tea.jpg",
    link: "#gifts",
  },
];

const TeaTypesCarousel = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((prev) => (prev === 0 ? teaTypes.length - 1 : prev - 1));
  const next = () => setIndex((prev) => (prev + 1) % teaTypes.length);

  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        <button className="arrow left" onClick={prev}><FaChevronLeft /></button>
        <div className="tea-slide">
          <img src={teaTypes[index].image} alt={teaTypes[index].title} />
          <h2>{teaTypes[index].title}</h2>
          <a href={teaTypes[index].link} className="shop-btn">Shop Now</a>
        </div>
        <button className="arrow right" onClick={next}><FaChevronRight /></button>
      </div>
    </div>
  );
};

export default TeaTypesCarousel;
