import React from "react";
import "./AboutBrand.css";
import { FaLeaf, FaHandSparkles, FaBoxOpen } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const AboutBrand = () => {
  const { ref: imageRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // 30% visible
  });

  return (
    <section className="about-brand-modern">
      <img
        ref={imageRef}
        src="/about-tea.jpg"
        alt="Our tea story"
        className={`about-image ${inView ? "animate-in" : ""}`}
      />

      <div className="about-content">
        <h2><span role="img" aria-label="leaf">🌱</span> About Tea by Green</h2>
        <p>
          At Tea by Green, we believe tea is more than just a drink — it’s a ritual, a moment of peace, and a way to connect with nature.
        </p>

        <ul className="about-highlights">
          <li><FaLeaf className="icon" /> <strong>Sustainably Sourced:</strong> We partner with farms that respect the earth and harvest ethically.</li>
          <li><FaHandSparkles className="icon" /> <strong>Hand-Crafted Blends:</strong> Every blend is curated by tea artisans for a unique experience.</li>
          <li><FaBoxOpen className="icon" /> <strong>Freshness Guaranteed:</strong> Packed at origin and sealed with love to reach you fresh.</li>
        </ul>

        <p className="about-mission">
          Whether you're sipping solo or gifting a friend, our mission is to make every cup meaningful.
        </p>
      </div>
    </section>
  );
};

export default AboutBrand;
